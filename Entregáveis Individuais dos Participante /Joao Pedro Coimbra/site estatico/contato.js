/*variaveis para inserir informações no fale conosco*/

function contato() {

    var nome = ipt_nome.value;
    var email = ipt_email.value;
    var mensagem = ipt_mensagem.value;

    if (nome == '') {
        alert('O campo Nome é obrigatório. Por favor, preencha.');
    }
    else if (email == '' || email.indexOf('@') == -1) { 
        alert('O email digitado é inválido. Por favor, verifique.');
    }
    else if (mensagem == '') {
        alert('O campo Mensagem é obrigatório. Por favor, preencha para enviar.');
    }
    else {
        ipt_nome.value = "";     
        ipt_email.value = "";   
        ipt_mensagem.value = ""; 
        
        resultado.innerHTML = 'Sua Mensagem foi enviada!';
    }
}