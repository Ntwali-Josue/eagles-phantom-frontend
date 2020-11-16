import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import Skeleton from 'react-loading-skeleton';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


ReactDOM.render(
    <BrowserRouter>
    <Provider store={store} >
    <App />
    </Provider>
    </BrowserRouter>, document.getElementById('root'));

module.hot.accept();

