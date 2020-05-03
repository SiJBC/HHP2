import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
// import { Button } from 'reactstrap';

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/Footer"
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Form from "./components/Form"
import "./App.css";
import HeadachePharmForm from "./components/Form/HeadachePharmForm"
import HeadacheNoPharmForm from "./components/Form/HeadacheNoPharmForm"
import AlzheimersNoPharmForm from "./components/Form/AlzheimersNoPharmForm"
import AlzheimersPharmForm from "./components/Form/AlzheimersPharmForm"
import BackProblemsPharmForm from "./components/Form/BackProblemsPharmForm"
import BackProblemsNoPharmForm from "./components/Form/BackProblemsNoPharmForm"
import DiabetesPharmForm from "./components/Form/DiabetesPharmForm"
import DiabetesNoPharmForm from "./components/Form/DiabetesNoPharmForm"
import JointPainsPharmForm from "./components/Form/JointPainsPharmForm"
import JointPainsNoPharmForm from "./components/Form/JointPainsNoPharmForm"
import SkinDisordersNoPharmForm from "./components/Form/SkinDisordersNoPharmForm"
import SkinDisordersPharmForm from "./components/Form/SkinDisordersPharmForm"
import Headache from "./components/Headache"
import Backpain from "./components/Backpain"
import Alzheimers from "./components/Alzheimers"
import Diabetes from "./components/Diabetes"


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path ="/Form" component ={Form} />
            <Route exact path ="/headache" component = {Headache} />
            <Route exact path ="/backpain" component = {Backpain} />
            <Route exact path = "/alzheimers" component = {Alzheimers} />
            <Route exact path = "/diabetes" component = {Diabetes} />
           
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              {/* <AilmentForms/> */}
              <Route exact path = "/dashboard/Headachepharmform" component ={HeadachePharmForm} />
              <Route exact path = "/dashboard/Headachenopharmform" component ={HeadacheNoPharmForm} />
              <Route exact path = "/dashboard/Alzheimersnopharmform" component ={AlzheimersNoPharmForm} />
              <Route exact path = "/dashboard/Alzheimerspharmform" component ={AlzheimersPharmForm} />
              <Route exact path = "/dashboard/Backproblemspharmform" component = {BackProblemsPharmForm} />
              <Route exact path = "/dashboard/Backproblemsnopharmform" component = {BackProblemsNoPharmForm} />
              <Route exact path = "/dashboard/Diabetespharmform" component ={DiabetesPharmForm} />
              <Route exact path = "/dashboard/Diabetesnopharmform" component ={DiabetesNoPharmForm} />
              <Route exact path = "/dashboard/Jointpainspharmform" component ={JointPainsPharmForm} />
              <Route exact path = "/dashboard/Jointpainsnopharmform" component ={JointPainsNoPharmForm} />
              <Route exact path = "/dashboard/Skindisordersnopharmform" component ={SkinDisordersNoPharmForm} />
              <Route exact path = "/dashboard/Skindisorderspharmform" component ={SkinDisordersPharmForm} />
              
            </Switch>
            <Footer />
          </div>

        </Router>

      </Provider>
    );
  }
}
export default App;
