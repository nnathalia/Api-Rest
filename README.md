# 🔗 API REST - Usuários

Trabalho desenvolvido para a disciplina de **Tópicos Essenciais em Tecnologia**.

Esta aplicação é uma API RESTful simples com foco em operações relacionadas a **usuários**, utilizando Node.js, Express, TypeScript e arquitetura em camadas.

## 📁 Estrutura do Projeto

```
src/
├── api/
│   ├── components/
│   │   ├── base/
│   │   └── usuario/
│   ├── index.ts
│   └── routes.ts
├── app.ts
└── server.ts
```

## ⚙️ Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **TypeScript**

## 🚀 Como Executar o Projeto

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/api-rest.git
cd api-rest
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Execute o projeto:

```bash
npm run dev
```

## 📌 Funcionalidades da API

A API atualmente implementa 4 operações básicas (CRUD):

### 🔍 Listar Usuários

- **Rota:** `GET /usuarios`
- **Resposta:**

```json
{
  "lista": ["Nathalia", "nmariano@gmail.com", "nath"]
}
```

### ➕ Criar Usuário

- **Rota:** `POST /usuarios`
- **Resposta:**

```json
{
  "messsage": "create"
}
```

### ✏️ Atualizar Usuário

- **Rota:** `PUT /usuarios/:id`
- **Resposta:**

```json
{
  "messsage": "update"
}
```

### ❌ Deletar Usuário

- **Rota:** `DELETE /usuarios/:id`
- **Resposta:**

```json
{
  "messsage": "delete"
}
```

## 🤝 Contribuição

Sinta-se à vontade para abrir issues e pull requests. Toda contribuição é bem-vinda!

---

Feito com 💙 por Nathalia Mariano Lopes
