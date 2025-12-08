var database = require("../database/config");

function buscarDados(idSensor) {
    var instrucaoSql = `
        SELECT 
            DATE_FORMAT(dtHora, '%H:%i') AS hora,
            sum(valor) AS pessoas
        FROM registro
        WHERE fkSensor = ${idSensor}
        GROUP BY dtHora
        ORDER BY dtHora 
        LIMIT 7;
    `;

    return database.executar(instrucaoSql);
}

module.exports = { buscarDados };
