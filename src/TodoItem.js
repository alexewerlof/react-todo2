import React from 'react';

export default function TodoItem(props) {

    return <label>
        <input
            type="checkbox"
            checked={props.done}
            onChange={event => props.toggleDone(props.id)} />
        [{props.prio}] {props.title}
    </label>
}