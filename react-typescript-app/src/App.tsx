import React from 'react';
import './CSS/App.css';

function App() {
  return (
    <div className="App">
      <TodoItem/>
    </div>
  );
}

function TodoItem(){
  return(
    <h1>Hello, world!</h1>
  );
}

export default App;
