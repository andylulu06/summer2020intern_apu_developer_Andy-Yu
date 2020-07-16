import React, { Component } from 'react';
import './App.css';
import {Link} from "react-router-dom"; 
import DatePicker from "react-datepicker";

class SetAppointment extends React.Component{   
    
  constructor(props){
    super(props)
    this.state = {
      user:[
        {name:"Bryan",email:"abc123@gmail.com",date:"13/7/2020",time:"0900"},
        {name:"Million",email:"Million@gmail.com",date:"12/7/2020",time:"1200"},
        {name:"DingHan",email:"dinghan@gmail.com",date:"11/7/2020",time:"1100"},
      ]
    }
  }
    state={
        startDate: new Date()
      };
    
      handleChange = date =>{
        this.setState({
          startDate: date
        });
      };

      handleEmail(){
        alert("The slot added successfully");
      }
    
    tableData(){
      return this.state.user.map((user,index) => {
        const{name,email,date,time} = user 
        return(
          <tr key={name}>
            <td>{name}</td>
            <td>{email}</td>
            <td>{date}</td>
            <td>{time}</td>
          </tr>
        )
      })
    }

    tableheader(){
      let header = Object.keys(this.state.user[0])
      return header.map((key,index) => {
        return <th key={index}>{key.toUpperCase()}</th>
      })
    }

    render(){
    return (
        <div className="SetAppointment">
            <div className="first-container">
                <h3 className="customize-appointment">Add slot for Appointment</h3>

                <div className="customize-date">
                <h3 className="customize-select-date">Date:</h3> 
                <DatePicker selected={this.state.startDate}  className="customize-select-datepicker" onChange={this.handleChange}/>
                </div>

                <div className="customize-time">
                <h3 className="customize-select-time">Time:</h3>
                <select className="customize-select">
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

                <div className="button-customize">
                      
                    <button type="submit" className="button-customize-confirm" onClick={this.handleEmail}>Confirm</button>
                </div>
            </div>

            <div className = "second-container">
              <h3 className="data-header">Appointment</h3>
              <table id="user">
                <tbody>
                  <tr>{this.tableheader()}</tr>
                  {this.tableData()}
                </tbody>
              </table>
            </div>
        </div>
      );
    }
  }
export default SetAppointment;