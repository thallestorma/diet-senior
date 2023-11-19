const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool(process.env.DATABASE_URL);

const obterCaloriasDoAlimento = async (nomeAlimento) => {
  try {
    const [rows] = await pool.query('SELECT calorias FROM alimentos WHERE nome = ?', [nomeAlimento]);
    if (rows.length > 0) {
      return rows[0].calorias;
    }
    return null;
  } catch (error) {
    throw new Error(`Erro ao obter calorias do alimento: ${error.message}`);
  }
};

const obterTotalCaloriasConsumidas = async (usuarioId) => {
  try {
    const [rows] = await pool.query('SELECT total_calorias FROM consumo_diario WHERE usuario_id = ? AND data = CURDATE()', [usuarioId]);
    if (rows.length > 0) {
      return rows[0].total_calorias;
    }
    return 0; // Retorna 0 se não houver registro para o usuário na data atual
  } catch (error) {
    throw new Error(`Erro ao obter total de calorias consumidas: ${error.message}`);
  }
};

const atualizarTotalCaloriasConsumidas = async (usuarioId, totalCalorias) => {
  try {
    const [rows] = await pool.query('SELECT COUNT(*) AS count FROM consumo_diario WHERE usuario_id = ? AND data = CURDATE()', [usuarioId]);
    const count = rows[0].count;

    if (count > 0) {
      // Atualiza o valor se já existe uma linha para o usuário na data atual
      await pool.query('UPDATE consumo_diario SET total_calorias = ? WHERE usuario_id = ? AND data = CURDATE()', [totalCalorias, usuarioId]);
    } else {
      // Insere um novo registro se não existir uma linha correspondente
      await pool.query('INSERT INTO consumo_diario (usuario_id, data, total_calorias) VALUES (?, CURDATE(), ?)', [usuarioId, totalCalorias]);
    }
  } catch (error) {
    throw new Error(`Erro ao atualizar total de calorias consumidas: ${error.message}`);
  }
};

module.exports = { obterCaloriasDoAlimento, obterTotalCaloriasConsumidas, atualizarTotalCaloriasConsumidas };
