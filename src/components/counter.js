import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions/counter";

class Counter extends Component {
  render() {
    return (
      <div>
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
    increment: () => dispatch(actions.increment()),
    decrement: () => dispatch(actions.decrement()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
