import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// Redux 
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import AdminLayout from "layouts/Admin/Admin.jsx";
import Register from "views/Register.jsx";
import Login from "views/Login.jsx";
import reducers from './reducers'

import "assets/scss/black-dashboard-react.scss";
import "assets/demo/demo.css";
import "assets/css/nucleo-icons.css";

const history = createBrowserHistory()
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login} />
        
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
