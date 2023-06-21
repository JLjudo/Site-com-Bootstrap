// Funfa :)

// Código para login:

function enviar(){

    let senha = document.getElementById('exampleInputPassword1').value
    let confirmSenha = document.getElementById('exampleInputPassword2').value
    let email = document.getElementById('exampleInputEmail1').value

    if(senha == confirmSenha && email.endsWith('@gmail.com') == true){
        document.getElementById('resposta').innerText = 'Cadastro feito com sucesso'
    }else{
        document.getElementById('resposta').innerText = 'E-mail ou senha incorretos'
    }

}

// Botão do scroll-top:

// Pegar botão
var mybutton = document.getElementById("myBtn");

// Quando rolar a página 800px do topo para baixo, o botão será exibido
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Quando clicar no botão, a página rola para o topo do documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
