module.exports = (todos) => ({
  update: (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    if (index !== -1) {
      todos[index] = { id, ...req.body };
      res.json(todos[index]);
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  }
});
