var app = angular.module('todo', [])
app.controller('HomeController', TheHomeController)
app.factory('todosData', todosData)


TheHomeController.$inject = ['todosData']

function TheHomeController(todosData){
  const vm = this;
  vm.todos = []
  vm.message = 'Hey World'
  vm.switch = (todo) => {
    // const toUpdate = Object.assign({},todo,{completed:!todo.completed})
    todosData.updateTodo(todo).then(res => {
      Object.assign(todo, res)
    })
    vm.count = theCount()
  }
  vm.count = theCount()
  vm.newTodo = {details: '', completed:false}

  // function loadTodos(){
  // $http.get('/todos').success(todos => {
  //   vm.todos = todos
  // })
  // }
  // loadTodos()

  todosData.loadTodos().then(res => {
    vm.todos = res
  })


  vm.addTodo = () => {
    todosData.addTodo(vm.newTodo).then(res => vm.todos.push(res) )
  }

  function theCount(){
    return vm.todos.filter(todo => !todo.completed).length
  }
}


todosData.$inject = ['$http']

function todosData($http){
  return {
    loadTodos,
    addTodo,
    updateTodo
  }

  function loadTodos(){
    return $http.get('/todos').then(res => res.data)
  }

  function addTodo(todo){
    return $http.post('/todos', todo).then(res => res.data)
  }

  function updateTodo(todo){
    const todoId = todo._id
    console.log(todoId)
    console.log(todo.completed)
    return $http.put('/todos/todoId/' + todoId + '/completed/' + todo.completed).then(res =>{
      console.log('here\'s the res.data:')
      console.log(res.data)
      return res.data
    })
  }

}
