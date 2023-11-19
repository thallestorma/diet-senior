const alimentoRepository = require('../repositories/alimentoRepository');

const cadastrarAlimento = async (req, res) => {
  try {
    const { nome, calorias, quantidade } = req.body;

    const novoAlimento = await alimentoRepository.cadastrarAlimento(nome, calorias, quantidade);

    res.json(novoAlimento);
  } catch (error) {
    console.error('Erro ao cadastrar alimento:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const listarAlimentos = async (req, res) => {
  try {
    const alimentos = await alimentoRepository.listarAlimentos();
    res.json(alimentos);
  } catch (error) {
    console.error('Erro ao listar alimentos:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const editarAlimento = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, calorias, quantidade } = req.body;

    const alimentoAtualizado = await alimentoRepository.editarAlimento(
      id,
      nome,
      calorias,
      quantidade
    );

    if (!alimentoAtualizado.affectedRows) {
      return res.status(404).json({ error: 'Alimento não encontrado' });
    }

    res.json({ message: 'Alimento atualizado com sucesso' });
  } catch (error) {
    console.error('Erro ao editar alimento:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

const deletarAlimento = async (req, res) => {
  try {
    const { id } = req.params;

    const alimentoDeletado = await alimentoRepository.deletarAlimento(id);

    if (!alimentoDeletado.affectedRows) {
      return res.status(404).json({ error: 'Alimento não encontrado' });
    }

    res.json({ message: 'Alimento deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar alimento:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
};

module.exports = {
  cadastrarAlimento,
  listarAlimentos,
  editarAlimento,
  deletarAlimento,
};
