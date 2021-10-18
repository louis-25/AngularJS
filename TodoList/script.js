let app = angular.module('todo',[]);

app.controller('TodoCtrl', ($scope)=>{
  $scope.todos = [
    {
      title: '앵귤러 학습',
      completed: false,
      createdAt: Date.now()
    },
    {
      title: '운동하기',
      completed: false,
      createdAt: Date.now()
    },
    {
      title: '점심식사',
      completed: false,
      createdAt: Date.now()
    },
  ];

  $scope.remove = (todo) => {
    // find todo index in todos
    let idx = $scope.todos.findIndex((item)=>{
      return item.id === todo.id
    })

    if(idx > -1) {
      $scope.todos.splice(idx, 1)
    }
    // remove from todos
  }
})