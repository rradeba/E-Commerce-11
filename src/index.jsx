import React from 'react';
import { createRoot } from 'react-dom/client';  // Ensure you're using the correct React DOM import for React 18+
import './index.css'; 
import Main from './main.jsx';  // Ensure this import path is correct
import reportWebVitals from './reportWebVitals';

console.log('Index.js is rendering');

const root = createRoot(document.getElementById('root'));  // Ensure there's an element with id 'root'
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals();
