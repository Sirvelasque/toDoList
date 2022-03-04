import './style.css';
import Task from '../modules/tasks.js';
import update from '../modules/ToDoList';

const container = document.getElementById('list');
const input = document.querySelector('#newTask');

update.loadDataFromStorage();

input.addEventListener('keypress', (e) => {
   const task = input.value;
  if (e.key === 'Enter') {
    update.addTask(task);
  }
});
