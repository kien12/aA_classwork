import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';
import Todo from './components/Todo'
import rootReducer from './reducers/root_reducer'; 
import {receiveTodo, receiveTodos, removeTodo} from './actions/todo_actions'

document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  window.store = store;
  ReactDOM.render(<Todo store={store}/>, document.getElementById('root'));
});

window.Todo = Todo;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.removeTodo = removeTodo;

// window.rootReducer = rootReducer;