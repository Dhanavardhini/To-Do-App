const express = require('express');
const router = express.Router();

let todos = [
  { id: 1, task: "Learn Node.js", completed: false },
  { id: 2, task: "Build CRUD API", completed: true }
];

const getHandlers = require('./getTodo')(todos);
const postHandlers = require('./postTodo')(todos);
const putHandlers = require('./putTodo')(todos);
const deleteHandlers = require('./deleteTodo')(todos);

// GET
router.get('/', getHandlers.getAll);
router.get('/:id', getHandlers.getOne);

// POST
router.post('/', postHandlers.add);

// PUT
router.put('/:id', putHandlers.update);

// DELETE
router.delete('/:id', deleteHandlers.remove);

module.exports = router;
