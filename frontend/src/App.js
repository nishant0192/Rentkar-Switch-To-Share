import React from 'react';
import TodoList from './features/todos/TodoList';
import './index.css'

function App() {
  return (
    <div className="App">
      <h1 className='text-center font-bold text-[2rem]'>Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
