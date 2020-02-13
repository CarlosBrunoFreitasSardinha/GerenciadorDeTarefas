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
    var ul = document.querySelector("#items");
    ul.innerHTML = ""; 
  }