import React, { Component } from 'react'

class AddObj extends Component {
    //add state
    state = {
        content: '' // if i did not state the content the new todo will not show on screen

    }
    handleChange =  (e) => {
        // update any change inside the content
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit =(e) => {
        e.preventDefault();
        // console.log(this.state)
        this.props.addObj(this.state)
        this.setState({ content: ''}) //empty the text after adding content
        // see more in the render bucket
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
              
                    <label><b>Add new todo: </b></label>
                    <input type=" blue-text" onChange={this.handleChange} value={this.state.content} /> 
               
                </form>
            
            </div>
        )
    }
}export default AddObj