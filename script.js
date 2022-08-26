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
            <td><button id="btn-editar" onclick="editar(${i})">Editar</button></td>
            <td><button id="btn-excluir" onclick="excluir(${i})">Excluir</button></td>
          </tr>
      
        `;
  }
}

function editar(i) {
  pedidos[i].camisetaP = document.getElementById("quant-p").value;
  pedidos[i].camisetaM = document.getElementById("quant-m").value;
  pedidos[i].camisetaG = document.getElementById("quant-g").value;

  //para poder atualizar a *soma*
  pedidos[i].camisetaP = parseFloat(
    10 * document.getElementById("quant-p").value
  );
  pedidos[i].camisetaM = parseFloat(
    12 * document.getElementById("quant-m").value
  );
  pedidos[i].camisetaG = parseFloat(
    15 * document.getElementById("quant-g").value
  );

  //atualiza o valor da *soma*
  pedidos[i].soma =
    pedidos[i].camisetaP + pedidos[i].camisetaM + pedidos[i].camisetaG;

  console.log(pedidos[i].soma);
  imprimirPedidos();
}

function excluir(i) {
  pedidos.splice(i, 1);
  imprimirPedidos();
}
