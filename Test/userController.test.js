// Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');
const app = require('../src/app');
const userService = require('../src/services/userService');

describe('API LOGIN', () => {

    afterEach(() => sinon.restore());

    describe('POST /users/register', () => {

        it('Deve criar um usuário e retornar 201 quando os dados são válidos', async () => {
            const userData = {
                name: 'John Doe',
                email: 'john@example.com',
                login: 'john.doe',
                password: 'password123'
            };

            // Stub do serviço
            sinon.stub(userService, 'registerUser').returns({ success: true, user: userData });

            const response = await request(app)
                .post('/users/register')
                .send(userData);

            expect(response.status).to.equal(201);
            expect(response.body.mensagem).to.equal('Usuário registrado com sucesso');
            expect(response.body.user).to.deep.equal(userData);
        });

        it('Deve retornar 400 quando os campos obrigatórios estão ausentes', async () => {
            const userData = {
                name: 'John Doe',
                email: '',
                login: '',
                password: 'password123'
            };

            sinon.stub(userService, 'registerUser').returns({ error: 'Todos os campos obrigatórios devem ser preenchidos.' });

            const response = await request(app)
                .post('/users/register')
                .send(userData);

            expect(response.status).to.equal(400);
            expect(response.body).to.have.property('error', 'Todos os campos obrigatórios devem ser preenchidos.');
        });

        it('Deve retornar 400 quando o usuário já existe', async () => {
            const userData = {
                name: 'John Doe',
                email: 'john@example.com',
                login: 'john.doe',
                password: 'password123'
            };

            sinon.stub(userService, 'registerUser').returns({ error: 'Usuário já existente' });

            const response = await request(app)
                .post('/users/register')
                .send(userData);

            expect(response.status).to.equal(400);
            expect(response.body).to.have.property('error', 'Usuário já existente');
        });

    });

    describe('POST /users/login', () => {

        it('Deve retornar 200 e token quando login é bem-sucedido', async () => {
            const userData = {
                login: 'Naty',
                password: 'password123'
            };

            sinon.stub(userService, 'loginUser').returns({
                user: userData,
                mensagem: 'Login realizado com sucesso',
                token: 'fake-token-123'
            });

            const response = await request(app)
                .post('/users/login')
                .send(userData);

            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('mensagem', 'Login realizado com sucesso');
            expect(response.body).to.have.property('token');
            expect(response.body.user).to.deep.equal(userData);
        });

        it('Deve retornar 401 quando login ou senha são inválidos', async () => {
            const userData = { login: 'john.doe', password: 'password' };

            sinon.stub(userService, 'loginUser').returns({ error: 'Login ou senha inválidos.' });

            const response = await request(app)
                .post('/users/login')
                .send(userData);

            expect(response.status).to.equal(401);
            expect(response.body).to.have.property('error', 'Login ou senha inválidos.');
        });

    });

});
