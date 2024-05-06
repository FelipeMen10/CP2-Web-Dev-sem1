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

function verificarInputs(){
  var input1 = document.getElementById("nome").value;
  var input2 = document.getElementById("email").value;
  var input3 = document.getElementById("telefone").value;

  if (input1 === '' || input2 === '' || input3 === '') {
      alert('Por favor, preencha todos os inputs.');
  }
}
var contador = 0;

// Selecionando o botão correto
var btncorreto = document.querySelector("#btn-correto");

// Adicionando um ouvinte de evento de clique ao botão correto
btncorreto.addEventListener("click", function() {
  contador++;
  console.log("Contador: " + contador); // Verificar se o contador está sendo incrementado corretamente
});

// Selecionando o botão de resultados
var botao = document.querySelector("#btn-resultados");

// Adicionando um ouvinte de evento de clique ao botão de resultados
botao.addEventListener("click", function() {
  // Exibindo o alerta na tela
  alert("Contador: " + contador);
});
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

  function verificarLogin(){
    var input1 = document.getElementById("usuario").value;
    var input2 = document.getElementById("senha").value;
  
    if (input1 === '' || input2 === '') {
        alert('Por favor, preencha todos os inputs.');
    } else if  (input1 === 'admin' || input2 === '12345'){
      window.open("quiz.html")
      window.close("login.html")
    } 
    else{
      alert("Usuário ou Senha inválido")
    }
  }