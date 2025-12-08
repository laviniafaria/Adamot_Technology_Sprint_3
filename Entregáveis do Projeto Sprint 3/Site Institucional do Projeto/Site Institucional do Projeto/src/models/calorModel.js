var database = require("../database/config");

function buscarDados(idSensor) {
  var instrucaoSql = `
    SELECT 
        DAYNAME(dtHora) AS diaSemana,
        CASE
            WHEN HOUR(dtHora) < 3 THEN '00:00'
            WHEN HOUR(dtHora) < 6 THEN '03:00'
            WHEN HOUR(dtHora) < 9 THEN '06:00'
            WHEN HOUR(dtHora) < 12 THEN '09:00'
            WHEN HOUR(dtHora) < 15 THEN '12:00'
            WHEN HOUR(dtHora) < 18 THEN '15:00'
            WHEN HOUR(dtHora) < 21 THEN '18:00'
            ELSE '21:00'
        END AS blocoHora,
        SUM(valor) AS pessoas
    FROM registro
    WHERE fkSensor = ${idSensor}
    GROUP BY diaSemana, blocoHora
    ORDER BY MAX(dtHora) DESC
    LIMIT 14;
`;

  return database.executar(instrucaoSql);
}

module.exports = { buscarDados };
