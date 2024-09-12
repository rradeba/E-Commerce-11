import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import any global CSS (optional)
import Main from './main'; // Import your main component (or App component)
import reportWebVitals from './reportWebVitals';

console.log("React app has started"); // This will log to the console when the app starts

ReactDOM.render(
  <React.StrictMode>
    <Main />  
  </React.StrictMode>,
  document.getElementById('root')  // Render into the root div in public/index.html
);

// If you want to measure performance, pass a function to log results (optional)
reportWebVitals(console.log);
