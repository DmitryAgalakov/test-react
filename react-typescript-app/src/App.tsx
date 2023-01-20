import React from 'react';
import './CSS/App.css';
import { TodoItem } from './TodoItem';

function App() {
  return (
    <div className="App">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
  );
}

export default App;
