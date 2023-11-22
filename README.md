# Diet Senior
Sistema para controle de calorias focado em pessoas idosas.


## Tecnologias utilizadaas
### Client (front-end)
- React (biblioteca JavaScript)
  - React Router DOM para rotas

### Server/API (back-end)
- Node.js (motor de execução JavaScript)
  - Express (framework)
- MySQL (banco de dados)

## Como montar seu ambiente de desenvolvimento
Clonar este projeto e entrar no diretório.

### Requisitos
- Node.js versão 20.9.0 LTS

### Server
- Entrar no diretório ``server`` via terminal e então executar o comando `npm install` para instalar as dependências.
- Abrir o arquivo [script_create_database.sql](server/script_create_database.sql) usando um editor de texto, copiar o conteúdo do arquivo e executar no gerenciador do seu banco de dados MySQL para criar o banco da nossa aplicação.
- Dentro do diretório server, criar um arquivo `.env` e inserir uma variável de ambiente `DATABASE_URL` com a string de conexão do banco de dados, seguindo o exemplo a seguir (substitua os valores username, password e localhost de acordo com a configuração do seu banco de dados):
  ```env
  DATABASE_URL='mysql://username:password@localhost/dietsenior'
  ```


### Client
- Entrar no diretório client executando o comando `cd client` e então executar o comando `npm install` para instalar as dependências.
- Dentro do direteório client, criar um criar um arquivo `.env` e inserir uma variável de ambiente `VITE_API_BASE_URL` com a URL do ambiente que tá rodando o server, exemplo:
  ```env
  VITE_API_BASE_URL = 'http://localhost:3000'
  ```
- Para iniciar o app front-end, rodar o comando `npm run dev`.

## Funcionamento
### Front-end

**Login:** Tela para realizar login na aplicação, informando o seu usuário e senha.

**Registro:** Tela para cadastro na aplicação.

**Home:** Tela de boas vindas.

**Calorias:** Tela para exibir a contagem de calorias, sendo que a aplicação já define um limite de 2500 para homens e 2000 para mulheres.

**Tabela de alimentos:** Aqui é possível visualizar os alimentos já cadastrados, cadastrar novos alimentos e também registrar o consumo de um alimento.

**Calculadora IMC:** Nessa tela é possível calcular o seu índice IMC, informando seu peso e altura.

**Alterar dados pessoais:** Aqui é possível alterar todos os dados cadastrados na tela de registro.

**Logout:** Realiza o logout da aplicação.

### Rotas API

POST  `/usuarios` **params**: { usuario, senha, peso, altura, sexo, idade } : Rota para cadastrar um novo usuário.

PUT `/usuarios/:id` **params**: { usuario, senha, peso, altura, sexo, idade } : Rota para atualizar um usuário.

DELETE `/usuarios/:id` **params**: { } : Rota para remover um usuário.

POST `/login` **params**: { usuario, senha } : Rota para realizar login.

POST `/alimentos` **params**: { nome, calorias, quantidade } : Rota para cadastrar um novo alimento.

POST `/alimentos` **params**: { } : Rota para buscar um alimento.

PUT `/alimentos/:id` **params**: { nome, calorias, quantidade } : Rota para editar um alimento.

DELETE `/alimentos/:id` **params**: { } : Rota para remover um alimento.

POST `/calcularCalorias` **params**: { usuarioId, alimentoId, quantidade } : Rota para registrar o consumo de um alimento e calcular as calorias.

GET `/totalCaloriasDiarias/:usuarioId` **params**: { } : Rota para buscar o total de calorias consumidas por um usuário.

## Integrantes do projeto (Grupo 03)
Thalles Diego Verneti Torma

Leonardo Nestor Costa

Lucas de Iuliis

