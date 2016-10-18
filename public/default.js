const app = angular.module('todo', [])
app.controller('HomeController', Welcome)

function Welcome(){
  const vm = this;
  vm.message = 'Hey there world'
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
