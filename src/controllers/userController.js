// controllers/userController.js

const express = require('express');
const router = express.Router();
const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const SECRET = process.env.JWT_SECRET || 'segredo_super_simples';

router.post('/register', (req, res) => {
    const { login, password, name, email } = req.body;
    const result = userService.registerUser(login, password, name, email);
    if (result.error) {
        if (result.error === 'Usuário já existente') {
            return res.status(401).json({ error: result.error });
        }
        return res.status(400).json({ error: result.error });
    }
    res.status(201).json({
        mensagem: 'Usuário registrado com sucesso',
        user: result.user
    });
});

router.post('/login', (req, res) => {
    const { login, password } = req.body;
    if (!login || !password) {
        return res.status(400).json({ error: 'Login e senha são obrigatórios.' });
    }
    const result = userService.loginUser(login, password);
    if (result.error) {
        if (result.error === 'Login ou senha inválidos.') {
            return res.status(400).json({ error: result.error });
        }
        return res.status(400).json({ error: result.error });
    }
    const token = jwt.sign({ login: result.user.login }, SECRET, { expiresIn: '1h' });
    res.status(200).json({
        mensagem: 'Login realizado com sucesso',
        user: result.user,
        token
    });
});

module.exports = router;
