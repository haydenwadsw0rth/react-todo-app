import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <TodoList />
      <p>Simply, type then press 'return' or click '+' to add to the todo list.</p>
    </div>
  );
}

export default App;
