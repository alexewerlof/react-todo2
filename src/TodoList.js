import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
    render() {

        return <div>
            <p>{this.props.items.length} items:</p>
            <ul>
                {this.props.items.map(item => TodoItem(item))}
            </ul>
        </div>;
    }
}