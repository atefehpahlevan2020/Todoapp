import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from './../actions';

class AddTodo extends Component{
    state = {
        inputText : ''
    }
    handleChange = (event) => {
        this.setState({
            inputText : event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch(addTodo(this.state.inputText))
        this.setState({
            inputText : ''
        })
    }
    render() {
        return (
            <div className="jumbotron">
                <h3 className="display-5">TODOS</h3>
                <hr className="my-4"/>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.inputText} onChange={this.handleChange}/>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="submit" className="btn btn-primary">Add Todo LIST</button>
                </form>
            </div>
        )
    }
}
export default connect()(AddTodo);
