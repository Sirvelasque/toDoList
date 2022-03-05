class status {
  static classUpdate(e){
    const row = e.target.parentElement;
    row.classList.toggle('completed');
  }
}

export default status;