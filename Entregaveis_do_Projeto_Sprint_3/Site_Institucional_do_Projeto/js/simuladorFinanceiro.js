function calcularOperação() {
    var faturamentoAnual = Number(iptFaturamento.value);
    var qtdEntradas = Number(iptEntradas.value);
    var porcentagem = Number(iptPorcent.value / 100);

    obrigatorio1.innerHTML = ''
        obrigatorio2.innerHTML = ''
        obrigatorio3.innerHTML = ''
        erro.innerHTML = ''

    if (iptFaturamento.value == '' || faturamentoAnual <= 0) {
        obrigatorio1.innerHTML = '<span style="color: red"> Campo obrigatório.</span>'

        erro.innerHTML = '<span style="color: red"> Todos os campos devem ser preenchidos com um valor maior do que zero (0).</span>'
    }
    if (iptEntradas.value == '' || qtdEntradas <= 0) {
        obrigatorio2.innerHTML = '<span style="color: red"> Campo obrigatório.</span>'

        erro.innerHTML = '<span style="color: red"> Todos os campos devem ser preenchidos com um valor maior do que zero (0).</span>'
    }
    if (iptPorcent.value == '' || porcentagem <= 0) {
        obrigatorio3.innerHTML = '<span style="color: red"> Campo obrigatório.</span>'

        erro.innerHTML = '<span style="color: red"> Todos os campos devem ser preenchidos com um valor maior do que zero (0).</span>'
    }
    else {

        var valorExtra = faturamentoAnual * porcentagem;
        var qtdSensores = qtdEntradas * 2;
        var investimentoInicial = qtdEntradas * 10000;

        mensagem.innerHTML = `
        <h3>📊 Resultado da Simulação</h3>
        <p>Com base no <strong>faturamento anual de ${faturamentoAnual.toLocaleString("pt-br",{style: "currency", currency:"BRL"})}</strong> e <strong>${qtdEntradas}</strong> entradas no local, ao aplicar um aumento de <strong>${porcentagem*100}%</strong>, o ganho adicional estimado é <strong> ${valorExtra.toLocaleString("pt-br",{style: "currency", currency: "BRL"})}</strong> ao ano.</p>
        <hr>
        <h4>⚙️ Estrutura recomendada</h4>
        <p>Para monitorar o fluxo de clientes de forma eficiente, recomendamos instalar aproximadamente <strong>${qtdSensores}</strong> sensores (considerando 2 por entrada), com um investimento estimado de <strong> ${investimentoInicial.toLocaleString("pt-br",{style: "currency", currency: "BRL"})}</strong>.</p>
        <p>Com esse monitoramento, você poderá analisar o fluxo em tempo real e tomar decisões estratégicas para alcançar o aumento de lucro desejado.</p>
        <hr>
        <h4>🚀 Benefícios esperados</h4>
        <ul>
            <li>📈 Identificação de horários e áreas de maior movimento;</li>
            <li>🏬 Reajustes de aluguel e promoções baseados em dados reais;</li>
            <li>💰 Retorno sobre o investimento ao longo do ano;</li>
            <li>💡 Planejamento estratégico do espaço e marketing direcionado.</li>
        </ul>
        <p><strong>➡️ Entre em contato com nossa equipe para receber um plano detalhado de implementação!</strong></p>
    `;
    }
}