const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const usuarioController = require('./controller/usuarioController');
const alimentoController = require('./controller/alimentoController');
const consumoController = require('./controller/consumoController');
const imcController = require('./controller/imcController');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const db = mysql.createConnection(process.env.DATABASE_URL);

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
    } else {
        console.log('Conexão ao banco de dados bem-sucedida!');
    }
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Rotas de Usuários
app.post('/usuarios', usuarioController.cadastrarUsuario);
app.put('/usuarios/:id', usuarioController.editarUsuario);
app.delete('/usuarios/:id', usuarioController.deletarUsuario);
app.post('/login', usuarioController.login);

// Rotas de Alimentos
app.post('/alimentos', alimentoController.cadastrarAlimento);
app.get('/alimentos', alimentoController.listarAlimentos);
app.put('/alimentos/:id', alimentoController.editarAlimento);
app.delete('/alimentos/:id', alimentoController.deletarAlimento);

// Rota de Consumo Diário
app.post('/calcularCalorias', consumoController.calcularCalorias);
app.get(
    '/totalCaloriasDiarias/:usuarioId',
    consumoController.obterTotalCaloriasDiarias
);

//Rota Calcular IMC
app.post('/calcular-imc', imcController.calcularIMC);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
