
// index.js
const express = require('express');
const usuarioController = require('./controllers/usuarioController');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/usuarios', usuarioController.cadastrarUsuario);
app.put('/usuarios/:id', usuarioController.editarUsuario);
app.delete('/usuarios/:id', usuarioController.deletarUsuario);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});


