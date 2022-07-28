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
  - [Dificuldades](#dificuldades)
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

### O que eu aprendi (até agora)

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

### Dificuldades

Tivemos dificuldades usando o React Context e o MongoDB (primeira vez usando essas ferramentas).

### Recursos úteis

- [Recurso do react](https://github.com/toti-br/react-aula-1-turma-15)
- [Recurso do CSS react](https://react-bootstrap.netlify.app/)
- Estes são os recursos que usados no desenvolvimento deste "E-commerce".

## Autor

- PRODUCT OWNER - [Bryan Bravo](https://www.linkedin.com/in/alex-bravo-008-mk)
- SCRUM MASTER - [Andres Reinoza](https://www.linkedin.com/in/alex-bravo-008-mk)
- DEVELOPER  - [Maria Rosendo](#)
