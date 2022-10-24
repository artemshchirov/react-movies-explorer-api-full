import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './i18next';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
