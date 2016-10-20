const express = require('express')
const myRouter = require('./routes')
const bodyParser = require('body-parser')

module.exports = function createApp(db){
  const app = express()
  app.use(express.static('public'))
  app.use(bodyParser.json())
  app.use('/todos', myRouter(db))
  

  return app
}
