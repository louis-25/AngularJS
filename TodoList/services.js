angular.module('todo').factory('todoStorage', ()=>{
  let storage = {    
    todos: [
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
    ],

    get: () => {
      return storage.todos;
    },
    add: (newTodoTitle) => {
      let newTodo = {
        title: newTodoTitle,
        completed: false,
        createdAt: Date.now()
      }    
      storage.todos.push(newTodo)      
    },
    remove: (todo) => {
      let idx = storage.todos.findIndex((item)=>{
        return item.id === todo.id
      })
  
      if(idx > -1) {
        storage.todos.splice(idx, 1)
      }
      // remove from todos
    }
  }

  return storage
})