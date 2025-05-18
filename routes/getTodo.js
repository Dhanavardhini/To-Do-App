module.exports = (todos) => ({
  getAll: (req, res) => res.json(todos),
  getOne: (req, res) => {
    const id = parseInt(req.params.id);
    const todo = todos.find(t => t.id === id);
    todo ? res.json(todo) : res.status(404).json({ message: 'Not found' });
  }
});
