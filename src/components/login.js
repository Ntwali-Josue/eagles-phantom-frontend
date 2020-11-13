import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from "../redux/actions/loginAction";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailErrorStatus: "",
      passwordErrorStatus: "",
    };
  }
  validate = () => {
    let isError = false;
    const error = {
      emailError: "",
      passwordError: "",
      emailErrorStatus: "",
      passwordErrorStatus: "",
    };
    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      error.emailErrorStatus = true;
      error.emailError = "Provide a valid email";
    }
    if (this.state.password.length == 0) {
      isError = true;
      error.passwordErrorStatus = true;
      error.passwordError = "Provide a password";
    }
    this.setState({
      ...this.setState,
      ...error,
    });
    return isError;
  };
  onSubmit = async (e) => {
    e.preventDefault();
    const error = this.validate();
    if (!error) {
      const data = {
        email: this.state.email,
        password: this.state.password,
      };
      await this.props.loginAction(data);
    } else {
      console.log("you have an error", this.state);
    }
  };
  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="login">
        {/* <p
          id="loading"
          style={{ color: "green", display: this.props.loginState.loading }}
        >
          loading...
        </p> */}
        <form onSubmit={(e) => this.onSubmit(e)}>
          <h1>Log in</h1> <br />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => this.change(e)}
          />
          <br />
          <span style={{ color: "#fff" }}>{this.state.emailError}</span>
          <br /> <br />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => this.change(e)}
          />
          <br />
          <span style={{ color: "#fff" }}>{this.state.passwordError}</span>
          <br />
          <br />
          <input type="submit" value="LOGIN" className="login-btn" />
          <br />
          <br />
          <a href="">Forgot Password?</a>
          <br />
          <br />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginState: state.login,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (data) => dispatch(loginAction(data)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
