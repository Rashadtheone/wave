import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import SC from 'soundcloud';
import App from '../components/App/index';
import Callback from '../components/Callback';
import Stream from '../components/Stream';
import { CLIENT_ID, REDIRECT_URI } from '../constants/auth';

SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI });



class Routes extends Component {
    render() {
      return (
        <Route path="/" component={App}>
        <Route exact path = "/" component={Stream} />x
        <Route path="/" component={Stream} />
        <Route path="/callback" component={Callback} />
      </Route>
      );
    }
  }
  
  export default Routes;