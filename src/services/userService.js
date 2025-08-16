// services/userService.js

const User = require('../models/userModel');

const users = [];

function registerUser(login, password, name, email) {
    if (!login || !password || !name || !email) {
        return { error: "Todos os campos obrigatórios devem ser preenchidos."
 };
    }
    if (users.find(u => u.login === login)) {
        return { error: 'Usuário já existente' };
    }
    const user = new User(login, password, name, email);
    users.push(user);
    return { success: true, user };
}

function loginUser(login, password) {
    if (!login || !password) {
        return { error: 'Login e senha são obrigatórios.' };
    }
    const user = users.find(u => u.login === login && u.password === password);
    if (!user) {
        return { error: 'Login ou senha inválidos.' };
    }
    return { success: true, user };
}

module.exports = { registerUser, loginUser };
