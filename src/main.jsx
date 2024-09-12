import React from 'react'; 
import MyNavbar from './navbar.jsx';  // Import your custom navbar component
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import './main.css'; // Custom CSS for Main component
import { Button } from 'react-bootstrap';  // Import Bootstrap's Button component

function Main() { 
  return (
    <div className="mainPage">
      <MyNavbar />  
      <div className="card">
        <h1>Reid's Book Market</h1>
        <p>Management App For Reid's Books</p>
        <img className="image img-fluid" src="\book.png" alt="Crypto" />
        <Button className="custom-button mb-2">
          Shop Now
        </Button>
      </div>
    </div>
  );
}

export default Main;
