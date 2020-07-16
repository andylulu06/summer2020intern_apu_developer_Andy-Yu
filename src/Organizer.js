import React,{Component} from 'react';
import './App.css';
import {Link} from "react-router-dom";

class Organizer extends React.Component{
    
    render(){
    return (
        <div className="Organizer">
              <div className="grid-container-1">
              <div className="signup-text">
                  <h4>Organizer</h4>
              </div>
              <div className="container">
                <input type="text" placeholder="Email" name="" className="organizer-input-email"></input>
    
                <input type="password" placeholder="Password" name="" className="organizer-input-password"></input>
              <div className="login-button">
                <Link to="/setappointment" className="organizer-login-button">login</Link>

                <Link to="/" className="home-button">Home</Link>

              </div>
              </div>
          </div>
        </div>
      );
    }
  }
export default Organizer;