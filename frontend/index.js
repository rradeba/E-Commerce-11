import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app';  

const rootElement = document.getElementById('root');


const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Router> {/* Wrap the app with Router to enable routing */}
      <App />
    </Router>
  </React.StrictMode>
);