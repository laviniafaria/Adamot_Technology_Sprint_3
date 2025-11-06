    function calcularOperação() {
        var valorAluguel = Number(iptAluguel.value);
        var setor = iptSetor.value;
        var porcentagem = Number(iptPorcent.value / 100)
        
        

        if (valorAluguel=='' && setor=='' && porcentagem=='') {
            mensagem.innerHTML = 'Preencha todos os campos para simular.';
        } else
        if (valorAluguel== '' || valorAluguel%1 !=0) {
            mensagem.innerHTML = 'Informe o valor do aluguel. OBS: valor deve ser maior do que zero e um valor positivo';
        } else if (setor == '') {
            mensagem.innerHTML = 'Informe o setor de referência';
        } else if (porcentagem == '' || porcentagem%1 !=0) {
            mensagem.innerHTML = 'Informe a porcentagem que deseja. OBS: O valor tem que ser positivo';
        }
        if(valorAluguel >0 && porcentagem >0) {

        

        var valorExtra = valorAluguel * porcentagem

           mensagem.innerHTML = `
    <h2>📊 Resultado da Simulação !!!</h2><br>
    <p>O <strong>Projeto de Monitoramento do Fluxo de Pessoas</strong> fornece dados estratégicos que permitem identificar setores com maior potencial de valorização.</p>
    <p><span style="background-color: green;"No setor <strong>${setor}</strong>, ao aplicar o percentual definido (<strong>${(porcentagem*100).toFixed(0)}%</strong>), o sistema aponta um ganho adicional de <strong>${valorExtra.toLocaleString('pt-BR', {style:"currency", currency:'BRL'})}</strong> por m²>  <sup>2</sup>.</p>
    <p>✅ Essa visão só é possível graças ao monitoramento inteligente do fluxo de clientes, que permite reajustes embasados em dados reais.</p>
    <p><em>Assim, cada decisão deixa de ser um risco e passa a ser uma oportunidade concreta de aumentar a rentabilidade do shopping.</em></p>`;
        iptAluguel.value = "";     
        iptSetor.value = "";   
        iptPorcent.value = "";
        }
        
    }