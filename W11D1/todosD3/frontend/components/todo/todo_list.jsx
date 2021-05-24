import React from "react"
import TodoForm from './todo_form'

export class TodoList extends React.Component{
    constructor (props) {
        super(props); 
        this.handleDelete = this.handleDelete.bind(this); 
        this.handleUndo = this.handleUndo.bind(this); 
    }

    keyGen(){
        return Math.floor(Math.random()*1000)
    }

    handleDelete(e){
        e.preventDefault(); 
        const todo = this.props.todos[e.target.name] 
        return this.props.removeTodo(todo); 
    }

    flipDone(todo){
        todo.done = (todo.done === true ? todo.done=false : todo.done = true); 
        return todo  
    }

    handleUndo(e){
        e.preventDefault(); 
        const todo = this.props.todos[e.target.name] 
        return this.props.receiveTodo(this.flipDone(todo)); 
    }

    showStatus(todo){
        if (todo.done === true){
            return "Done"
        } else {
            return "Undo"
        }
    }

    render () {
        const todoArr = this.props.todos.map((todo,idx) => {
            return (
                <div key={todo.id} className="todo-item">
                    <li key={`${todo.id}.title`}>{todo.title}</li>
                    <input className= "delete-todo"name={idx} type="submit" onClick={this.handleDelete} value="Delete"/>
                    <input className="flip-todo" name ={idx} type="button" onClick={this.handleUndo} value={this.showStatus(todo)}/>
                </div>
            )
        })
        return (
            <div className="todos-parent">
                <ul className="todo-list">
                    {todoArr}
                </ul>
                <TodoForm receiveTodo={this.props.receiveTodo} />
            </div>
        )
    }
}

export default TodoList