const coneccion = require("../basedatos");
const crypto = require("crypto");
function sha256(string) {
  return crypto.createHash("sha256").update(string).digest("hex");
}
module.exports = {
  verifica: (datos, callBack) => {
    coneccion.query(
      `select * from usuarios where usuario= ? and contra=?`,
      [datos.usuario, sha256(datos.contra)],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  borrar: (datos, callBack) => {
    coneccion.query(
      `delete from usuarios where idusuario=?`,
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
      `update usuarios set usuario= ?, contra =?,nombre=?, rol=? where idusuario = ?`,
      [datos.usuario,sha256(datos.contra), datos.nombre, datos.rol, datos.id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  agregar: (datos, callBack) => {
    coneccion.query(
      `insert into usuarios (usuario, contra, nombre,rol) values (?, ? , ? , ?)`,
      [datos.usuario, sha256(datos.contra), datos.nombre, datos.rol],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  listado: (callBack) => {
    coneccion.query(`select * from usuarios`, [], (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    });
  },
};
