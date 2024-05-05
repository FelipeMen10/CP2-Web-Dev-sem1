let imagens =['src/assets/slide1.jpg','src/assets/slide2.jpg','src/assets/slide3.jpg', 'src/assets/slide4.jpg'];
let index =0;
let time =3000;

function slideShow(){
    document.getElementById('img-slide').src=imagens[index];
    index++;

        if(index == imagens.length){
          index =0;
        }
        setTimeout('slideShow()',time);
}
slideShow();

function validarForm(){
  let nome = document.getElementById("#nome");
  let email = document.getElementById("#email");
  let telefone = document.getElementById("#telefone");

  if(nome == "" || email == "" || telefone == ""){
    alert("Todos os espaços devem estar preenchidos!");
    
  }
}

function mudarCor(){
  function mudar(numero){
      return(Math.random()* numero);
  }
  const cores= `rgb(${mudar(255)}, ${mudar(255)}, ${mudar(255)})`;
  document.body.style.backgroundColor=cores;
}
  window.addEventListener('load',function(){
  this.setInterval(function(){
      mudarCor();
  },3000)
  })