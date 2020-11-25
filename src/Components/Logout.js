import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/authLogout';

 class Logout extends Component {

    componentDidMount(){
        this.props.onLogout();
        localStorage.setItem('token', 'wwwwwwwwwwwwwwjskjfnnxm857849320109587648493')
    }

      onClick = (e) => {
          e.preventDefault()
          localStorage.removeItem('token');
          // redirect
          <Redirect to="/Home"/>

      };

    render() {
        
        return (
            <div>
              <button onClick={(e) => this.onClick(e)}>Logout</button>  

              <h3>Log out page</h3>
             
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(Logout);
