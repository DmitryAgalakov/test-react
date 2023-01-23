import React from 'react';
import './CSS/TodoItemContainer.css'
import { TodoItem } from './TodoItem';


export function TodoItemContainer() {
    return (
        <div className='TodoItemContainer'>
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
                <TodoItem />
        </div>
    );
}

