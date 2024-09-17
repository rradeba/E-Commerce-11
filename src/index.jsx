import React from 'react';
import { createRoot } from 'react-dom/client';

import Main from './main.jsx';  // Ensure the path is correct

console.log('Index.js is rendering');  // Debugging log

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
