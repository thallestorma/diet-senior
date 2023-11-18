const { Pool } = require('pg');

const pool = new Pool({
  user: 'seu_usuario',
  host: 'localhost',
  database: 'sua_basedados',
  password: 'sua_senha',
  port: 5432,
});

const cadastrarUsuario = async (usuario, senha, peso, altura, sexo, idade) => {
  const result = await pool.query(
    'INSERT INTO usuarios (usuario, senha, peso, altura, sexo, idade) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [usuario, senha, peso, altura, sexo, idade]
  );

  return result.rows[0];
};

const editarUsuario = async (id, usuario, senha, peso, altura, sexo, idade) => {
  const result = await pool.query(
    'UPDATE usuarios SET usuario = $2, senha = $3, peso = $4, altura = $5, sexo = $6, idade = $7 WHERE id = $1 RETURNING *',
    [id, usuario, senha, peso, altura, sexo, idade]
  );

  return result.rows[0];
};

const deletarUsuario = async (id) => {
  const result = await pool.query('DELETE FROM usuarios WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  cadastrarUsuario,
  editarUsuario,
  deletarUsuario,
};