const app = angular.module('todo', [])

app.controller('HomeController', Welcome)
app.controller('ToDoController', ToDos)

ToDos.$inject = ['$http']

function Welcome(){
  const vm = this;
  vm.message = 'Welcome!'
}

function ToDos($http) {
  const vm = this;
  vm.myTodos = []
  vm.message = 'Todos go here:'
  vm.class = 'un-clicked'
  vm.count = 3
  vm.count > 0 ? true : false
  vm.show = function(){
    return vm.count
  }

  loadTodos()

  function loadTodos() {
    $http.get('/todos').success(todos => {
      vm.myTodos = todos
    })
  }
  vm.changeClass = function(item){
    if (item.value) {
      item.value = false
      vm.count += 1
    } else {
      item.value = true
      vm.count -= 1
    }
  }
}
























// const app = angular.module('greet', []);
//
// app.controller('Welcome', Greet);
// app.controller('Slogan', TheSlogan);
//
// function Greet() {
//   const vm = this;
//   vm.greeting = 'Hello there!'
// }
//
// function TheSlogan() {
//   const vm = this;
//   vm.greeting = 'Welcome to the real world'
// }
