const createApp = require('./create-app')
const { MongoClient } = require('mongodb')

const URI = 'mongodb://localhost:27017/todo-app'
const PORT = 3000

MongoClient.connect(URI, (err, db) => {
  if(err) {
    console.error(err)
    process.exit(1)
  }
  const app = createApp(db)
  app.listen(PORT, ()=>{
    console.log('listening on ' + PORT)
  })
})
