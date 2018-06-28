// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './stores/configureStore';
import * actions from './actions';
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

ReactDOM.render(
  <Stream />,
  document.getElementById('root')
);

module.hot.accept();
