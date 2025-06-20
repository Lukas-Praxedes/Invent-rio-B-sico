let ProdutoLista = [];

function salvarProduto() {
  let inProduto = document.getElementById("inProduto");
  let inPreco = document.getElementById("inPreco");
  let inQuantidade = document.getElementById("inQuantidade");
  let outMsg = document.getElementById("outMsg");

  let produto = inProduto.value.trim();
  let preco = parseFloat(inPreco.value);
  let quantidade = parseInt(inQuantidade.value);

  //validação
  if (!produto || isNaN(preco) || isNaN(quantidade)){
    alert("preencha os campos corretamente")
    return;
  }
    // Cria um novo produto (objeto)
  const novoProduto = {
    nome: produto,
    preco: preco,
    quantidade: quantidade
  };

  // Adiciona o novo produto na lista
  ProdutoLista.push(novoProduto);

  // Mostra mensagem e lista no console
  outMsg.textContent = "Produto cadastrado com sucesso!";
  console.log(ProdutoLista); // Para ver todos os produtos salvos
  //alert(ProdutoLista);

  // Limpa os campos
  inProduto.value = "";
  inPreco.value = "";
  inQuantidade.value = "";
}
 
function deletarProduto() {
  let inProduto = document.getElementById("inProduto");
  let produto = inProduto.value.trim();

  if (!produto) {
    alert("Digite o nome do produto para remover.");
    return;
  }

  // Procura o índice do produto com o nome informado
  const index = ProdutoLista.findIndex(p => p.nome.toLowerCase() === produto.toLowerCase());

  if (index !== -1) {
    ProdutoLista.splice(index, 1); // Remove o produto do array
    alert(`Produto "${produto}" removido com sucesso!`);
  } else {
    alert(`Produto "${produto}" não encontrado na lista.`);
  }

  console.log(ProdutoLista); // Mostra a lista atualizada
}

function listarProdutos() {
  const tabela = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0];
  
  tabela.innerHTML = "";

  if (ProdutoLista.length === 0) {
    const linha = tabela.insertRow();
    const celula = linha.insertCell();
    celula.colSpan = 3;
    celula.textContent = "Nenhum produto cadastrado.";
    celula.style.textAlign = "center";
    return;
  }


  ProdutoLista.forEach((produto) => {
    const linha = tabela.insertRow();

    const celNome = linha.insertCell();
    celNome.textContent = produto.nome;

    const celPreco = linha.insertCell();
    celPreco.textContent = `R$ ${produto.preco.toFixed(2)}`;

    const celQtd = linha.insertCell();
    celQtd.textContent = produto.quantidade;
  });
}

let btSalvar = document.getElementById("btSalvar");
btSalvar.addEventListener("click", salvarProduto);

let btDeletar = document.getElementById("btDeletar");
btDeletar.addEventListener('click',deletarProduto);

let btListar = document.getElementById("btListar");
btListar.addEventListener('click',listarProdutos);


