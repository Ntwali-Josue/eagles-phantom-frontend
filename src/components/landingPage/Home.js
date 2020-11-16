import React, { Component } from 'react'
import NavBar from './Navbar';
import Purpose from './Purpose';
import Search from './Search';
import Patterns from './Patterns';
import Footer from './Footer';

export default class LandingPage extends Component {
    render() {
        return (
            <div>
              <NavBar />
              <Purpose />
              <Search />
              <Patterns />
              <Footer />
            </div>
        )
    }
}