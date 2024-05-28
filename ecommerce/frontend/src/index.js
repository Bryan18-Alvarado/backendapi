import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContext } from './Context';

const checkCostumer  = localStorage.getItem('customer_login')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserContext.Provider value={checkCostumer}>
        <App />
      </UserContext.Provider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
