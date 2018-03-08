import React, { Component } from 'react';
import './App.css';
import TodoList from './TodoList';
import NewItem from './NewItem';

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

    constructor(props) {
        super(props);
        this.state = {
            todos
        }
    }

    addTodoItem = (title) => {
        console.log('submitted', title)
        this.state.todos.push({
            id: String(Math.random()),
            prio: Math.round(Math.random() * 3),
            done: Math.random() > 0.5,
            title
        })
        this.setState({
            todos: this.state.todos
        });
    }

    render() {
        return <div>
            List of todo items:
            <TodoList items={this.state.todos}></TodoList>
            <NewItem submit={this.addTodoItem} />
        </div>;
    }
}

export default App;
