const consumoRepository = require('../repositories/consumoRepository');

const calcularCalorias = async (req, res) => {
    try {
        const { usuarioId, alimentoId, quantidade } = req.body;

        const [caloriasDoAlimento, quantidadeAlimento] =
            await consumoRepository.obterCaloriasDoAlimento(alimentoId);

        if (caloriasDoAlimento !== null && quantidadeAlimento !== null) {
            const caloriasPorGrama = caloriasDoAlimento / quantidadeAlimento;

            let totalCaloriasConsumidas =
                await consumoRepository.obterTotalCaloriasConsumidas(usuarioId);

            if (!totalCaloriasConsumidas) {
                totalCaloriasConsumidas = 0;
            }

            const caloriasDoConsumo = caloriasPorGrama * quantidade;
            totalCaloriasConsumidas += caloriasDoConsumo;

            await consumoRepository.atualizarTotalCaloriasConsumidas(
                usuarioId,
                totalCaloriasConsumidas
            );

            res.json({ totalCalorias: totalCaloriasConsumidas });
        } else {
            res.status(404).json({ message: 'Alimento não encontrado' });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao calcular as calorias',
            error: error.message,
        });
    }
};

const obterTotalCaloriasDiarias = async (req, res) => {
    try {
        const { usuarioId } = req.params;

        const totalCaloriasConsumidas =
            await consumoRepository.obterTotalCaloriasConsumidas(usuarioId);

        if (totalCaloriasConsumidas !== null) {
            res.json({ totalCalorias: totalCaloriasConsumidas });
        } else {
            res.status(404).json({
                message: 'Registro não encontrado para este usuário',
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'Erro ao obter as calorias diárias',
            error: error.message,
        });
    }
};

module.exports = { calcularCalorias, obterTotalCaloriasDiarias };
