fetch("https://jsonplaceholder.typicode.com/todos")
.then(response => response.json())
.then(todo => {
   const completedTodo = todo.reduce((acc, todo) => {
    return todo.completed ? acc+1 : acc}, 0)
    console.log(completedTodo)
})
.catch(function(err) { 
  console.log(err);
});