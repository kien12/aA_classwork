const App = require('../components/todo/App') 
const {receiveTodo, receiveTodos, removeTodo} =  require('../actions/todo_actions')
const {addSteps} =  require('../actions/steps_actions')
const {allTodos} = require("../reducers/selectors")

window.App = App;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.removeTodo = removeTodo;
window.addSteps = addSteps;
window.allTodos = allTodos

//component
const wApp = window.App
//actions
const wreceiveTodo = window.receiveTodo
const wreceiveTodos = window.receiveTodos
const wremoveTodo = window.removeTodo
///selectors
const wallTodos = window.allTodos

module.exports = {wApp, wreceiveTodo, wreceiveTodos, wremoveTodo, wallTodos}