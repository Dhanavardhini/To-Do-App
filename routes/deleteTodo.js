module.exports = (todos) => ({
  remove: (req, res) => {
    const id = parseInt(req.params.id);
    const index = todos.findIndex(t => t.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
      res.json({ message: 'Deleted successfully' });
    } else {
      res.status(404).json({ message: 'Not found' });
    }
  }
});
