angular
  .module('todo', [])
  .controller('HomeController', TheHomeController)
    .$inject = ['$http']

function TheHomeController($http){
  const vm = this;
  vm.todos = [
    // {details:'Eat food', completed:false},
    // {details: 'Drink water', completed:true},
    // {details: 'Sleep', completed:false}
  ]
  vm.message = 'Hey World'
  vm.switch = (todo) => {
    todo.completed = !todo.completed
    vm.count = theCount()
  }
  vm.count = theCount()
  vm.newTodo = {details: '', completed:false}

  $http.get('/todos').success(todos => {
    vm.todos = todos
  })

  vm.addTodo = () => {
    console.log('post should have fired')

    // const data = {
    //   details:'test1', completed:false
    // }

    $http.post('/todos', vm.newTodo)
      .success(todo => {
        vm.todos.push(todo)
      })
  }

  function theCount(){
    return vm.todos.filter(todo => !todo.completed).length
  }
}
