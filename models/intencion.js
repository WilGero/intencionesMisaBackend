const coneccion = require("../basedatos");
module.exports = {
  borrar: (datos, callBack) => {
    coneccion.query(
      `delete from intenciones where id=?`,
      [datos.id],
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
      `update intenciones set intencion= ?, ofrenda =?, remite=? where id = ?`,
      [datos.intencion, datos.ofrenda, datos.name_remite, datos.id_intencion],
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
      `insert into intenciones (intencion,ofrenda,remite,idmisa) values (?,?,?,?)`,
      [datos.intencion, datos.ofrenda, datos.remite, datos.idmisa],
      (error, results) => {
        if (error) callback(error);
        return callback(null, results);
      }
    );
  },
  listado: (callBack) => {
    coneccion.query(`select * from intenciones`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
};
