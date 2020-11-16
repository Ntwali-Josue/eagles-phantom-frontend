// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h2>The following is the counter of number.</h2>
//         <h3 id="value" aria-label="value" >value: {this.props.value}</h3>
//         <button id="incrementButton" aria-label="incrementButton" name="increment" onClick={this.props.increment}>Increment</button>
//         <button id="decrementButton" aria-label="decrementButton" name="decrement" onClick={this.props.decrement}>decrement</button>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     value: state.count.value,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch(actions.increment()),
//     decrement: () => dispatch(actions.decrement()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/landingPage/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Error from './components/Error';


class App extends Component{
    render(){
        return (
            <div>
              <Switch>
                  <Route  path='/' component={Home} exact />
                  <Route path='/about' component={AboutUs}/>
                  <Route path='/contact' component={ContactUs} />
                  <Route path='/login' component={Login}/>
                  <Route component={Error}/>
              </Switch>
            </div>
        );
    };
}
export default App;

