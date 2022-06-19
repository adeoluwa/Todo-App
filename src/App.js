import React from 'react';

import './css/main.css';

import Todo from './components/Todo';

import DisplayTodos from './components/DisplayTodos';

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <Todo />
      <DisplayTodos />
    </div>
  );
}

export default App;
