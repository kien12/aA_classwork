import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';

export const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState, applyMiddleware(promiseMiddleware, thunk,logger));
} 

export default configureStore;