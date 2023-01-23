import React from 'react';
import {useState, useEffect} from 'react'
import './CSS/TodoItem.css'
import axios from 'axios'

export function TodoItem() {
    let taskText: string = "Something task";
  return (

    <div className='TodoItem'>

      <h3 className='header'>Hello, world!</h3>

      <input className='input-checkbox' type="checkbox" />

      <input className='input-text' value={taskText}  type="text" />

      <button className='remove-button'>Remove</button>

      <button className='add-button' onClick={press}>Add</button>

      {/* <button className='add-button' onClick={()=> setCount(count + 1)}>Add</button> */}
      {/* <h2>Count = {count}</h2> */}
    </div>

  );
}

const press = function()
{
  axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      console.log(res);
    })
}



