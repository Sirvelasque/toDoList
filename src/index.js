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
const container = document.getElementById('list');

const defaultTasks = [
  {
    task: 'study'
  },
  {
    task: 'eat'
  },
  {
    task: 'sleep'
  },
];

