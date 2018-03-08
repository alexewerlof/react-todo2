import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

const todos = [
  {
      id: 'laskjdfl',
      done: false,
      title: 'Remember the milk',
  },
  {
      id: 'lassskjdfl',
      done: false,
      title: 'Turn on the computer',
  },
  {
      id: 'las23kjdfl',
      done: true,
      title: 'Hello world',
  },
];

class App extends Component {
  render() {
    return <div>
        List of todo items:
        <TodoList items={todos}></TodoList>
    </div>;
  }
}

export default App;
