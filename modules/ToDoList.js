import Task from './tasks.js';

class Todo {
  static tasks = [];

  static addTask(task) {
    if(!localStorage.getItem('tasks')){
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
   }
    const newtask = new Task(false, task, this.tasks.length + 1);
    this.tasks.push(newtask);
 
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.displaytask(task);
  }

  static removefromUI() {
    document.querySelectorAll('.completed').forEach((listItem) => listItem.remove());

    this.tasks.slice(0).forEach((task) => this.removeFromList(task));
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  static removeFromList (task){
    const num = task.index -1;

    if(task.completed === true){
      this.tasks.splice(num, 1);
      this.updateIndexes(num);
    }
  }

  static updateIndexes(index){
    for(let i = index; i < this.tasks.length ; i+=1){
      this.tasks[i].index -=1;
    }
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
    this.tasks.forEach((task) => this.displaytask(task.task));
  }

  static loadDataFromStorage() {
    const data = JSON.parse(localStorage.getItem('tasks'));
    if (data && data !== '') {
      this.tasks = data.map((value) => new Task(value.completed, value.task, value.index));
    }
    console.log(this.tasks);
    this.displayTasks();
  }

}

export default Todo;