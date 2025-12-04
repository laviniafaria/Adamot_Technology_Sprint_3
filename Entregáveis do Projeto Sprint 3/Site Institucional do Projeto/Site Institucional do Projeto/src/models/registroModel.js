var database = require("../database/config");

function buscarUltimosRegistros(fkShopping, limite_linhas) {

    var instrucaoSql = `SELECT 
                    DATE_FORMAT(r.dtHora, '%H') AS hora,
                    SUM(r.valor) AS pessoas
                    FROM registro r
                    JOIN sensor s ON r.fkSensor = s.idSensor
                    WHERE s.shopping_id = ${fkShopping}
                    GROUP BY  DATE_FORMAT(r.dtHora, '%H')
                    ORDER BY hora DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRegistrosEmTempoReal(fkShopping) {

    var instrucaoSql = `SELECT 
                        SUM(r.valor) as pessoas,
                        DATE_FORMAT(r.dtHora,'%H:00') as momento_grafico 
                        FROM registro r
                        JOIN sensor s ON r.fkSensor = s.idSensor 
                        WHERE s.shopping_id = ${fkShopping}
                        GROUP BY r.dtHora
                    ORDER BY r.dtHora DESC LIMIT 1`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarRegistroSensorA(fkShopping, limite_linhas) {

    var instrucaoSql = `SELECT 
                    DATE_FORMAT(r.dtHora, '%H') AS hora,
                    SUM(r.valor) AS pessoas
                    FROM registro r
                    JOIN sensor s ON r.fkSensor = s.idSensor
                    WHERE s.shopping_id = ${fkShopping}
                    GROUP BY  DATE_FORMAT(r.dtHora, '%H')
                    ORDER BY hora DESC LIMIT ${limite_linhas}`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimosRegistros,
    buscarRegistrosEmTempoReal,
    buscarRegistroSensorA
}
