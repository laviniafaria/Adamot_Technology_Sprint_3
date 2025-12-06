var express = require("express");
var router = express.Router();

var sensorController = require("../controllers/sensorController");

router.get("/:idSensor/dados", function (req, res) {
    sensorController.buscarDados(req, res);
});

module.exports = router;
