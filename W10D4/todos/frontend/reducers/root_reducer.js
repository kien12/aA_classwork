import { combineReducers } from 'redux';
import {todosReducer} from './todos_reducer'
import {RECEIVE_TODO, RECEIVE_TODOS} from './todos_reducer'
export const rootReducer = combineReducers({
    todos: todosReducer
})

export default rootReducer