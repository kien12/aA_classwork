import React from "react"
import TodoForm from './todo_form'

export class TodoList extends React.Component{
    constructor (props) {
        super(props); 
    }

    render () {
        const todoArr = this.props.todos.map((todo,idx) => {
            return <li key={idx}>{todo.title}</li>
        })
        return (
            <div>
                <ul>
                    {todoArr}
                </ul>
                <TodoForm receiveTodo={this.props.receiveTodo} />
            </div>
        )
    }
}

export default TodoList