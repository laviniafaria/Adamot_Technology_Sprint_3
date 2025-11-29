var registroModel = require("../models/registroModel");

function buscarUltimosRegistros(req, res) {

    const limite_linhas = 7;
    var fkShopping = req.params.fkShopping;

    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    registroModel.buscarUltimosRegistros(fkShopping, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function buscarRegistrosEmTempoReal(req, res) {

    var fkShopping = req.params.fkShopping;

    console.log(`Recuperando registros em tempo real`);

    registroModel.buscarRegistrosEmTempoReal(fkShopping).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarUltimosRegistros,
    buscarRegistrosEmTempoReal

}