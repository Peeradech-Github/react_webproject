import React, { Component } from 'react';
import Todos from './Todos'
import AddObj from './AddObj'


class App extends Component {
  state = {
    todos: [
      { id: 0, content: 'Robotics awesome' },
      { id: 2, content: 'I am joining Robotics Club' },
      { id: 1, content: 'I am the hero' }
        
    ]

  }
  // create function here
 
  deleteTodo = (id) => {
    // console.log(id);
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id //return true if not. false to remove
    });
    this.setState({
      todos
    })
  }
  addObj =(todo) => {
    //call function from AddObj
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]; // create an array inside the array from "todos"
    this.setState({
      todos
    })
  }
  
  render() {
    
    return (
     
      <div className="todo-app container, blue-text style center"> 
        <h3 className="center">My To Do List </h3>
        <AddObj addObj={this.addObj}/>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
       
      </div>
    );
  }

}

export default App;
