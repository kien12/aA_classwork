import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from '../actions/todo_actions'

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

export const todosReducer = (state = initialState, action) => { 
    Object.freeze(state);
    let nextState = {};
    switch(action.type){
        case RECEIVE_TODOS:
            action.todos.forEach((ele)=>{
                nextState[ele.id] = ele; 
            })
            return nextState; 
        case RECEIVE_TODO: 
            let newTodo = {[action.todo.id]: action.todo}; 
            return Object.assign({}, newTodo, state); 
        case REMOVE_TODO: 
            let prevState = Object.assign({}, state); 
            let deleteTodo = action.todo.id; 
            // debugger; 
            let newState = delete prevState[deleteTodo];
            return newState;           
        default: 
            return state; 
    }
}

export default todosReducer
