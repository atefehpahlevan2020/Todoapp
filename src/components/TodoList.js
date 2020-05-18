import React, { Component } from 'react';
import Todo from './Todo';
import { connect } from 'react-redux';
import { toggleTodo } from './../actions';
import { SHOW_ALL , SHOW_ACTIVE , SHOW_COMPLETED } from './../actions/actionType';

class TodoList extends Component{
    render() {
        let { todos , toggleTodo } = this.props;
        return (
            <div className="jumbotron">
                <h3 className="display-5">TODO List</h3>
                <hr className="my-4"/>
                <ul>
                    {todos.map(todo => <Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}/>)}
                </ul>
            </div>
        )
    }
}

const getVisibleTodo = (todos , filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_ACTIVE:
            return todos.filter(t => ! t.completed)
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => {
    return {
        todos : getVisibleTodo(state.todos , state.visibilityFilter)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleTodo : id => dispatch(toggleTodo(id))
    }
}

export default connect(mapStateToProps , mapDispatchToProps)(TodoList);