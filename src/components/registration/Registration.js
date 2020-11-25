import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import NavigationBar from "../../components/layouts/NavigationBar";

import { registrationAction } from '../../redux/actions/registrationAction';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      firstname: "",
      lastname: "",
      gender: "",
      address: "",
      role: "",
      emailError: "",
      firstnameError: "",
      lastnameError: "",
      genderError: "",
      addressError: "",
      roleError: "",
      emailErrorStatus: false,
      firstnameErrorStatus: false,
      lastnameErrorStatus: false,
      genderErrorStatus: false,
      addressErrorStatus: false,
      roleErrorStatus: false,
    };
  }

  validation = () => {
    let isError = false;

    const errors = {
      emailError: "",
      firstnameError: "",
      lastnameError: "",
      genderError: "",
      addressError: "",
      roleError: "",
      emailErrorStatus: false,
      firstnameErrorStatus: false,
      lastnameErrorStatus: false,
      genderErrorStatus: false,
      addressErrorStatus: false,
      roleErrorStatus: false,
    };

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailErrorStatus = true;
      errors.emailError = "Provide a valid email";
    }

    if (
      (this.state.password.length ||
        this.state.password.length ||
        this.state.password.length ||
        this.state.password.length ||
        this.state.password.length ||
        this.state.password.length) === 0
    ) {
      isError = true;
      errors.firstnameErrorStatus = true;
      errors.firstnameError =
        "The field is required and the characters must be greater than 4";
      errors.lastnameErrorStatus = true;
      errors.lastnameError =
        "The field is required and the characters must be greater than 4";
      errors.genderErrorStatus = true;
      errors.genderError =
        "The field is required and the characters must be greater than 4";
      errors.addressErrorStatus = true;
      errors.addressError =
        "The field is required and the characters must be greater than 4";
      errors.roleErrorStatus = true;
      errors.roleError =
        "The field is required and the characters must be greater than 4";
    }
    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };

  change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <NavigationBar />
        <div id="registration">
          <div id="form">
            <Form>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Example@email.com" name="email" required />
              <span style={{ color: "red" }}>{this.state.emailError}</span>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="first Name" name="firstname" required />
              <span style={{ color: "red" }}>{this.state.firstnameError}</span>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Last Name" name="lastname" required />
              <span style={{ color: "red" }}>{this.state.lastnameError}</span>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control  placeholder="Gender" name="gender" required />
              <span style={{ color: "red" }}>{this.state.genderError}</span>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Address</Form.Label>
                  <Form.Control placeholder="Address" name="address" required />
              <span style={{ color: "red" }}>{this.state.addressError}</span>
                </Form.Group>
              </Form.Row>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Role</Form.Label>
                  <Form.Control placeholder="Role" name="role" required />
              <span style={{ color: "red" }}>{this.state.roleError}</span>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control type="date" placeholder="Date of Birth" required />
                </Form.Group>
              </Form.Row>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    registrationState: state.registration,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registrationAction: (data) => dispatch(registrationAction(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);

