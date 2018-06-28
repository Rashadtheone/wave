import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';
import track from './tracks';

export default combineReducers({
    track,
    routing: routerReducer
})

//creates combinerecords allows us to use multiple reducers without continuesly changing the global state
//it returns a modified substate to be returned 

//state.track.tracks will handle all track states in the future.