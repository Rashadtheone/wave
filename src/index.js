import SC from 'soundcloud';
import React from 'react';
import ReactDOM from 'react-dom';
//added two seperate routes to handle data with soundcloud and the  store history.
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import { CLIENT_ID, REDIRECT_URI } from './constants/auth'
import Routes from './routes/routes';


//ACCES TO SOUNDCLOUD
SC.initialize({ client_id: CLIENT_ID, redirect_uri: REDIRECT_URI})



const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];


const store = configureStore();
// const history = syncHistoryWithStore(Routes, store);
store.dispatch(actions.setTracks(tracks));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);

module.hot.accept();
