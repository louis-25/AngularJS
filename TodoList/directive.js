angular.module('todo').directive('todoTitle', () => {
  return {
    template: '<h1>투두 목록</h1>'
  }
})

angular.module('todo').directive('todoItem', () => {
  return {
    templateUrl: 'todoItem.tpl.html',    
  }
})

angular.module('todo').directive('todoFilters', () => {
  return {
    templateUrl: 'todoFilters.tpl.html'
  };
})

angular.module('todo').directive('todoForm', () => {
  return {
    templateUrl: 'todoForm.tpl.html'
  }
})