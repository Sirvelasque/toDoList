import Task from './tasks.js';

class Todo {
  static list = [];

  static addTask(task) {
    if(!localStorage.getItem('tasks')){
      localStorage.setItem('tasks', JSON.stringify(this.list));
   }
    const newtask = new Task(false, task, this.list.length + 1);
    this.list.push(newtask);
 
    localStorage.setItem('tasks', JSON.stringify(this.list));
    this.displaytask(task);
  }

  static displaytask(task){
    const row = document.createElement('li');
    const container = document.getElementById('list');
    row.classList.add('item')
    row.innerHTML = `
    <input name="completed" type="checkbox" class="completed-sheck">
    <div>${task}</div>
    `;
    container.appendChild(row);

  }

  static displayTasks(){
    this.list.forEach((task) => this.displaytask(task.task));
  }

  static loadDataFromStorage() {
    const data = JSON.parse(localStorage.getItem('tasks'));
    if (data && data !== '') {
      this.list = data.map((value) => new Task(value.completed, value.task, value.index));
    }
    this.displayTasks();
  }

}

export default Todo;