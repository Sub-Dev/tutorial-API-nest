<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# API de serviço de usuários
Esta é uma API NestJS que fornece um serviço de usuários, permitindo criar, ler, atualizar e excluir usuários.

## 🎨 Tecnologias utilizadas
- NestJS
- TypeORM
- bcrypt
- crypto

## Funcionalidades
- Crie um novo usuário com um endereço de e-mail exclusivo
- Recuperar uma lista de todos os usuários
- Recuperar um único usuário por ID
- Atualizar as informações de um usuário
- Excluir um usuário

##Instalação
Para instalar este projeto, execute o seguinte comando:

```bash
npm install
```
## API Endpoints

### Criar usuário
- POST/usuários
Corpo da solicitação: CreateUserDto (e-mail, nome, senha, senhaConfirmação)
Resposta: Objeto de usuário com dados de usuário criados
### Obtenha todos os usuários
- GET /usuários
Resposta: Matriz de objetos User

### Obtenha usuário por ID
- GET /usuários/:id
Parâmetro de caminho: id (ID do usuário)
Resposta: Objeto de usuário com dados do usuário

### Atualizar usuário
- PATCH /usuários/:id
Parâmetro de caminho: id (ID do usuário)
Corpo da solicitação: UpdateUserDto (e-mail, nome, senha, senhaConfirmação)
Resposta: Objeto de usuário com dados de usuário atualizados

### Deletar usuário
- DELETE /usuários/:id
Parâmetro de caminho: id (ID do usuário)
Resposta: 200 OK sem conteúdo

### Manipulação de erros
Esta API usa o mecanismo integrado de tratamento de erros do NestJS. Se ocorrer um erro, a API retornará uma resposta de erro com um código de status e uma mensagem de erro.

## 👥 Autor

<table>
 <tr>
 <td alinhar="centro">
 <a href="https://github.com/Sub-Dev" target="_blank">
 <img src="https://avatars.githubusercontent.com/u/68450692?v=4" alt="Anthony-Marin" height="30" width="30"/>
 </a>
 </td>
 <td>
 <strong>Anthony Marin</strong> (Subdesenvolvedor) - <a href="https://github.com/Sub-Dev">Perfil no GitHub</a>
 </td>
 </tr>
</table>

## Licença
Este projeto está licenciado sob a Licença MIT.

## 💬 Obrigado
Obrigado ao [**Iago Maia**](https://github.com/iagomaia) pelo otimo tutorial desenvolvido que esta disponivel no [**Link Tutorial**](https://medium.com/@iago.maiasilva/construindo-uma-api-com-nestjs-postgresql-e-docker-parte-1-criando-nosso-primeiro-endpoint-248d4b8ecc9c)


