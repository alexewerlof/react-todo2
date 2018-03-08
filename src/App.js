import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';

const todos = [
  {
      id: 'laskjdfl',
      prio: 2,
      done: false,
      title: 'Remember the milk',
  },
  {
      id: 'lassskjdfl',
      prio: 1,
      done: false,
      title: 'Turn on the computer',
  },
  {
      id: 'las23kjdfl',
      prio: 2,
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
