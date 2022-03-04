import './style.css';
import update from '../modules/ToDoList';

const deleteBtn = document.querySelector('#delete')
const input = document.querySelector('#newTask');

update.loadDataFromStorage();

input.addEventListener('keypress', (e) => {
   const task = input.value;
  if (e.key === 'Enter') {
    update.addTask(task);
  }
});

deleteBtn.addEventListener('click', () =>{
  update.removefromUI();
});
