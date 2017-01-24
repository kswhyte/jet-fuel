const reload = require('reload')
const express = require('express')
const app = express()
const indexTemplate = require('./templates')

app.set('port', process.env.PORT || 3000)

app.get("/", (req, res) => {
  res.send(indexTemplate)
})

const server = app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
})

reload(server, app)
