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

/*

function abrirPesquisa(){
  
  if(pqs.style.display == "none"){
    pqs.style.display = "block";
  }else{
    pqs.style.display = "block";
  }
}

function fecharPesquisa(){
  if(pqs.style.display == "block"){
    pqs.style.display = "none";
  }else{
    pqs.style.display = "none";
  }
}

function abrirCarrinho(){
  
  if(car.style.display == "none"){
    car.style.display = "block";
  }else{
    car.style.display = "block";
  }
}

function fecharCarrinho(){
  if(car.style.display == "block"){
    car.style.display = "none";
  }else{
    car.style.display = "none";
  }
}
*/

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
