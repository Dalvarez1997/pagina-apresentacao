let display = document.getElementById("display");

function inserir(valor) {
  if (display.innerText === "0") {
    display.innerText = valor;
  } else {
    display.innerText += valor;
  }
}

function limpar() {
  display.innerText = "0";
}

function calcular() {
  try {
    display.innerText = eval(display.innerText);
  } catch (e) {
    display.innerText = "Erro";
  }
}
