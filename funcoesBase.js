  function add() {
    var val = document.querySelector('#newItem').value;
    if((val !== undefined) && (val !== "")) {
      var ul = document.querySelector("#items");
      var newItem = document.createElement("li");
      newItem.textContent = val;
      ul.append(newItem);
    }
  }

  function reset() {
    document.calcform.display.value = ''
     delete lista;
  }
  function addInfo(){
    alert("fsfsdf")
    var textoDaInput = document.getElementById('tarefa');
    var arr = str.split("em");
    lista.push({arr[0],arr[1],false});
    document.getElementById('tarefa').value='222'
  }
