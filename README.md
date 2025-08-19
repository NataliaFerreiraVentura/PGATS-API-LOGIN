# API de Autenticação de Usuários

API REST para registro e autenticação de usuários, desenvolvida como projeto de aprendizado em testes e automação de APIs.

## Funcionalidades

- **Registro de usuários**
  - Criação de conta com e-mail e senha
  - Validação de campos obrigatórios
  - Verificação de duplicidade de e-mail

- **Login de usuários**
  - Autenticação com credenciais válidas
  - Geração de token JWT para autorização
  - Tratamento de credenciais inválidas

## Estrutura do Projeto

src/
   controllers/      # Lógica de rotas
   services/         # Lógica de negócio
   models/           # Representação de dados
   middleware/       # Autenticação (opcional)
   app.js            # Inicializa o Express
   server.js         # Inicializa o servidor
Test/                # Testes automatizados (Mocha, Chai, Supertest)
swagger.json        # Documentação da API
README.md           # Instruções
```
## Instalação 
1. Instale as dependências:
   ```cmd
   npm install   
   ```
2. Inicie o servidor:
   ```cmd
   node server.js
   ```

## Documentação Swagger

## 📚 Documentação da API

A documentação interativa da API está disponível através do Swagger UI. Após iniciar o servidor, acesse: http://localhost:3000/api-docs

## Tecnologias Utilizadas
- Node.js
- Express
- JSON Web Token (jsonwebtoken)
- Swagger UI Express
- Mocha (testes)
- Chai (assertions)
- Sinon (mocks/stubs)
- Supertest (testes de API)

---
API para aprendizado de testes e automação de APIs. PGATS - 2025-02
