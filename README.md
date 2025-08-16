# API de Login

API REST simples para registro e login de usuários, criada para fins de aprendizado de testes e automação de APIs.

## Funcionalidades
- Registro de usuários
- Login de usuários
- Validação de dados
- Documentação Swagger disponível em `/api-docs`

## Estrutura do Projeto
```
src/
   controllers/      # Lógica de rotas
   services/         # Lógica de negócio
   models/           # Representação de dados
   middleware/       # Autenticação (opcional)
   app.js            # Inicializa o Express
   server.js         # Inicializa o servidor
swagger.json        # Documentação da API
README.md           # Instruções
```

## Instalação
1. Instale as dependências:
   ```cmd
   npm install express swagger-ui-express
   ```
2. Inicie o servidor:
   ```cmd
   node src/server.js
   ```

## Uso
- Registro: `POST /users/register` (body: `{ "login": "usuario", "password": "senha" }`)
- Login: `POST /users/login` (body: `{ "login": "usuario", "password": "senha" }`)
- Documentação: Acesse [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Testes
O arquivo `app.js` pode ser importado para testes com Supertest sem iniciar o servidor.

---
API para aprendizado de testes e automação de APIs.
