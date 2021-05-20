import {createStore} from 'redux';
import rootReducer from '../reducers/root_reducer';
import {receiveTodo, receiveTodos} from '../actions/todo_actions'

export const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer, preloadedState);
} 

window.rootReducer = rootReducer;
export default configureStore;