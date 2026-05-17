const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Manu889900@",
    database: "escola"
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados: ", err);
    } else {
    }

});
module.exports = connection;