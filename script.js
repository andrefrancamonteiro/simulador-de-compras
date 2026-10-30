// Preços iguais aos exibidos no index.html
const PRECO_CAFE = 24.90;
const PRECO_CANECA = 39.90;
const PRECO_BISCOITO = 12.50;

// Formata um número como moeda brasileira (ex.: 24.9 -> "R$ 24,90")
function formatarMoeda(valor) {
  return "R$ " + valor.toFixed(2).replace(".", ",");
}

// Pergunta a quantidade de um produto até receber um número inteiro >= 0.
// Retorna null se o usuário cancelar o prompt.
function perguntarQuantidade(nomeProduto, preco) {
  while (true) {
    const resposta = prompt(
      "Quantas unidades de " + nomeProduto + " (" + formatarMoeda(preco) + ") você deseja?\nDigite 0 para não comprar."
    );

    if (resposta === null) {
      return null; // usuário clicou em Cancelar
    }

    const quantidade = Number(resposta);

    if (resposta.trim() === "" || isNaN(quantidade) || quantidade < 0 || !Number.isInteger(quantidade)) {
      alert("Valor inválido. Digite um número inteiro igual ou maior que 0.");
    } else {
      return quantidade;
    }
  }
}

function simularCompra() {
  const qtdCafe = perguntarQuantidade("Café Especial 250g", PRECO_CAFE);
  if (qtdCafe === null) { alert("Simulação cancelada."); return; }

  const qtdCaneca = perguntarQuantidade("Caneca Artesanal", PRECO_CANECA);
  if (qtdCaneca === null) { alert("Simulação cancelada."); return; }

  const qtdBiscoito = perguntarQuantidade("Biscoito Amanteigado", PRECO_BISCOITO);
  if (qtdBiscoito === null) { alert("Simulação cancelada."); return; }

  // Se tudo for zero, nenhum produto foi escolhido
  if (qtdCafe === 0 && qtdCaneca === 0 && qtdBiscoito === 0) {
    alert("Nenhum produto foi selecionado.");
    return;
  }

  const subtotalCafe = PRECO_CAFE * qtdCafe;
  const subtotalCaneca = PRECO_CANECA * qtdCaneca;
  const subtotalBiscoito = PRECO_BISCOITO * qtdBiscoito;
  const total = subtotalCafe + subtotalCaneca + subtotalBiscoito;

  const resumo =
    "RESUMO DA COMPRA\n\n" +
    "Café Especial 250g: " + qtdCafe + " x " + formatarMoeda(PRECO_CAFE) + " = " + formatarMoeda(subtotalCafe) + "\n" +
    "Caneca Artesanal: " + qtdCaneca + " x " + formatarMoeda(PRECO_CANECA) + " = " + formatarMoeda(subtotalCaneca) + "\n" +
    "Biscoito Amanteigado: " + qtdBiscoito + " x " + formatarMoeda(PRECO_BISCOITO) + " = " + formatarMoeda(subtotalBiscoito) + "\n\n" +
    "TOTAL: " + formatarMoeda(total);

  alert(resumo);
}
