const coneccion = require("../basedatos");
module.exports = {
  borrar: (id, callBack) => {
    coneccion.query(
      `delete from misas where id=?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  actualiza: (datos, callBack) => {
    coneccion.query(
      `update misas set tipo=?, fecha=? where id=?`,
      [datos.tipo,datos.fecha, datos.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  agregar: (datos, callback) => {
    coneccion.query(
      `insert into misas (tipo,fecha) values (?,?)`,
      [datos.tipo,datos.fecha],
      (error, results) => {
        if (error) callback(error);
        return callback(null, results);
      }
    );
  },
  listado: (callBack) => {
    coneccion.query(`select * from misas`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
};
