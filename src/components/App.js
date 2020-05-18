import React, { Component } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

class App extends Component{
  render() {
    return (
      <div style={{textAlign:'center'}}>
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    );
  }
}
export default App;
