const app = angular.module('todo', [])

app.controller('HomeController', Welcome)
app.controller('ToDoController', ToDos)


function Welcome(){
  const vm = this;
  vm.message = 'Welcome!'
}

function ToDos() {
  const vm = this;
  vm.myTodos = [
    {label: 'Eat food', value: false},
    {label: 'Drink beer', value: false},
    {label:'Sleep', value: false}
  ]
  vm.message = 'Todos go here:'
  vm.class = 'un-clicked'
  vm.count = 3
  vm.show = function(){
    if (vm.count > 0) {
      return true
    } else {
      return false
    }
  }

  vm.count > 0 ? true : false

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
