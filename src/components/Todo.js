import React, { Component } from 'react';

class Todo extends Component {
    render(){
        let { text , onClick , completed } = this.props;
        return (
            <li 
                style={{
                    listStyle:'none',
                    textDecoration : completed ? 'line-through' : 'none'
                }} 
                onClick={onClick}
            >
                {text}
            </li>
        )
    }
}
export default Todo;