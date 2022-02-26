class Task {
  constructor(completed, task, index) {
    this.completed = completed;
    this.task = task;
    this.index = index;
  }

  addTask(container){
    let ar = [];
    if(!localStorage.getItem('tasks')){
      localStorage.setItem('tasks', JSON.stringify(ar));
    }
    let storagedInfo = localStorage.getItem('tasks');
    storagedInfo = JSON.parse(storagedInfo),
    ar = storagedInfo;
    console.log(ar);
    ar.push(this);
    localStorage.setItem('tasks', JSON.stringify(ar))

    const row = document.createElement('li');
    row.innerHTML = `
    <input name="completed" type="checkbox" class="completed-sheck">
    <div>${this.task}</div>
    `;
    container.appendChild(row);
  }

}

export default Task;