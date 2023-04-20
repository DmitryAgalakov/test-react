import React, { useState } from 'react';
import './CSS/Tablet.css';
import { TodoItem } from './TodoItem';
import { ITablet } from './TabletBox';
import axios from 'axios';

const proj = {
    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    name: "project name",
    notes: [
        {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            name: "note name",
            status: 0,
            projectId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            todoitems: [
                {
                    id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
                    name: "todoitem name",
                    text: "todoitem text",
                    isComplete: false,
                    noteId: "3fa85f64-5717-4562-b3fc-2c963f66afa6"
                }
            ]
        }
    ]
}

interface ITabletProps {
    tablet: ITablet,
    onRemovedTablet: (i: number) => void,
}


export function Tablet(props: ITabletProps) {

    const [todoItems, setTodoItems] = useState([{ id: Date.now(), text: "", isChecked: false }]);

    function addTodoItem() {
        if (todoItems.length < 4) {
            let newTodoItem = { id: Date.now(), text: "", isChecked: false };
            setTodoItems([...todoItems, newTodoItem]);
        }
    }

    function removeTodoItem(id: number) {
        let newTodoItems = todoItems.filter(i => i.id !== id);
        setTodoItems(newTodoItems);
    }

    function sendGet() {
        axios.get(`https://localhost:7130/read/11f1a188-249b-4d15-bf26-be0ce10d57c7`)
            .then(res => {
                console.log(res.data);
            })
    }

    function sendPost() {
        axios.post(`https://localhost:7130/create`, proj)
            .then(res => {
                console.log(res);
            })
    }

    return (
        <div className='Tablet'>
            <h3 className='header'>{props.tablet.name}</h3>

            {todoItems.map(item =>
                <TodoItem key={item.id} todoitem={item} onRemoved={removeTodoItem} />)}

            <button className='add-button'
             onClick={addTodoItem}>
                Добавить</button>

            <button className='remove-tablet-button'
             onClick={() => props.onRemovedTablet(props.tablet.id)}>
                Удалить список</button>

            <button className='remove-tablet-button'
             onClick={sendGet}>
                Гет запрос</button>

            <button className='remove-tablet-button'
             onClick={sendPost}>
                Пост запрос</button>

        </div>
    );
}
