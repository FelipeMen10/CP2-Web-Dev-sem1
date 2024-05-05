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

function verificarInputs() {
  var input1 = document.getElementById("nome").value;
  var input2 = document.getElementById("email").value;
  var input3 = document.getElementById("telefone").value;

  if (input1 === '' || input2 === '' || input3 === '') {
      alert('Por favor, preencha todos os inputs.');
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