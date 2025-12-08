var express = require("express");
var router = express.Router();

var calorController = require("../controllers/calorController");

router.get("/:idSensor/dados", function (req, res) {
  calorController.buscarDados(req, res);
});

module.exports = router;
