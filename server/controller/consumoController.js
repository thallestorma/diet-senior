const consumoRepository = require('../repositories/consumoRepository');

const adicionarConsumo = async (req, res) => {
  try {
    const { idAlimento, quantidade } = req.body;

    const novoConsumo = await consumoRepository.adicionarConsumo(idAlimento, quantidade);

    res.json(novoConsumo);
  } catch (error) {
    console.error('Erro ao adicionar consumo:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const obterConsumoDiario = async (req, res) => {
  try {
    const caloriasConsumidas = await consumoRepository.obterConsumoDiario();

    res.json({ caloriasConsumidas });
  } catch (error) {
    console.error('Erro ao obter consumo diário:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = {
  adicionarConsumo,
  obterConsumoDiario,
};
