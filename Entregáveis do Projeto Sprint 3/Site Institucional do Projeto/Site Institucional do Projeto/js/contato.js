var limiteMensagens = 5;
var mensagensEnviadas = 0;

function contato() {

    if (mensagensEnviadas >= limiteMensagens) {
        
     resultado.innerHTML = ' Suas mensagens de hoje acabaram (Limite: ' + limiteMensagens + ').';
        
        return; // para parar de aceitar mensagens
    }
    
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
        
        mensagensEnviadas++;
        
        for (var i = 0; i < 1; i++) {
            resultado.innerHTML = ' Mensagem enviada com sucesso! (' + mensagensEnviadas + ' de ' + limiteMensagens + ')';
        }

        if (mensagensEnviadas == limiteMensagens) {
             resultado.innerHTML += '<br> ATENÇÃO: Esta foi a sua última mensagem permitida para hoje.';
        }
    }
}