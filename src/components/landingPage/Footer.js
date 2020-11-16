import React, { Component } from 'react'
import '../../style/landingPAge/search.scss';
import {Link} from "react-router-dom";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer_links">
                   <div className="footer_quick_link">
                   <Link to='/about' className="footer_links"> Abouts  </Link>
                   <Link to='/about' className="footer_links"> services  </Link>
                   <Link to='/about' className="footer_links"> Terms and Conditions </Link>
                   </div>
                   <div className="social-media">
                      <h4>Follows us on</h4>
                      <span><a href="#"><i className="fa fa-facebook"></i></a></span>&emsp;
                      <span><a href="#"><i className="fa fa-twitter"></i></a></span>&emsp;
                      <span><a href="#"><i className="fa fa-instagram"></i></a></span>&emsp;
                   </div>
                   <div className="address">
                      <h4>Contacts</h4>
                      <h5>+(250)787-423-277</h5>
                      <h5>phantom@gmail.com</h5>
                   </div>
                </div>
                <hr/>
            </div>
        )
    }
}