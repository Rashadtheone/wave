import SC from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
//added two seperate routes to handle data with soundcloud and the  store history.
import { BrowserRouter as Router } from 'react-router-dom';
import { Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import Callback from './components/Callback'
import Stream from './components/Stream';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth'

//ACCES TO SOUNDCLOUD
SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI})

const store = configureStore();
const history = syncHistoryWithStore(Router, store);

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];
//Holds global state

store.dispatch(actions.setTracks(tracks));


//adding the provider connects react and redux to one another
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
        <Route exact component = {App} />
        <Route exact component={Stream} />
            <Route path="/" component={Stream} />
            <Route path="callback" component={Callback}/>
          
        </Router>
  </Provider>,
  document.getElementById('root')
);

module.hot.accept();
