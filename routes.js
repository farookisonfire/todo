const { Router } = require('express')
const { ObjectId } = require('mongodb')


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
  router.put('/todoId/:todoId/completed/:completed', (req,res) => {

    console.log(req.params)
    const toggler = req.params.completed === 'false' ? false : true
    myTodos.update({_id: ObjectId(req.params.todoId)} ,{$set:{
      completed: !toggler
    }}, (err) => {
      if(err) return res.sendStatus(500)
      myTodos.findOne({_id:ObjectId(req.params.todoId)},(err, doc) => {
        console.log(doc)
        res.json(doc)
      })
    })
  })
  return router
}
