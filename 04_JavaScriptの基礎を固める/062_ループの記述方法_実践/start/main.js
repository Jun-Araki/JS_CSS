const todos = [
  {
    id: 1,
    title: "title_1",
    completed: true
  },
  {
    id: 2,
    title: "title_2",
    completed: true
  },
  {
    id: 3,
    title: "title_3",
    completed: false
  },
]

for (let todo of todos) {
  if (todo.completed) {
    console.log(todo.title);
  }
}
