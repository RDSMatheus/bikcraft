// Itens orçamento
const paramentros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

paramentros.forEach(ativarProduto);
// menu ativo
const menu = document.querySelectorAll(".header-menu a");
function menuAtivo(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
menu.forEach(menuAtivo);

// galeria
const galeriaImg = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");

function trocarImg(event) {
  const clicou = event.currentTarget;
  const media = matchMedia("(min-width: 1000px)").matches;
  if (media) {
    galeriaContainer.prepend(clicou);
  }
}

function clicouImg(imagem) {
  imagem.addEventListener("click", trocarImg);
}

galeriaImg.forEach(clicouImg);

// Perguntas frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function clicou(event) {
  const ddlist = event.currentTarget;
  const controls = ddlist.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  resposta.setAttribute("aria-expanded", ativa);
}

function clicarBotao(botao) {
  botao.addEventListener("click", clicou);
}

perguntas.forEach(clicarBotao);

// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
