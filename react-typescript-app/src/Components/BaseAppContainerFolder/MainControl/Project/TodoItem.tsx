import React, { useState } from 'react';
import './TodoItem.css'



export interface ITodoitem {
  id: string
  text: string
  isChecked: boolean
}



interface ITodoitemProps {
  todoitem: ITodoitem
  onRemoveTodoitemById: (i: string) => void
}



export function TodoItem(props: ITodoitemProps) {

  const [itemText, setItemText] = useState(props.todoitem.text);
  const [itemIsChecked, setItemIsChecked] = useState(props.todoitem.isChecked)

  function removeTodoitemById(){
      props.onRemoveTodoitemById(props.todoitem.id);
  }
  
  return (
    <div className='todoitem' >
      <input className='input-checkbox' type="checkbox"
             checked={itemIsChecked}
             onChange={event => setItemIsChecked(event.target.checked)} />

      <input className='input-text' type="text"
             value={itemText}
             onChange={event => setItemText(event.target.value)}/>

      <button className='remove-button'
              onClick={removeTodoitemById}>
              Удалить</button>
    </div>
  );


}


