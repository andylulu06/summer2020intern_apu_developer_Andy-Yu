import React,{Component} from 'react';
import './App.css';
import  {BrowserRouter as Router, Switch,Route,Link} from "react-router-dom" 
import axios from "axios";
import User from "./User";
import Organizer from "./Organizer";
import BookAppointment from "./BookAppointment";
import SetAppointment from "./SetAppointment";

class App extends React.Component{

  render(){
    return (
      <Router>
        <Switch>
          <Route path = "/user"><User/></Route>
          <Route path = "/organizer"><Organizer/></Route>
          <Route path = "/bookappointment"><BookAppointment/></Route>
          <Route path = "/setappointment"><SetAppointment/></Route>

          <div className="App">
            <div className="box-text"><h3>Sign up as...</h3>  
            </div>

              <Link to="/user" className="User-button">user</Link>

              <Link to="/organizer" className="Organizer-button">Organizer</Link>
        </div>

        </Switch>
      </Router>
    );
  }
}
export default App;
