const reload = require('reload')
const express = require("express")
const app = express()

app.set('port', process.env.PORT || 3000)

app.get("/", (req, res) => {
  res.send(`<h1>Jet Fuel TEST</h1><script src='reload/reload.js'></script>`)
})

const server = app.listen(app.get('port'), () => {
  console.log(`Listening on port ${app.get('port')}`)
})

reload(server, app)
