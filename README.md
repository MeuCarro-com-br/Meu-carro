# E-commerce MeuCarro.com.br
E-commerce app de venda de automóveis e motocicletas, foi densenvolvido as telas de Home, informações
do produto, carrinho de produtos, um ambiente "Admin" com: CRUD implementado para gestão dos produtos e estoque de produtos; tem uma interface amigavel e simples para facilitar a navegação do usuario; desenvolvido com  React, Context, Node, Express, MongoDB, Mongoose como principais e algumas outras ferramentas.

## Conteudo

- [Visão geral](#visao-geral)
  - [Rascunho](#rascunho)
  - [Links](#links)
- [Meu processo](#meu-processo)
  - [Feito com](#feito-com)
  - [O que eu aprendi](#o-que-eu-aprendi)
  - [Uso Local](#uso-local)
  - [Recursos úteis](#recursos-uteis)
- [Autor](#autor)

## Visão geral

### Rascunho

![](/meu-carro/public/Rascunho.jpg)

### Links

- Codigo na web URL: [GitHub](https://github.com/MeuCarro-com-br/Meu-carro)
<!-- Site ao vivo URL: [Heroku Apps](https://my-contact-list-api.herokuapp.com/)-->

## Meu processo

### Feito com

- Desenvolvido com  React, Context, Node, Express, MongoDB, Mongoose.

### O que eu aprendi

Inserir props condicionais nas tags importadas do bootstrap.

```jsx
{userInfo ? (
  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
    <LinkContainer to="/profile">
      <NavDropdown.Item>User Profile</NavDropdown.Item>
    </LinkContainer>
  <NavDropdown.Divider />
    <Link className="dropdown-item" to="#signout" onClick={signoutHandler}>
      Sign Out
    </Link>
  </NavDropdown>
) : (
  <Link className="nav-link" to="/signin">
    Sign In
  </Link>
)}
```
Criar models usando mongoose na API.
```js
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
  },
);

const Product = mongoose.model('Product', productSchema);
export default Product;
```
Fazer a conexão com o banco usando o arquivo .env.
```js
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Conectado com o db MeuCarro.com.br');
  })
  .catch((err) => {
    console.log(err.message);
  });
```

### Uso Local

#### 1. Clone o repositorio

```
$ git clone https://github.com/MeuCarro-com-br/Meu-carro.git
$ cd meu-carro
```

#### 2. Crie um arquivo .env

- Pode duplicar o .env.exemplo na pasta meu-carro-api e renomear esse arquivo de .env

#### 3. Crie o banco com MongoDB

- Local MongoDB
  - Para instalar [aqui](https://www.mongodb.com/try/download/community)
  - No arquivo .env atualize o MONGODB_URI=mongodb://localhost/meu-carro

#### 4. Para iniciar o Backend | meu-carro

```
$ cd meu-carro-api
$ npm install
$ npm start
```

#### 5. Para iniciar o Frontend | meu-carro-api

```
# precisa abrir um novo terminal
$ cd meu-carro
$ npm install
$ npm start
```

### Recursos úteis

- [Recurso do react](https://github.com/toti-br/react-aula-1-turma-15)
- [Recurso do CSS react](https://react-bootstrap.netlify.app/)
- Estes são os recursos que usados no desenvolvimento deste "E-commerce".

## Autor

- PRODUCT OWNER - [Bryan Bravo](https://www.linkedin.com/in/alex-bravo-008-mk)
- SCRUM MASTER - [Andres Reinoza](https://www.linkedin.com/in/alex-bravo-008-mk)
- DEVELOPER  - [Maria Rosendo](#)