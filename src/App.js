import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar variant="primary">
            <Container>
              <LinkContainer to="/">
                {/* <Navbar.Brand>MeuCarro</Navbar.Brand> */}
                <img src={require('./pics/Logo-Black.png')} className="logo-header" />
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Routes>
              <Route path="/product/:slug" element={<ProductScreen />} />
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
}
