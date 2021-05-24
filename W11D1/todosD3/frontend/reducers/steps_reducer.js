import {ADD_STEPS} from '../actions/steps_actions'

const initialState = {
    id: 1, 
    title: ":)",
    done: false 
}

export const stepsReducer = (state = initialState, action) => {
    Object.freeze(state); 
    let nextState = {};
    switch(action.type){
        default: 
            return state; 
    }
}

export default stepsReducer;