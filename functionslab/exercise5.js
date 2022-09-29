fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todo => {
    const completedTodo = todo.reduce((acc, todo) => {
        todo.completed ? acc+1 : acc.push({userId: todo.userId, title: todo.title});
        return acc},[])
        console.log(completedTodo)
    })
    .catch(function(err) { 
      console.log(err);
    });


