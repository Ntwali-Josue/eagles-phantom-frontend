import React, { Component } from "react";
import { connect } from "react-redux";
import{ BrowserRouter, Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import * as actions from "./redux/actions/authLogout";
import UserLogout  from "./Components/Logout";
import Home from "./Components/Home"
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>

        <Navbar/>
        <Route exact path='/' component ={UserLogout} />
        <Route path='/Home' component ={Home} />
        
        {/* <UserLogout/>
        <h1>Hello!! Welcome to phantom App.</h1>
        <h2>The following is the counter of number.</h2>
        <h3 id="value" aria-label="value" >value: {this.props.value}</h3>
        <button id="incrementButton" aria-label="incrementButton" name="increment" onClick={this.props.increment}>Increment</button>
        <button id="decrementButton" aria-label="decrementButton" name="decrement" onClick={this.props.decrement}>decrement</button> */}
      </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    logoutState: state.UserLogout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
