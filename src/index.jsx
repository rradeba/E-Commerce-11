import React from 'react';
import { createRoot } from 'react-dom/client';  // Import createRoot from 'react-dom/client'
import './index.css'; 
import Main from './main.jsx';
import reportWebVitals from './reportWebVitals';

console.log("React app has started"); 

// Use createRoot for React 18+
const root = createRoot(document.getElementById('root'));  // Create the root element for rendering
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

reportWebVitals(console.log);
