const input = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const list = document.getElementById('todo-list');

addButton.addEventListener('click', () => {
  const taskText = input.value.trim();
  if (taskText === '') return;

  const listItem = document.createElement('li');
  listItem.textContent = taskText;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '❌';
  deleteBtn.addEventListener('click', () => {
    listItem.remove();
  });

  listItem.appendChild(deleteBtn);
  list.appendChild(listItem);
  input.value = '';
});
