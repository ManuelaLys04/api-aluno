const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;

const db = require('./db');

// Lista todos os alunos
app.get('/alunos', function (request, response) {
    db.query("SELECT * FROM alunos", (err, results) => {
        if (err) {
            return response.status(500).json({ error: err.message });
        }
        response.json(results);
    });
});

// Busca um aluno pelo id
app.get('/alunos/:id', function (request, response) {
    db.query("SELECT * FROM alunos WHERE id = ?", [request.params.id], (err, results) => {
        if (err) {
            return response.status(500).json({ error: err.message });
        }
        if (results.length === 0) {
            return response.status(404).json({ message: "Aluno não encontrado" });
        }
        response.json(results[0]);
    });
});

// Cadastra um novo aluno
app.post('/alunos', function (request, response) {
    const { nome, email, nota1, nota2, notaFinal, status } = request.body;

    db.query(
        "INSERT INTO alunos (nome, email, nota1, nota2, notaFinal, status) VALUES (?, ?, ?, ?, ?, ?)",
        [nome, email, nota1, nota2, notaFinal, status],
        (err, results) => {
            if (err) {
                return response.status(500).json({ error: err.message });
            }
            response.status(201).json({
                message: "Aluno inserido com sucesso",
                id: results.insertId,
                nome, email, nota1, nota2, notaFinal, status
            });
        }
    );
});

// Atualiza um aluno pelo id
app.put('/alunos/:id', function (request, response) {
    const { nome, email, nota1, nota2, notaFinal, status } = request.body;

    db.query(
        "UPDATE alunos SET nome = ?, email = ?, nota1 = ?, nota2 = ?, notaFinal = ?, status = ? WHERE id = ?",
        [nome, email, nota1, nota2, notaFinal, status, request.params.id],
        (err, results) => {
            if (err) {
                return response.status(500).json({ error: err.message });
            }
            if (results.affectedRows === 0) {
                return response.status(404).json({ message: "Aluno não encontrado" });
            }
            response.json({ message: "Aluno atualizado com sucesso" });
        }
    );
});

// Exclui um aluno pelo id
app.delete('/alunos/:id', function (request, response) {
    db.query("DELETE FROM alunos WHERE id = ?", [request.params.id], (err, results) => {
        if (err) {
            return response.status(500).json({ error: err.message });
        }
        if (results.affectedRows === 0) {
            return response.status(404).json({ message: "Aluno não encontrado" });
        }
        response.json({ message: "Aluno excluído com sucesso" });
    });
});

app.listen(PORT, function () {
    console.log(`Servidor rodando na porta ${PORT}`);
});
