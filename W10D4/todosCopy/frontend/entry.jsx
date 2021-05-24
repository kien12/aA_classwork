import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from '../frontend/store/store';
import Root from './components/root' 
import * as w from './util/windowConsts'

document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  window.store = store; 
  window.w = w
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
 