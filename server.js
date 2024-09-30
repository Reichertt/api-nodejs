import express from 'express';
import { openDb } from './src/configDB.js';
import { create, createUsuario, getUsuario, deleteUsuario } from './src/Controler/Usuarios.js';
import cors from 'cors'

openDb();

const app = express();
app.use(express.json());
app.use(cors());

create();

const users = [];

/* Rota do tipo POST para criar novos usuários */
app.post('/usuarios', async function (req, res) {
    await createUsuario(req.body);

    // Retorna uma resposta JSON com o status 200
    res.json({
        statusCode: 200,
        message: 'Usuário criado com sucesso!'
    });
});

/* Rota do tipo GET para mostrar os usuários */
app.get('/usuarios', async function(req, res) {
    let usuarios = await getUsuario();
    res.json(usuarios);
});

/* Rota do tipo DELETE para deletar um usuário */
app.delete('/usuarios/:id', async function(req, res) {
    await deleteUsuario(req.params.id);
    res.status(200).json({ message: 'Usuário deletado com Sucesso!' });
});

/* Porta onde o servidor está rodando */
app.listen(3000)

/*
 1) Tipo de Rota / Método HTTP
 2) Endereço
*/