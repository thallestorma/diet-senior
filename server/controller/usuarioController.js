const usuarioRepository = require('../repositories/usuarioRepository');

const cadastrarUsuario = async (req, res) => {
    try {
        const { usuario, senha, peso, altura, sexo, idade } = req.body;

        const novoUsuario = await usuarioRepository.cadastrarUsuario(
            usuario,
            senha,
            peso,
            altura,
            sexo,
            idade
        );

        res.json(novoUsuario);
    } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

const editarUsuario = async (req, res) => {
    try {
        const { id } = req.params;
        const { usuario, senha, peso, altura, sexo, idade } = req.body;

        const usuarioAtualizado = await usuarioRepository.editarUsuario(
            id,
            usuario,
            senha,
            peso,
            altura,
            sexo,
            idade
        );

        if (!usuarioAtualizado) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json(usuarioAtualizado);
    } catch (error) {
        console.error('Erro ao editar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

const deletarUsuario = async (req, res) => {
    try {
        const { id } = req.params;

        const usuarioDeletado = await usuarioRepository.deletarUsuario(id);

        if (!usuarioDeletado) {
            return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        res.json({ message: 'Usuário deletado com sucesso' });
    } catch (error) {
        console.error('Erro ao deletar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

const login = async (req, res) => {
    try {
        const { usuario, senha } = req.body;

        const usuarioAutenticado = await usuarioRepository.loginUsuario(
            usuario,
            senha
        );

        if (!usuarioAutenticado) {
            return res.status(401).json({ error: 'Credenciais inválidas' });
        }

        res.json({
            message: 'Login bem-sucedido',
            usuario: usuarioAutenticado,
        });
    } catch (error) {
        console.error('Erro ao autenticar usuário:', error);
        res.status(500).json({ error: 'Erro interno do servidor' });
    }
};

module.exports = {
    cadastrarUsuario,
    editarUsuario,
    deletarUsuario,
    login,
};
