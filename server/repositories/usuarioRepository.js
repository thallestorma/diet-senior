const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(process.env.DATABASE_URL);

const cadastrarUsuario = async (usuario, senha, peso, altura, sexo, idade) => {
    return new Promise((resolve, reject) => {
        db.query(
            'INSERT INTO usuarios (usuario, senha, peso, altura, sexo, idade) VALUES (?, ?, ?, ?, ?, ?)',
            [usuario, senha, peso, altura, sexo, idade],
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

const editarUsuario = async (id, usuario, senha, peso, altura, sexo, idade) => {
    return new Promise((resolve, reject) => {
        db.query(
            'UPDATE usuarios SET usuario = ?, senha = ?, peso = ?, altura = ?, sexo = ?, idade = ? WHERE id = ?',
            [usuario, senha, peso, altura, sexo, idade, id],
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

const deletarUsuario = async (id) => {
    return new Promise((resolve, reject) => {
        db.query('DELETE FROM usuarios WHERE id = ?', [id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
};

const loginUsuario = async (usuario, senha) => {
    return new Promise((resolve, reject) => {
        db.query(
            'SELECT id, usuario, peso, altura, sexo, idade FROM usuarios WHERE usuario = ? AND senha = ? LIMIT 1',
            [usuario, senha],
            (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    if (results.length > 0) {
                        resolve(results[0]);
                    } else {
                        resolve(null);
                    }
                }
            }
        );
    });
};

module.exports = {
    cadastrarUsuario,
    editarUsuario,
    deletarUsuario,
    loginUsuario,
};
