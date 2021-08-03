const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "mariadb://root:admin@localhost:3306/delilah_resto"
);

    sequelize
    .authenticate()
    .then(() => {
      console.log("Conectado.");
    })
    .catch((err) => {
      console.error("Error de conexion:", err);
    });


module.exports = sequelize