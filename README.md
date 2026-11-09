# API REST - Alunos

API REST para gerenciar o cadastro de alunos e suas notas, com CRUD completo. Projeto desenvolvido na faculdade, com Node.js, Express e MySQL.

## Tecnologias

- Node.js
- Express
- MySQL (`mysql2`)
- dotenv

## Como rodar

**1. Clone o repositório e instale as dependências**

```bash
git clone https://github.com/ManuelaLys04/api-aluno.git
cd api-aluno
npm install
```

**2. Crie o banco de dados**

Execute o arquivo `schema.sql` no seu MySQL. Ele cria o banco `escola` e a tabela `alunos`.

**3. Configure as variáveis de ambiente**

Copie o `.env.example` para `.env` e preencha com os dados do seu MySQL:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha_aqui
DB_NAME=escola
```

**4. Inicie o servidor**

```bash
node index.js
```

A API fica disponível em `http://localhost:3000`.

## Rotas

| Método | Rota | Descrição |
|---|---|---|
| GET | `/alunos` | Lista todos os alunos |
| GET | `/alunos/:id` | Busca um aluno pelo id |
| POST | `/alunos` | Cadastra um novo aluno |
| PUT | `/alunos/:id` | Atualiza um aluno |
| DELETE | `/alunos/:id` | Exclui um aluno |

### Exemplo de corpo (POST e PUT)

```json
{
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "nota1": 8.5,
  "nota2": 7.0,
  "notaFinal": 7.75,
  "status": "Aprovado"
}
```

### Exemplo de resposta (POST)

```json
{
  "message": "Aluno inserido com sucesso",
  "id": 1,
  "nome": "Maria Silva",
  "email": "maria@email.com",
  "nota1": 8.5,
  "nota2": 7.0,
  "notaFinal": 7.75,
  "status": "Aprovado"
}
```

### Erros

Quando o aluno não existe, a API responde com status `404`:

```json
{ "message": "Aluno não encontrado" }
```

## Testando

Use o Postman, o Insomnia ou o curl:

```bash
curl http://localhost:3000/alunos
```

## Autora

Manuela Lys · [LinkedIn](https://www.linkedin.com/in/manuela-lys-bunscheit-nascimento-furtado-176693249)
