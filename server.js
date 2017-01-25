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

app.post('/api/folders', (req, res) => {
  const { folderName } = req.body
  const id = md5(folderName)

  app.locals.folders[id] = folderName

  res.send(foldersList(app.locals.folders))
})

const server = app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
})

reload(server, app)
