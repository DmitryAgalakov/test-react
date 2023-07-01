import React, { useState } from 'react';
import './Note.css';
import { TodoItem } from './TodoItem';
import { INote } from './Project';
import axios from 'axios';

const dummyProject = {
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

interface INoteProps {
    note: INote,
    onRemovedNote: (i: string) => void,
}


export function Note(props: INoteProps) {

    const [todoItems, setTodoItems] = useState([{ id: crypto.randomUUID(), text: "", isChecked: false }]);

    function addTodoItem() {
        if (todoItems.length < 4) {
            let newTodoItem = { id: crypto.randomUUID(), text: "", isChecked: false };
            setTodoItems([...todoItems, newTodoItem]);
        }
    }

    function removeTodoItem(id: string) {
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
        axios.post(`https://localhost:7130/create`, createProject())
            .then(res => {
                console.log(res);
            })
    }

    function createProject(){
        let newProject = dummyProject;
        newProject.id = crypto.randomUUID();
        newProject.notes[0].id = crypto.randomUUID();
        newProject.notes[0].todoitems[0].id = crypto.randomUUID();
        return newProject;
    }

    return (
        <div className='Note'>
            <h3 className='header'>{props.note.name}</h3>

            {todoItems.map(item =>
                <TodoItem key={item.id} todoitem={item} onRemoveTodoitemById={removeTodoItem} />)}

            <button className='add-button'
             onClick={addTodoItem}>
                Добавить</button>

            <button className='remove-note-button'
             onClick={() => props.onRemovedNote(props.note.id)}>
                Удалить список</button>

            <button className='remove-note-button'
             onClick={sendGet}>
                Гет запрос</button>

            <button className='remove-note-button'
             onClick={sendPost}>
                Пост запрос</button>

        </div>
    );
}
