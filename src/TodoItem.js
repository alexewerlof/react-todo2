import React from 'react';

export default function TodoItem(props) {
    return <li key={props.id}>
        <label>
            <input type="checkbox" checked={props.done} />
            {props.title}
        </label>
    </li>
}