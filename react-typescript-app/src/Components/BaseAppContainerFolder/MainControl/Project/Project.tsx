import React, { useState } from 'react';
import './Project.css';
import { Note } from './Note';

export interface INote {
    id: number
    name: string
    notes: string
}

interface IProjectProps {

}

export function Project(props: IProjectProps) {

    const [notes, setNotes] = useState([{ id: 0, name: "Ежедневные заметки", notes: "notes 0" },
                                            { id: 1, name: "Идеи", notes: "notes 1" },
                                            { id: 2, name: "Долгосрочные покупки", notes: "notes 1" },
                                            { id: 3, name: "Важное", notes: "notes 1" }]);


    function addNote() {
        let newNote = { id: Date.now(), name: "New header", notes: "new" };
        setNotes([...notes, newNote]);
    }


    function removeNote(id: number) {
        let newNotes = notes.filter(t => t.id !== id);
        setNotes(newNotes);
    }


    return (
        <div className='Project'>
            {notes.map(item =>
                <Note note={item} onRemovedNote={removeNote} key={item.id} />)}

            <div className="Add-new-note-button-container">
                <button className='Add-new-note-button' onClick={addNote}> Добавить заметку </button>
            </div>
            
        </div>
    );
}
