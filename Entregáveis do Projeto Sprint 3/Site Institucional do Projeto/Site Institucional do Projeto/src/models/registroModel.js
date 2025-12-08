var database = require("../database/config");

function buscarUltimosRegistros(fkShopping, limite_linhas) {
  var instrucaoSql = `SELECT 
                    DATE_FORMAT(r.dtHora, '%H:%i') AS hora,
                    SUM(r.valor) AS pessoas
                    FROM registro r
                    JOIN sensor s ON r.fkSensor = s.idSensor
                    WHERE s.fkEntrada = ${fkShopping}
                    GROUP BY  DATE_FORMAT(r.dtHora, '%H:%i')
                    ORDER BY hora DESC LIMIT ${limite_linhas}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarRegistrosEmTempoReal(fkShopping) {
  var instrucaoSql = `SELECT 
    SUM(r.valor) AS pessoas,
    DATE_FORMAT(r.dtHora, '%H:%i') AS hora
FROM registro r
JOIN sensor s ON r.fkSensor = s.idSensor
WHERE s.fkEntrada = ${fkShopping}
GROUP BY r.dtHora
ORDER BY r.dtHora DESC
LIMIT 1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarRegistroSensorA(fkShopping, limite_linhas) {
  var instrucaoSql = `SELECT 
                    DATE_FORMAT(r.dtHora, '%H:%i') AS hora,
                    SUM(r.valor) AS pessoas
                    FROM registro r
                    JOIN sensor s ON r.fkSensor = s.idSensor
                    WHERE s.idShopping = ${fkShopping}
                    GROUP BY  DATE_FORMAT(r.dtHora, '%H:%i')
                    ORDER BY hora DESC LIMIT ${limite_linhas}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function totalVisitantes(fkShopping) {
  var instrucaoSql = `select * from vw_total_visitantes where idShopping = ${fkShopping}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function picoVisitantes(fkShopping) {
  var instrucaoSql = `select * from vw_pico where idShopping = ${fkShopping} limit 1`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function mediaVisitantes(fkShopping) {
  var instrucaoSql = `select * from vw_media where idShopping = ${fkShopping} limit 1;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarUltimosRegistros,
  buscarRegistrosEmTempoReal,
  buscarRegistroSensorA,
  totalVisitantes,
  picoVisitantes,
  mediaVisitantes,
};
