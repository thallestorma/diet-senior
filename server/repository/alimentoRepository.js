const { Pool } = require('pg');

const pool = new Pool({
  user: 'seu_usuario',
  host: 'localhost',
  database: 'sua_basedados',
  password: 'sua_senha',
  port: 5432,
});

const cadastrarAlimento = async (nome, calorias, quantidade) => {
  const result = await pool.query(
    'INSERT INTO alimentos (nome, calorias, quantidade) VALUES ($1, $2, $3) RETURNING *',
    [nome, calorias, quantidade]
  );

  return result.rows[0];
};

const listarAlimentos = async () => {
  const result = await pool.query('SELECT * FROM alimentos');
  return result.rows;
};

const editarAlimento = async (id, nome, calorias, quantidade) => {
  const result = await pool.query(
    'UPDATE alimentos SET nome = $2, calorias = $3, quantidade = $4 WHERE id = $1 RETURNING *',
    [id, nome, calorias, quantidade]
  );

  return result.rows[0];
};

const deletarAlimento = async (id) => {
  const result = await pool.query('DELETE FROM alimentos WHERE id = $1 RETURNING *', [id]);
  return result.rows[0];
};

module.exports = {
  cadastrarAlimento,
  listarAlimentos,
  editarAlimento,
  deletarAlimento,
};

//Agora você tem uma API que permite cadastrar, listar, editar e deletar alimentos. 
//Certifique-se de criar a tabela alimentos no seu banco de dados com as colunas apropriadas.