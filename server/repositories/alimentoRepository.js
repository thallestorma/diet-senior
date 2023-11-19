const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(process.env.DATABASE_URL);

const cadastrarAlimento = async (nome, calorias, quantidade) => {
  return new Promise((resolve, reject) => {
    db.query(
      'INSERT INTO alimentos (nome, calorias, quantidade) VALUES (?, ?, ?)',
      [nome, calorias, quantidade],
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

const listarAlimentos = async () => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM alimentos', (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

const editarAlimento = async (id, nome, calorias, quantidade) => {
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE alimentos SET nome = ?, calorias = ?, quantidade = ? WHERE id = ?',
      [nome, calorias, quantidade, id],
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

const deletarAlimento = async (id) => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM alimentos WHERE id = ?', [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

module.exports = {
  cadastrarAlimento,
  listarAlimentos,
  editarAlimento,
  deletarAlimento,
};
