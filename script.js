let pedidos = [];
let camisetaP;

function calcular() {
  const p = document.getElementById("quant-p").value;
  const m = document.getElementById("quant-m").value;
  const g = document.getElementById("quant-g").value;

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
            <td><button onclick="editar(${i})">Editar</button></td>
            <td><button onclick="excluir()">Excluir</button></td>
          </tr>
      
        `;
  }
}

function editar(i) {
  pedidos[i].camisetaP = document.getElementById("quant-p").value;
  pedidos[i].camisetaM = document.getElementById("quant-m").value;
  pedidos[i].camisetaG = document.getElementById("quant-g").value;
  pedidos[i].soma = camisetaG + camisetaM + camisetaP;
  console.log(pedidos[i].soma);
  imprimirPedidos();
}
