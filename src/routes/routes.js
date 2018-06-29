import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SC from 'soundcloud';
import App from '../components/App/';
import Stream from '../components/Stream/index';
import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';
import Callback from '../components/Callback/index';

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });



class Routes extends Component {
    render() {
      return (
        <Switch>
        <Route exact path="/app" render={() => (<App />)}/>
        <Route path="/stream" render={() => (<Stream />)} />
        <Route path="/callback" render={() => (<Callback />)} />
        </Switch>
      );
    }
  }
  
  export default Routes;