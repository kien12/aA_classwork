import React from 'react'

class TodoForm extends React.Component{
    constructor(props){
        super(props);
        this.receiveTodo = this.props.receiveTodo; 
        this.state={
            id: Math.floor(Math.random() * 1000),
            title: "", 
            body: "",
            done: ""
        }
        this.updateTitle = this.updateTitle.bind(this); 
        this.updateBody = this.updateBody.bind(this); 
        this.updateDone = this.updateDone.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    updateTitle(e){
        // debugger; 
        this.setState(()=>{return {title:e.target.value}})
    }
    updateBody(e){
        this.setState(()=>{return {body: e.target.value}})
    }
    updateDone(e){
        this.setState(()=>{return {body: e.target.value}})
    }

    handleSubmit(e){
        e.preventDefault();
        const todo = Object.assign({}, this.state); 
        return this.receiveTodo(todo); 
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Todo</h4>
                    <label name="Title">Title:</label>
                        <input type="text" id="Title" value= {this.state.title}onChange={this.updateTitle}/>
                    <label name="Body">Body: </label> 
                        <input type="text" id="Body" onChange={this.updateBody}/>
                    <label name="Done">Done!</label>      
                        <input type="radio" id="Done" value="true" onChange={this.updateDone}/>  
                    <label name="Not Done">Not Done</label>   
                        <input type="radio" id="Not Done" value="false" onChange={this.updateDone}/>    
                    <input type="submit" value="add todo"/>        
                </form>
            </div>
        )
    } 
}

export default TodoForm 