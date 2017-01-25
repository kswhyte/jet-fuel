const express = require('express')
const app = express()
const reload = require('reload')
const md5 = require('md5')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

const indexTemplate = require('./template')

app.set('port', process.env.PORT || 3000)
app.locals.folders = {}

app.use(express.static('./public'))

app.get('/', (req, res) => {
  res.send(indexTemplate)
})

app.post('/api/folders', (req, res) => {
  console.log('req.body', req.body)
  const { folderName } = req.body
  const id = md5(folderName)

  app.locals.folders[id] = folderName

  res.json({ id, folderName })
})

const server = app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
})

reload(server, app)
