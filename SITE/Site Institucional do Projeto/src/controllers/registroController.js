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

function totalVisitantes(req, res) {

    var fkShopping = req.params.fkShopping;

    console.log(`Recuperando registros em tempo real`);

    registroModel.totalVisitantes(fkShopping).then(function (resultado1) {
        if (resultado1.length > 0) {
            res.status(200).json(resultado1);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function picoVisitantes(req, res) {

    var fkShopping = req.params.fkShopping;

    console.log(`Recuperando registros em tempo real`);

    registroModel.picoVisitantes(fkShopping).then(function (resultado2) {
        if (resultado2.length > 0) {
            res.status(200).json(resultado2);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function mediaVisitantes(req, res) {

    var fkShopping = req.params.fkShopping;

    console.log(`Recuperando registros em tempo real`);

    registroModel.mediaVisitantes(fkShopping).then(function (resultado3) {
        if (resultado3.length > 0) {
            res.status(200).json(resultado3);
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
    buscarRegistrosEmTempoReal,
    totalVisitantes,
    picoVisitantes,
    mediaVisitantes

}