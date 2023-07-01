import React, { useState } from 'react';
import './TodoItem.css'



export interface ITodoitem {
  id: number
  text: string
  isChecked: boolean
}



interface ITodoitemProps {
  todoitem: ITodoitem
  onRemoved: (i: number) => void
}



export function TodoItem(props: ITodoitemProps) {

  const [itemText, setItemText] = useState(props.todoitem.text);
  const [itemIsChecked, setItemIsChecked] = useState(props.todoitem.isChecked)

  function createItem(){

  }

  function removeItem(){
      
  }
  
  return (
    <div className='todoitem' >
      <input className='input-checkbox' type="checkbox"
        checked={itemIsChecked}
        onChange={event => setItemIsChecked(event.target.checked)} />

      <input className='input-text' type="text"
        value={itemText}
        onChange={event => setItemText(event.target.value)}/>

      <button className='remove-button' onClick={() => { props.onRemoved(props.todoitem.id) }}>Удалить</button>
    </div>

  );
}


