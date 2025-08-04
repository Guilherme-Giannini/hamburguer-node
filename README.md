# 🍔 API de Hamburgueria — Projeto de Estudo

Este é um projeto simples de API REST criado com **Node.js** e **Express** para fins de aprendizado. A aplicação simula o gerenciamento de pedidos de uma hamburgueria, permitindo operações de CRUD (Create, Read, Update, Delete).

## 🚀 Funcionalidades

- **Criar um pedido** (`POST /pedidos`)
- **Listar todos os pedidos** (`GET /pedidos`)
- **Atualizar um pedido por ID** (`PUT /pedidos/:id`)
- **Atualizar apenas o status de um pedido** (`PATCH /pedidos/:id`)
- **Deletar um pedido por ID** (`DELETE /pedidos/:id`)

## 🧪 Testes

Todos os testes foram realizados utilizando o **Insomnia**, uma ferramenta de requisições HTTP.

## 💻 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [UUID](https://www.npmjs.com/package/uuid) — para geração de IDs únicos
- [Insomnia](https://insomnia.rest/) — para testar os endpoints

## 📁 Estrutura do projeto

projeto-02-hamburgueria/
├── index.js # Arquivo principal com as rotas e lógica da API
├── package.json # Dependências e scripts do projeto
└── .gitignore # Arquivos e pastas ignoradas pelo Git

bash
Copiar
Editar

## 🔧 Instalação e execução

1. **Clone o repositório:**
```bash
git clone https://github.com/Guilherme-Giannini/hamburguer-node.git
cd hamburguer-node
Instale as dependências:

bash
Copiar
Editar
npm install
Execute o servidor:

bash
Copiar
Editar
node index.js
A API ficará disponível em http://localhost:3000

📌 Exemplo de corpo de requisição para criar um pedido (POST /pedidos)
json
Copiar
Editar
{
  "order": "X-Burguer com bacon",
  "clientName": "João da Silva",
  "price": 28.50
}
✅ Exemplo de resposta
json
Copiar
Editar
{
  "id": "f9d21d8b-1234-4f97-b8af-1a8fbd5aa000",
  "order": "X-Burguer com bacon",
  "clientName": "João da Silva",
  "price": 28.5,
  "status": "Em preparação"
}
📝 Observações
Projeto criado apenas para fins didáticos.

Nenhuma base de dados foi utilizada — os dados ficam armazenados em memória (em um array).

Sempre que o servidor reiniciar, os dados serão perdidos.

📄 Licença
Este projeto está sob a licença MIT.
