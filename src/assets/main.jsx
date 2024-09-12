import React from 'react'; 
import MyNavbar from './MyNavbar'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'; 

function Main() { 
  return (
    <div className="main">
      <MyNavbar />  

      <div className="card">
        <h1>Crypto Market</h1>
        <p>Find new crypto coins in our directory.</p>
        <img className="image img-fluid" src="/crypto.jpg" alt="Crypto" />
        <Button className="custom-button mb-2">
          Shop Now
        </Button>
      </div>
    </div>
  );
}

export default Main;
