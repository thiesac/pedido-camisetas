let pedidos = [];
let camisetaP;
let p;
let m;
let g;

function calcular() {
  p = document.getElementById("quant-p").value;
  m = document.getElementById("quant-m").value;
  g = document.getElementById("quant-g").value;

  camisetaP = parseFloat(10 * p);
  camisetaM = parseFloat(12 * m);
  camisetaG = parseFloat(15 * g);
  soma = camisetaG + camisetaM + camisetaP;

  let addPedido = {
    camisetaP: p,
    camisetaM: m,
    camisetaG: g,
    soma: soma,
  };
  pedidos.push(addPedido);

  imprimirPedidos();
  limpar();
}

function imprimirPedidos() {
  const imprimePedido = document.getElementById("t-pedidos");
  imprimePedido.innerHTML = "";

  for (i = 0; i < pedidos.length; i++) {
    imprimePedido.innerHTML += `
       
          <tr>
            <td>${pedidos[i].camisetaP}</td>
            <td>${pedidos[i].camisetaM}</td>
            <td>${pedidos[i].camisetaG}</td>
            <td>R$${pedidos[i].soma}</td>
            <td><button id="btn-editar" onclick="editar(${i})">Editar</button></td>
            <td><button id="btn-excluir" onclick="excluir(${i})">Excluir</button></td>
          </tr>
      
        `;
  }
}

function editar(i) {
  //caso campo "quant-p" esteja vazio
  if (document.getElementById("quant-p").value == "") {
    document.getElementById("quant-p").value = p;
  }
  //caso campo "quant-m" esteja vazio
  if (document.getElementById("quant-m").value == "") {
    document.getElementById("quant-m").value = m;
  }
  //caso campo "quant-g" esteja vazio
  if (document.getElementById("quant-g").value == "") {
    document.getElementById("quant-g").value = g;
    pedidos[i].camisetaP = document.getElementById("quant-p").value;
    pedidos[i].camisetaM = document.getElementById("quant-m").value;
  } else {
    pedidos[i].camisetaP = document.getElementById("quant-p").value;
    pedidos[i].camisetaM = document.getElementById("quant-m").value;
    pedidos[i].camisetaG = document.getElementById("quant-g").value;
  }

  //atualiza o valor da *soma*
  pedidos[i].soma =
    parseFloat(document.getElementById("quant-p").value * 10) +
    parseFloat(document.getElementById("quant-m").value * 12) +
    parseFloat(document.getElementById("quant-g").value * 15);

  imprimirPedidos();
  limpar();
}

function excluir(i) {
  pedidos.splice(i, 1);
  imprimirPedidos();
  limpar();
}

function limpar() {
  document.getElementById("quant-p").value = "";
  document.getElementById("quant-m").value = "";
  document.getElementById("quant-g").value = "";
}
