var sensorModel = require("../models/sensorModel");

function buscarDados(req, res) {
  var idSensor = req.params.idSensor;

  sensorModel.buscarDados(idSensor).then(function (resultado) {
    res.json(resultado);
  });
}

module.exports = {
  buscarDados,
};
