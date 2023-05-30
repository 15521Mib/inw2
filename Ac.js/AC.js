class Produto {
    constructor(id, descricao, ativo, estoque, preco, atributo1, atributo2) {
      this.id = id;
      this.descriçao = descricao;
      this.ativo = ativo;
      this.estoque = estoque;
      this.preço = preco;
      this.bookstore = atributo1;
      this.paginas = atributo2;
    }
  
    ativar() {
      this.ativo = true;
    }
  
    retirarEstoque() {
      const quantidade = prompt("Digite a quantidade a ser retirada do estoque:");
      if (quantidade <= this.estoque) {
        this.estoque -= quantidade;
      } else {
        console.log("Quantidade indisponível no estoque.");
      }
    }
  
    incluirEstoque() {
      const quantidade = prompt("Digite a quantidade a ser incluída no estoque:");
      this.estoque += quantidade;
    }
  
    mostrarDados() {
      console.log("Dados do produto:");
      console.log("ID:", this.id);
      console.log("Descrição:", this.descriçao);
      console.log("Ativo:", this.ativo);
      console.log("Estoque:", this.estoque);
      console.log("Preço:", this.preço);
      console.log("bookstore:", this.bookstore);
      console.log("Paginas:", this.paginas);
    }
  
    comprarProduto() {
      const quantidade = prompt("Digite a quantidade de produtos a comprar:");
      const valorTotal = quantidade * this.preco;
      console.log(`Compra de ${quantidade} produto(s) - Valor total: R$${valorTotal}`);
      this.retirarEstoque(quantidade);
      console.log("Saldo atual do estoque:", this.estoque);
    }
  }
  
  // Valor inicial do estoque
  const estoqueInicial = 10;
  
  // Cadastro do produto
  const produto = new Produto(1, "Descrição do produto", true, estoqueInicial, 100, "Valor1", "Valor2");
  
  // Movimentos de compra
  for (let i = 0; i < 5; i++) {
    produto.comprarProduto();
  }
  
  // Verificação e inclusão de estoque final
  const estoqueFinal = estoqueInicial - produto.estoque;
  if (estoqueFinal < 10) {
    const quantidadeIncluir = 10 - estoqueFinal;
    produto.incluirEstoque(quantidadeIncluir);
    console.log(`Incluindo ${quantidadeIncluir} produtos no estoque.`);
  }
  
  // Exibição dos dados finais do produto
  produto.mostrarDados();
  