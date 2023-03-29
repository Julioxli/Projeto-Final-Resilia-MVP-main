# Instruções para rodar a API
- dentro da pasta API `npm install` `em seguida npm start` para iniciar o servidor da API com o `nodemon`
requisições feitas para as rotas privadas precisam do token de autenticação recebido pelo controlador SessionController
para realizar requisições sem a autenticação desativar o middleware de autenticação no arquivo de rotas 
- comentando com // a linha com o método `routes.use(auth)`
- para receber o token envie uma requisição post com um usuário e senha já criado para a rota /sessions

 
