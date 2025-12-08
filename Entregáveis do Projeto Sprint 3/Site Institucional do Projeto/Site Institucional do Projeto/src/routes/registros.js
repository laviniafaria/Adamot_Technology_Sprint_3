var express = require("express");
var router = express.Router();

var registroController = require("../controllers/registroController");

router.get("/ultimos/:fkShopping", function (req, res) {
    registroController.buscarUltimosRegistros(req, res);
});

router.get("/tempo-real/:fkShopping", function (req, res) {
    registroController.buscarRegistrosEmTempoReal(req, res);
})

  router.get("/totalVisitantes/:fkShopping", function (req, res) {
    registroController.totalVisitantes(req, res);
});

router.get("/picoVisitantes/:fkShopping"), function (req, res) {
    registroController.picoVisitantes(req, res);
}

router.get("/mediaVisitantes/:fkShopping"), function (req, res) {
    registroController.mediaVisitantes(req, res);
}

module.exports = router;