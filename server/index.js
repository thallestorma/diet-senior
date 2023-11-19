const express = require('express');
const mysql = require('mysql2');
const usuarioController = require('./controller/usuarioController');
const alimentoController = require('./controller/alimentoController');
const consumoController = require('./controller/consumoController');
require('dotenv').config(); // Carregar variáveis de ambiente do arquivo .env

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Configuração da conexão com o banco de dados
const db = mysql.createConnection(process.env.DATABASE_URL);

// Conectar ao banco de dados
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
app.post('/consumo', consumoController.adicionarConsumo);
app.get('/consumo-diario', consumoController.obterConsumoDiario);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

//Certifique-se de criar a tabela consumo_diario no seu banco de dados com as colunas apropriadas. 
//Agora, você pode adicionar um item da lista de alimentos e verificar o consumo diário de calorias com a rota /consumo-diario.
//Essa rota retornará a quantidade total de calorias consumidas até agora.
// Certifique-se de ajustar a estrutura do seu banco de dados conforme necessário.