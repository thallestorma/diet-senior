const express = require('express');
const usuarioController = require('./controllers/usuarioController');
const alimentoController = require('./controllers/alimentoController');
const consumoController = require('./controllers/consumoController');

const app = express();
const port = 3000;

app.use(express.json());

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