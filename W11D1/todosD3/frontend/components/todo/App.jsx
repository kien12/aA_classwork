import React from 'react';
import Root from '../root'
import TodoList from './todo_list';
import TodoListContainer from './todo_list_container'

export class App extends React.Component{
    constructor(props){
        super(props); 
    }

    render(){
        return (
            <div>
                <TodoListContainer/>
            </div>
        )
    }
}

export default App; 