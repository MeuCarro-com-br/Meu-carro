import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD:src/index.js
=======
import { HelmetProvider } from 'react-helmet-async';
>>>>>>> develop:meu-carro/src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'
import { StoreProvider } from './Store';

class Main extends React.Component {
  render() {
    return (
      <React.StrictMode>
        <StoreProvider>
          <Router>
            <HelmetProvider>
              <App />
            </HelmetProvider>
          </Router>
        </StoreProvider>
      </React.StrictMode>
    );
  }
}
const root =
  ReactDOM.createRoot(document.getElementById("root"));

root.render(<Main />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
