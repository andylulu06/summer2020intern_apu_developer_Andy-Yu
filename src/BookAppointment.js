import React, { Component, useState } from 'react';
import './App.css';
import {Link} from "react-router-dom";
import DatePicker from "react-datepicker";
import {Alert} from "react-alert";

import "react-datepicker/dist/react-datepicker.css";

class BookAppointment extends React.Component{   
    
  state={
    startDate: new Date()
  };

  handleChange = date =>{
    this.setState({
      startDate: date
    });
  };

  handleEmail(){
    alert("An confirmation email had sent to your account");
  }

  render(){
    return (
        <div className="BookAppointment">
             <div className="Make-appointment">
                <div className="slot-appointment">
                    <h3 className="slot-select">Choose available slot</h3>

                    <div className="consultant-appointment">
                      <h3 className="consultant-name">Consultant:</h3> 
                      <select className="consultant-select">
                        <option></option>
                        <option>Mr Tian</option>
                        <option>Mr Sebastian</option>
                        <option>Mr Logeswaran</option>
                        <option>Mrs Selina</option>
                      </select>

                      <div className="consultant-select-date">
                      <h3 className="consultant-date">Date:</h3> 
                      <DatePicker selected={this.state.startDate}  className="date-select" onChange={this.handleChange}/>
                      </div>

                      <div className="consultant-select-time">
                      <h3 className="consultant-time">Time:</h3> 
                      <select className="consultant-select">
                        <option></option>
                        <option>0900</option>
                        <option>1000</option>
                        <option>1100</option>
                        <option>1200</option>
                        <option>1300</option>
                        <option>1400</option>
                        <option>1500</option>
                        <option>1600</option>
                      </select>
                      </div>

                      <div className="consultant-email-send">
                      <h3 className="consultant-email">Email:</h3> 
                      <input type="text" placeholder="Enter your email here " className="appointment-input"></input>
                      </div>

                      <div className="button-appointment">
                      
                      <button type="submit" className="button-appointment-confirm" onClick={this.handleEmail}>Confirm</button>
                      </div>

                    </div>
                 </div>
            </div>
        </div>
      );
    }
  }

export default BookAppointment;
