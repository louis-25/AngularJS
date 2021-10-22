let app = angular.module('todo',[]);

app.controller('TodoCtrl', ($scope, todoStorage)=>{
  
  $scope.todos = todoStorage.get();

  $scope.remove = (todo) => {
    // find todo index in todos
    todoStorage.remove(todo)
  }

  $scope.add = (newTodoTitle)=>{
    // create new todo
    todoStorage.add(newTodoTitle)
    $scope.newTodoTitle = "";
  }
})

