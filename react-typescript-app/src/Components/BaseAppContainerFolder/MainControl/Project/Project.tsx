import React, { useState } from 'react';
import './Project.css';
import { Note } from './Note';

export interface INote {
    id: string
    name: string
    notes: string
}

interface IProjectProps {

}

export function Project(props: IProjectProps) {

    const [notes, setNotes] = useState([{ id: crypto.randomUUID(), name: "Ежедневные заметки", notes: "notes 0" },
                                            { id: crypto.randomUUID(), name: "Идеи", notes: "notes 1" },
                                            { id: crypto.randomUUID(), name: "Долгосрочные покупки", notes: "notes 1" },
                                            { id: crypto.randomUUID(), name: "Важное", notes: "notes 1" }]);


    function addNote() {
        let newNote = { id: crypto.randomUUID(), name: "New header", notes: "new" };
        setNotes([...notes, newNote]);
    }


    function removeNote(id: string) {
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
