const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(process.env.DATABASE_URL);

const obterCaloriasDoAlimento = async (nomeAlimento) => {
  try {
    const [rows] = await db.promise().query('SELECT calorias FROM alimentos WHERE nome = ?', [nomeAlimento]);
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
    const [rows] = await db.promise().query('SELECT total_calorias FROM consumo_diario WHERE usuario_id = ? AND data = CURDATE()', [usuarioId]);
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
    await db.promise().query('INSERT INTO consumo_diario (usuario_id, data, total_calorias) VALUES (?, CURDATE(), ?) ON DUPLICATE KEY UPDATE total_calorias = ?', [usuarioId, totalCalorias, totalCalorias]);
  } catch (error) {
    throw new Error(`Erro ao atualizar total de calorias consumidas: ${error.message}`);
  }
};

module.exports = { 
  obterCaloriasDoAlimento,
  obterTotalCaloriasConsumidas,
  atualizarTotalCaloriasConsumidas
};
