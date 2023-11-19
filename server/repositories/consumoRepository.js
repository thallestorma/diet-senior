const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(process.env.DATABASE_URL);

const adicionarConsumo = async (idAlimento, quantidade) => {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO consumo_diario (id_alimento, quantidade) VALUES (?, ?)',
      [idAlimento, quantidade],
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      }
    );
  });
};

const obterConsumoDiario = async () => {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT SUM(a.calorias * c.quantidade) AS calorias_consumidas FROM alimentos a JOIN consumo_diario c ON a.id = c.id_alimento',
      (err, results) => {
        if (err) {
          reject(err);
        } else {
          const caloriasConsumidas = results[0] ? results[0].calorias_consumidas : 0;
          resolve(caloriasConsumidas);
        }
      }
    );
  });
};

module.exports = {
  adicionarConsumo,
  obterConsumoDiario,
};
