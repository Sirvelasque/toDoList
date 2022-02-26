import './style.css';
import Task from '../modules/tasks.js';

let tasks = [];
const container = document.getElementById('list');
const input = document.querySelector('#newTask');

if(localStorage.getItem('tasks')){
  tasks = JSON.parse(localStorage.getItem('tasks'));
}

input.addEventListener('keypress', (e) => {
   const data = input.value;
  if (e.key === 'Enter') {
    const taskitem = new Task(false, data, (tasks.length + 1));
    console.log(taskitem);
    taskitem.addTask(container);
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
});


function addTask(task) {
  const row = document.createElement('li');
  row.innerHTML = `
  <input name="completed" type="checkbox" class="completed-sheck">
  <div>${task.task}</div>
  `;
  container.appendChild(row);

}

function displayTasks() {
  tasks.forEach((task) => addTask(task));
}

displayTasks();