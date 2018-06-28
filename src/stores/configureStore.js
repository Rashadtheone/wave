import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/index';
import {createLogger} from 'redux-logger';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(logger)(createStore);

export default function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}

//createStore function take the rootReducers an initial state
//redux allows the use of middleware to do something between dispatching an action and the moment it reaches the reducer.

