// Funfa :)

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