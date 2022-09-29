fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todo => {
    const uncompleted = todo.filter(todo => !todo.completed).map(todo => ({userId: todo.userId, title: todo.title}) );
        console.log(uncompleted)
  })
  .catch(function(err) { 
    console.log(err);
  });

