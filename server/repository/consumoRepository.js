const { Pool } = require('pg');

const pool = new Pool({
  user: 'seu_usuario',
  host: 'localhost',
  database: 'sua_basedados',
  password: 'sua_senha',
  port: 5432,
});

const adicionarConsumo = async (idAlimento, quantidade) => {
  const result = await pool.query(
    'INSERT INTO consumo_diario (id_alimento, quantidade) VALUES ($1, $2) RETURNING *',
    [idAlimento, quantidade]
  );

  return result.rows[0];
};

const obterConsumoDiario = async () => {
  const result = await pool.query('SELECT SUM(a.calorias * c.quantidade) AS calorias_consumidas FROM alimentos a JOIN consumo_diario c ON a.id = c.id_alimento');
  
  return result.rows[0].calorias_consumidas || 0;
};

module.exports = {
  adicionarConsumo,
  obterConsumoDiario,
};
