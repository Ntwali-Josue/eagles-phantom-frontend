import React, { Component } from "react";
import { Link } from "react-router-dom";
import 'react-fontawesome'

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer_info">
          <div className="footer_quick_link">
            <Link to="/about" className="footer_links">
              <b> About Us</b>{" "}
            </Link>
            <br />
            <br />
            <br />
            <Link to="/" className="footer_links">
              {" "}
              <b>Services</b>{" "}
            </Link>
            <br />
            <br />
            <br />
            <Link to="/" className="footer_links">
              {" "}
              <b>Terms of Use and Conditions</b>{" "}
            </Link>
            <br />
            <br />
          </div>
          <div className="social-medias">
            <h4>Follows us on:</h4>
            <br />
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
                <b> Facebook</b>
              </a>
            </li>
            &emsp;
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
                <b> Instagram</b>
              </a>
            </li>
            &emsp;
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
                <b> Twitter</b>
              </a>
            </li>
            &emsp;
          </div>
          <div className="address">
            <h4>Contact Us On:</h4>
            <h3>
              <a href="#">
                <i className="fa fa-phone"></i> +(250)788-620-444
              </a>
            </h3>
            <h3>
              <a href="#">
                <i className="fa fa-envelope"></i> phantom@gmail.com
              </a>
            </h3>
          </div>
        </div>
        <br />
        <br />
        <div className="copyright">
          <h4>©2020 Phantom. All Rights Reserved.</h4>
        </div>
      </div>
    );
  }
}
