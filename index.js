const express = require('express')
const { MongoClient } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/todo-app', (err, db) => {

  const app = express()

  var myTodos = db.collection('todo')

  app.use(express.static('public'))

  app.get('/todos', (req, res) => {
    myTodos.find().toArray((err,docs) => {
      if(err) res.sendStatus(500)
      console.log('get handled')
      console.log(docs)
      res.json(docs)
    })
  })
  app.listen(3000, ()=> {
    console.log('listening on port 3000')
  })

})
