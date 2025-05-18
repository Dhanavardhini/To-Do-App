module.exports = (todos) => ({
  add: (req, res) => {
    const newTodo = { id: todos.length + 1, ...req.body };
    todos.push(newTodo);
    res.status(201).json(newTodo);
  }
});
