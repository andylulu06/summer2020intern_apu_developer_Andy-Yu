import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import {Link} from "react-router-dom" 
import App from "./App";

class User extends React.Component{   
    
  constructor() {
    super();
    this.state = {
      Email: "",
      Password:"",
      buttonClicked: false
    };
    this.getDetails = this.getDetails.bind(this);
  }

  componentDidMount(){
    axios.get("http://localhost:3000")
    .then((res) =>{
      this.setState({
        data:res.data
      })
    });
  }

  getDetails(){
    if(!this.state.buttonClicked){
      this.setState({
        buttonClicked: true
      });
    }
  }
    render(){
    return (
          <div className="User">
            <div className="grid-container-1">

                <div className="signup-text">
                    <h4>User</h4>
                </div>

                <div className="container">
                  <input type="text" placeholder="Email" name="Email" className="user-input-name"></input>
      
                  <input type="password" placeholder="Password" name="Password" className="user-input-password"></input>

                  <div className="login-button">
                    <Link to="/bookappointment" className="user-login-button" onClick={this.getDetails} >login</Link>

                    <Link to="/" className="home-button">Home</Link>

                  </div>
                </div>
            </div>
          </div>
      );
    }
  }
export default User;