fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(todo => {
     const todoTitles = todo.map(
        todo => todo.title);
        console.log(todoTitles)
  })
  .catch(function(err) { 
    console.log(err);
  });

