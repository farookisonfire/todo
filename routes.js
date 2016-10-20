const { Router } = require('express')

module.exports = function myRouter(db){
  const router = new Router
  var myTodos = db.collection('todo')

  router.get('/', (req, res) => {
    myTodos.find().toArray((err, docs) => {
      if (err) res.sendStatus(500)
      console.log('get handled')
      res.json(docs)
    })
  })
  router.post('/', (req, res) => {
    console.log(req.body)
    myTodos.insert(req.body, (err, result) => {
      if(err) return res.sendStatus(500)
      res.json(result.ops[0])
    })
  })
  return router
}
