import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "./redux/actions/authLogout";
import UserLogout  from "./Components/Logout/Logout"
class App extends Component {
  render() {
    return (
      <div>
        <UserLogout/>
        <h1>Hello!! Welcome to phantom App.</h1>
        <h2>The following is the counter of number.</h2>
        <h3 id="value" aria-label="value" >value: {this.props.value}</h3>
        <button id="incrementButton" aria-label="incrementButton" name="increment" onClick={this.props.increment}>Increment</button>
        <button id="decrementButton" aria-label="decrementButton" name="decrement" onClick={this.props.decrement}>decrement</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.count.value,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
