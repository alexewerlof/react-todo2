import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
            items: props.items
        }
    }

    toggleDone = (id) => {
        const item = this.state.items.find(i => i.id === id);
        if (item) {
            item.done = !item.done;
            this.setState({ items: this.state.items })
            console.log(item)
        } else {
            console.log('no item with id', id)
        }
    }

    render() {

        const listOfItems = this.state.items
            .sort((itemA, itemB) => itemA.prio - itemB.prio)
            .map(item => <li key={item.id}>
            <TodoItem toggleDone={this.toggleDone} {...item} />
        </li>)

        return <div>
            <p>{this.state.items.length} items:</p>
            <ul>
                {listOfItems}
            </ul>
        </div>;
    }
}