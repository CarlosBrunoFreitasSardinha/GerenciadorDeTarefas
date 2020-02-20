  class Tarefa{
    constructor(data, informacao, situacao){
      this.data = data;
      this.informacao = informacao;
      this.situacao = situacao;
    }

    getInfo(){
      return this.informacao;
    }

    getData(){
      return this.data;
    }

    getSituacao(){
      return this.situacao;
    }
  }

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
    a = localStorage.length;
    i = 0;
    while (i < localStorage.length){
      i = i+1;}

    alert("Adicionado")

    let tarefa = document.getElementById('input').value;
    arr = tarefa.split("em");


    tarefa = new Tarefa(arr[1], arr[0], false);


    const string = JSON.stringify(tarefa);

    localStorage.setItem('tarefa' + i, string)

    busca = localStorage.getItem('tarefa')
    passa = JSON.parse(busca);

    document.getElementById('input').value=""
  }

  function adicionarLinhaTabela(){
    onload.call()
    busca = localStorage.getItem('tarefa')
    passa = JSON.parse(busca);

    var tabela = document.getElementById('tabela');
		var numeroLinhas = tabela.rows.length;
		var linha = tabela.insertRow();
		var celula1 = linha.insertCell(0);
		var celula2 = linha.insertCell(1);
		var celula3 = linha.insertCell(2);
		var celula4 = linha.insertCell(3);
		celula1.innerHTML = passa.Tarefa[1];
  	celula2.innerHTML = passa.Tarefa[0];
  	celula3.innerHTML = "<button class='button-td-confirm'>V</button>";
  	celula4.innerHTML = "<button class='button-td-cancel'>X</button>";
  }