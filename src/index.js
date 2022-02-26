import _, { create } from 'lodash';
import './style.css';

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
