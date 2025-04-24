// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ for React 18+
import './index.css';
import App from './App';
import { CodeProvider } from './context/CodeContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CodeProvider>
    <App />
  </CodeProvider>
);
