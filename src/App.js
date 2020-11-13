import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./redux/actions/counter";
import './scss/styles.scss'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import Counter from "./components/counter";
import Navbar from "./components/landingPage/Navbar";
import Footer from "./components/landingPage/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Counter />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
