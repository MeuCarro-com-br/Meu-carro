import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import EditScreen from './screens/EditScreen';
import { useContext } from 'react';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <div className="d-flex flex-column site-container">
      <header>
        <Navbar variant="primary">
          <Container>
            <LinkContainer to="/">
              {/* <Navbar.Brand>MeuCarro</Navbar.Brand> */}
              <img src={require('./pics/Logo-Black.png')} className="logo-header" />
            </LinkContainer>
            <Nav className="me-auto">
              <Link to="/cart" className="nav-link">
                Carrinho
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Routes>
            <Route path="/product/:slug" element={<ProductScreen />} />
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/signin" element={<SigninScreen />} />
            <Route path="/product/:slug/edit" element={<EditScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </Routes>
        </Container>
      </main>
      <footer>
        <div className="text-center">Direitos de autor</div>
      </footer>
    </div>
  );
}

export default App;