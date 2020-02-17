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

  function salvaTrecos(){
    let tarefa = document.getElementById("input").value //Aqui ele le o documento
    segura = tarefa.split("em") //Faz o Split da string

    novaTarefa = new tarefa(segura[1], segura[0], "false") //Cria o objeto

    const stringUser = JSON.stringify(novaTarefa); //Usando a constante usa a funcao de string do JSON

    localStorage.setItem('tarefa', stringUser); //Seta o item no localStorage
    pega = localStorage.getItem('tarefa'); //Pega o item do localStorage
    passa = JSON.parse(pega); //Passa o item do localStorage

    document.getElementById('tarefa').value = "" //Reseta o valor do campo input pra ""
  }