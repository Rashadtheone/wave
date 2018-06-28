import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Home from './components/App/index'

class Routes extends Component {
    render() {
      return (
        <div className="App">
            <Route exact path="./components/App/index" render={() => (<Home />)} />
            <Route exact path="./components/App/index" render={() => (<Home />)} />
            <Route path="/*" render={() => (<Redirect to="./components/App/index" />)} />
        </div>
      );
    }
  }
  
  export default Routes;