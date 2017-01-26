const express = require('express')
const app = express()
const reload = require('reload')
const md5 = require('md5')
const bodyParser = require('body-parser')
const indexTemplate = require('./templates/index')
const foldersList = require('./templates/folders')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('./public'))

app.set('port', process.env.PORT || 3000)

app.locals.folders = {}

app.get('/', (req, res) => {
  res.send(indexTemplate())
})

app.get('/api/folders', (req, res) => {
  res.send(foldersList(app.locals.folders))
})

app.post('/api/folders', (req, res) => {
  const { folderName } = req.body
  const folderID = md5(folderName)

  app.locals.folders[folderID] = folderName

  res.send(foldersList(app.locals.folders))
})

app.post('/api/folders/:folder_id', (req, res) => {
  const folderID = req.params.folder_id
  const { url, uri } = req.body
  const folder = app.locals.folders[folderID]
  const urlID = md5(url)
  const shortURL = createShortURL(urlID, uri)

  folder.urlID = [ url, shortURL ]

  res.send(foldersList())
})

const createShortURL = (urlID, uri) => {
  return `${uri.slice(7, uri.length)}${urlID.slice(0,5)}`
}

const server = app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
})

reload(server, app)
