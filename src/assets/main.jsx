import React from 'react'; 
import MyNavbar from './MyNavbar';  // Import your custom navbar component
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import './main.css'; // Custom CSS for Main component
import { Button } from 'react-bootstrap';  // Import Bootstrap's Button component

function Main() { 
  return (
    <div className="main">
      <MyNavbar />  {/* Use the custom navbar component */}
      <div className="card">
        <h1>Crypto Market</h1>
        <p>Find new crypto coins in our directory.</p>
        <img className="image img-fluid" src="/book.png" alt="Crypto" />
        <Button className="custom-button mb-2">
          Shop Now
        </Button>
      </div>
    </div>
  );
}

export default Main;
