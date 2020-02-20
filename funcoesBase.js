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
    //limpa os dados do local localStoragee recarrega a pagina
    function resetdata() {
        localStorage.clear();
        location.reload();
    }
    //se o localStorage ja tiver os dados preenche a tabela com eles
    function verificaStorage() {
        if(localStorage.length >= 1)insertTable();
    }
//função para armazenar dados no localStorage e settar na tabela a partir da posição do dado inserido no localStorage
  function addInfo(){

    let tarefa = document.getElementById('input').value;

    arr = tarefa.split("em");
    tarefa = new Tarefa(arr[1], arr[0], undefined);

    const string = JSON.stringify(tarefa);
    localStorage.setItem('tarefa' + localStorage.length, string);

    inserirLinha(localStorage.length-1);
    document.getElementById('input').value="";
}
  //função para inserir dados do localStorage na tabela
  function inserirLinha(i){
    busca = localStorage.getItem('tarefa'+i)
    passa = JSON.parse(busca);
		var linha = document.getElementById('tabela').insertRow();

		linha.insertCell(0).innerHTML = passa["data"];
  	linha.insertCell(1).innerHTML = passa["informacao"];
  	linha.insertCell(2).innerHTML = "<button class=\"button-td-confirm\" id=\"tarefa"+i+"\" onclick=\"taxarLinha(this, 'tarefa"+i+")\">V</button>";
  	linha.insertCell(3).innerHTML = "<button class=\"button-td-cancel\" id=\"tarefa"+i+"\" onclick=\"redLinha(this, 'tarefa"+i+"')\">X</button>";
    // if (passa["situacao"]) taxarLinha(linha);
    // else if(passa["situacao"]==false) taxarLinha(linha);
  }
//função pra inserir valores do localStorage na tabela
  function insertTable(){
		var linhas = document.getElementById('tabela').rows;
		for (i = 0;i<linhas.length; i++){
      inserirLinha( i);
		}
	}
  // funcao seta padrão concluído
  function taxarLinha(linha, ident) {
    pai = linha.parentNode.parentNode;
    pai.style.textDecoration = 'line-through';
    pai.style.background = 'lightgreen';
    var itens = document.getElementById(ident).disabled = true;
  }
  // funcao seta padrão não concluído
  function redLinha(linha, ident) {
      localStorage.removeItem(ident);
      linha.parentNode.parentNode.remove()
  }