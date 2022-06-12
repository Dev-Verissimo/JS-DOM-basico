function adicionarPensamento() {
  var pensamento = prompt("Qual o seu pensamento de açucar? ");

  var lista = document.querySelector(".pensamentos");

  lista.innerHTML += `
    <li onclick="apagarItem(this)">${pensamento}</li>
  `;
}

function apagarItem(elemento) {
  // Apagar item
  elemento.remove();
}
