class status {
  static classUpdate(e){
    const row = e.target.parentElement;
    row.classList.toggle('completed');
  }

  static updateItem(e, task){
    const checkbox = e.target;
    if(checkbox.checked){
      return true
    }else{
      return false;
    }

  }
}

export default status;