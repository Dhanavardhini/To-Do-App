const express = require('express');
const app = express();
const path = require('path');
const todoRoutes = require('./routes');
const PORT = 3000;

app.use(express.json());

// Serve HTML + JS
app.use(express.static(path.join(__dirname, 'public')));

// Use /todos API
app.use('/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
    