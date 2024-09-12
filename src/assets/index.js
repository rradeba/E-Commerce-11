import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global CSS (optional)
import Main from './main.jsx'; // Import the Main component (ensure this matches the correct file case)
import reportWebVitals from './reportWebVitals';

console.log("React app has started"); // Logs a message when the app starts

ReactDOM.render(
  <React.StrictMode>
    <Main /> 
  </React.StrictMode>,
  document.getElementById('root')  // Attach the app to the 'root' div in public/index.html
);

// Optionally log performance metrics
reportWebVitals(console.log);
