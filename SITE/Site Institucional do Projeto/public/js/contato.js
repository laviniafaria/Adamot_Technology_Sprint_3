var limiteMensagens = 5;
var mensagensEnviadas = 0;

function contato() {
    erro_email.innerHTML = '';
    erro_mensagem.innerHTML = '';
    erro_nome.innerHTML = '';
    if (mensagensEnviadas >= limiteMensagens) {
        
     resultado.innerHTML = ' Suas mensagens de hoje acabaram (Limite: ' + limiteMensagens + ').';
        
        return; // para parar de aceitar mensagens
    }
    
    var nome = ipt_nome.value;
    var email = ipt_email.value;
    var mensagem = ipt_mensagem.value;
    var erro = 0;

    if (nome == '') {
        erro_nome.innerHTML = '<span style="color: #E80700">Preencha o campo Nome Completo.</span>';
        erro++
    }
    if (email == '' || email.indexOf('@') == -1) { 
        erro_email.innerHTML = '<span style = "color: #E80700">O email digitado é inválido.</span>';
        erro ++
    }
    if (mensagem == '') {
        erro_mensagem.innerHTML = '<span style = "color: #E80700">O campo Mensagem é obrigatório. Por favor, preencha para enviar.</span>';
        erro++
    }
    if (erro == 0) {

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