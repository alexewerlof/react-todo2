import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {


    toggleDone = (id) => {
        const item = this.props.items.find(i => i.id === id);
        if (item) {
            item.done = !item.done;
            console.log(item)
        } else {
            console.log('no item with id', id)
        }
    }

    render() {

        const listOfItems = this.props.items.map(item => <li key={item.id}>
            <TodoItem toggleDone={this.toggleDone} {...item} />
        </li>)

        return <div>
            <p>{this.props.items.length} items:</p>
            <ul>
                {listOfItems}
            </ul>
        </div>;
    }
}