import './style.css';

class Task {
  constructor(completed, task, index) {
    this.completed = completed;
    this.task = task;
    this.index = index;
  }
}

let tasks = [];

const defaultTasks = [
  {
    completed: false,
    task: 'study',
    index: 1,
  },
  {
    completed: false,
    task: 'eat',
    index: 2,
  },
  {
    completed: false,
    task: 'sleep',
    index: 3,
  },
];

function addTask(task) {
  const container = document.getElementById('list');
  const row = document.createElement('li');
  row.innerHTML = `
  <input name="completed" type="checkbox" class="completed-sheck">
  <div>${task.task}</div>
  `;
  container.appendChild(row);

  const taskitem = new Task(task.completed, task.task, task.index);
  tasks.push(taskitem);
}

function displayTasks() {
  defaultTasks.forEach(task => (addTask(task)));
}
displayTasks();