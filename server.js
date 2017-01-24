const reload = require('reload')
const express = require('express')
const app = express()
const md5 = require('md5')

const indexTemplate = require('./template')

app.set('port', process.env.PORT || 3000)

app.use(express.static('./public'))

app.get("/", (req, res) => {
  res.send(indexTemplate)
})

const server = app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
})

reload(server, app)
