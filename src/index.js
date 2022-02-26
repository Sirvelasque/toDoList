import _, { create } from 'lodash';
import './style.css';

class Task {
  constructor(completed, task, index){
    this.completed = completed;
    this.task = task;
    this.index = index;
  }
}

let tareas = [];


const defaultTasks = [
  {
    completed: false,
    task: 'study',
    index: 1
  },
  {
    completed: false,
    task: 'eat',
    index: 2
  },
  {
    completed: false,
    task: 'sleep',
    index: 3
  },
];

function addTask(task) {
  const container = document.getElementById('list');
  const row = document.createElement('li');
  
  row.innerHTML= `
  <input name="completed" type="checkbox" class="completed-sheck">
  <div>${task.task}</div>
  `;
  container.appendChild(row);
}

function displayTasks(){
  defaultTasks.forEach(task => addTask(task));
}

displayTasks();