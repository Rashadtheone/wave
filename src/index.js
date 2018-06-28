import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import Stream from './components/Stream';


const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];
//Holds global state
const store = configureStore();
store.dispatch(actions.setTracks(tracks));
//adding the provider connects react and redux to one another
ReactDOM.render(
    <Provider store={store}>
    <Stream />
  </Provider>,
  document.getElementById('root')
);

module.hot.accept();
