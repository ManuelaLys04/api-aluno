let express = require('express');
let app = express();
app.use(express.json());
const PORT = 3000;

const db = require('./db');


app.get('/alunos', function (request, response) {
    
    db.query("SELECT * FROM alunos", (err, results)=> {
        if (err) {
            response.status(500).json({error: err.message});
        }
        response.json(results);
   });
});


app.post('/alunos', function (request, response) {

    const { nome, email, nota1, nota2, notaFinal, status } = request.body;
     db.query("INSERT INTO alunos (nome, email, nota1, nota2, notaFinal, status) VALUES (?, ?, ?, ?, ?, ?)", [nome, email, nota1, nota2, notaFinal, status], (err, results) => {
        if (err) {
            response.status(500).json({error: err.message});   
        }
        response.status(201).json({message: "usuario inserido com sucesso", id: results.insertId, nome, email, nota1, nota2, notaFinal, status

        });
    });


});

app.listen(PORT, function () {
    console.log(`Servidor rodando na porta ${PORT}`);
});

