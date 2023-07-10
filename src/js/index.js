/* OBJETIVO 1 quando clicarmos na seta de avaçãr, temos que mostrar o proximo cartão da lista
    -passo 1- dar um jeito de pegar o elento html da sera avançar.
    -passo 2- dar um jeito de identificar o clique do usuário na seta avançar
    -passo 3- fazer aaprecer o próximo cartão da lista ( tirar o selecionado)
    -passo 4- buscar o cartão que esta selecionado e esconder o anterior 
*/

const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado() {
  const cartaoSelecionado = document.querySelector(".selecionado");
  cartaoSelecionado.classList.remove("selecionado");
}

function mostrarCartao(indiceCartao) {
  cartoes[indiceCartao].classList.add("selecionado");
}

btnAvancar.addEventListener("click", function () {
  if (cartaoAtual === cartoes.length - 1) return;

  esconderCartaoSelecionado();

  cartaoAtual++;
  mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener("click", function () {
  if (cartaoAtual === 0) return;

  esconderCartaoSelecionado();

  cartaoAtual--;
  mostrarCartao(cartaoAtual);
});
