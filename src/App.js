import React from 'react';
import TodoList from './todos/TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-background">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
