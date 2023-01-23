function animar(){
  
  var btn = document.getElementById("btn-menu");
  btn.classList.toggle('ativar')
  
  var menu = document.getElementById("menu")
  menu.classList.toggle('abrirMenu');
}

function abrirPesquisa(){
  
  var pesquisa = document.getElementById("pqs")
  pesquisa.classList.toggle('openPesquisa')
}

function abrirCarrinho(){
  
  var carrinhoCompra = document.getElementById("car")
  carrinhoCompra.classList.toggle("openCarrinho")
}

const imgs = document.getElementById("img")
const img = document.querySelectorAll("#img img")

let idx = 0;


function carousel(){
  idx++
  
  if(idx > img.length -1){
    idx = 0
  }
  
  imgs.style.transform = `translateX(${-idx * innerWidth}px)`
}

setInterval(carousel, 1800);
