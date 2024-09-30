import { openDb } from "../configDB.js";

// Cria o BD
export async function create() {
    openDb().then(db=> {
        db.exec('CREATE TABLE IF NOT EXISTS Usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT,nome TEXT NOT NULL,idade INTEGER, email TEXT NOT NULL)')
    })
}

// Inseri um novo usuário
export async function createUsuario(usuario) {
    openDb().then(db=> {
        db.run('INSERT INTO Usuarios (nome, idade, email) VALUES (?, ?, ?)', [usuario.nome, usuario.idade, usuario.email]);
    })
}

// Busca todos os usuários
export async function getUsuario() {
    return openDb().then(db=> {
        return db.all('SELECT * FROM Usuarios')
        .then(res=>res)
    })
}

// Deleta um usuário
export async function deleteUsuario(id) {
    return openDb().then(db=> {
        return db.get('DELETE FROM Usuarios WHERE id=?', [id])
        .then(res=>res)
    })
}