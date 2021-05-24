const RECEIVE_TODOS = "RECEIVE_TODOS";
const RECEIVE_TODO = "RECEIVE_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const receiveTodos = (todos) => {
    return {
        type: RECEIVE_TODOS, 
        todos 
    }
}
const receiveTodo = (todo) => ({
    type: RECEIVE_TODO, 
    todo
})

const removeTodo = (todo) => ({
    type: REMOVE_TODO, 
    todo
})

module.exports = {receiveTodos, RECEIVE_TODOS, receiveTodo, RECEIVE_TODO, removeTodo, REMOVE_TODO}
