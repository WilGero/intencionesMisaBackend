const coneccion = require("../basedatos");
module.exports = {
  borrar: (datos, callBack) => {
    coneccion.query(
      `delete from misas where id_misa=?`,
      [datos.id_misa],
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
      `update misas set tipo= ?, hora=?, fecha=? where id_misa = ?`,
      [datos.tipo, datos.hora, datos.fecha, datos.id_misa],
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
      `insert into misas (tipo,hora,fecha) values (?,?,?)`,
      [datos.tipo,datos.hora, datos.fecha],
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
