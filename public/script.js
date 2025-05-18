async function loadTodos() {
  const res = await fetch('/todos');
  const todos = await res.json();
  const list = document.getElementById('todoList');
  list.innerHTML = '';
  todos.forEach(todo => {
    const li = document.createElement('li');

    // Task text with completed style
    const taskSpan = document.createElement('span');
    taskSpan.className = 'task-text' + (todo.completed ? ' completed' : '');
    taskSpan.innerText = todo.task;

    // Buttons container
    const btnContainer = document.createElement('div');
    btnContainer.className = 'buttons';

    // Edit button
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-btn';
    editBtn.innerText = 'Edit';
    editBtn.onclick = () => editTodo(todo);

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerText = 'Delete';
    deleteBtn.onclick = () => deleteTodo(todo.id);

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(deleteBtn);

    li.appendChild(taskSpan);
    li.appendChild(btnContainer);

    list.appendChild(li);
  });
}

document.getElementById('todoForm').addEventListener('submit', async e => {
  e.preventDefault();
  const taskInput = document.getElementById('task');
  const task = taskInput.value.trim();
  if (!task) return;

  await fetch('/todos', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task, completed: false })
  });

  taskInput.value = '';
  loadTodos();
});

async function deleteTodo(id) {
  await fetch(`/todos/${id}`, { method: 'DELETE' });
  loadTodos();
}

async function editTodo(todo) {
  const newTask = prompt("Edit task:", todo.task);
  if (newTask === null) return; // Cancelled
  const newCompleted = !todo.completed;  // toggle for demo
  await fetch(`/todos/${todo.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ task: newTask.trim(), completed: newCompleted })
  });
  loadTodos();
}

loadTodos();
