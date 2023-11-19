const imcRepository = require('../repositories/imcRepository');

const calcularIMC = (req, res) => {
  try {
    const { peso, altura } = req.body;

    const resultadoIMC = imcRepository.calcularIMC(peso, altura);

    res.json(resultadoIMC);
  } catch (error) {
    console.error('Erro ao calcular IMC:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = {
  calcularIMC,
};
