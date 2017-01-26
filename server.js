const express = require('express')
const app = express()
const reload = require('reload')
const md5 = require('md5')
const bodyParser = require('body-parser')
const indexTemplate = require('./templates/index')
const foldersList = require('./templates/folders')
const urlTable = require('./templates/urlTable')
const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile.js')[environment]
const database = require('knex')(configuration)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.set('port', process.env.PORT || 3000)

app.locals.folders = {}

app.get('/', (req, res) => {
  res.send(indexTemplate())
})

app.get('/api/folders', (req, res) => {
  database('folders').select()
    .then((folders) => {
      database('urls').select()
        .then(urls => {
          res.status(200).send(foldersList(folders, urls))
        });
    })
    .catch((err) => {
      console.error(err)
    })
})

// app.get('/api/folders/urls', (req, res) => {
//
// });

app.post('/api/folders', (req, res) => {
  const { folderName } = req.body
  const folderID = md5(folderName)

  const folderPackage = {
    id:folderID,
    name:folderName,
    created_at:new Date
  }

  database('folders').insert(folderPackage)
    .then(() => {
      database('folders').select()
        .then((folders) => {
          res.status(200).send(foldersList(folders))
        })
    })
    .catch((err) => {
      console.error(err)
    })
})

app.post('/api/folders/:folder_id', (req, res) => {
  const folderID = req.params.folder_id
  const { url, uri } = req.body
  const urlID = md5(url)
  const shortURL = createShortURL(urlID, uri)

  const urlPackage = {
    id:urlID,
    url,
    shortened:shortURL,
    count:0,
    folder_id:folderID,
    created_at:new Date()
  }

  database('urls').insert(urlPackage)
    .then(() => {
      database('urls').select()
        .then((urls) => {
          res.status(200).send(urlTable(urls))
        })
      .catch((err) => {
        console.error(err)
      })
    })
})

const createShortURL = (urlID, uri) => {
  return `${uri.slice(7, uri.length)}${urlID.slice(0,5)}`
}

const server = app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
})

reload(server, app)
