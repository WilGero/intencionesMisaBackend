const modelInte = require("../models/intencion");

module.exports = {
  borrar: (req, res) => {
    const body = req.body;
    modelInte.borrar(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Error en la Base de Datos",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  actualiza: (req, res) => {
    const body = req.body;
    modelInte.actualiza(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Error en la Base de Datos",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  agregar: (req, res) => {
    const datos = req.body;
    modelInte.agregar(datos, (err, result) => {
      if (err) {
        console.log(err);
        return err;
      }
      return res.json({
        sucess: 1,
        data: result,
      });
    });
  },
  listado: (req, res) => {
    modelInte.listado((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(results);
      return res.json({
        success: 1,
        data: results,
      });
    });
  },
};
