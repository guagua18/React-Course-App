import './App.css'
import { useState } from 'react'

function TodoList() {
  const todos = [
    { id: 1, text: "Learn JSX"},
    { id: 2, text: "Understand props"},
    { id: 3, text: "Master state & events"}
  ];
  return (
    <div>
      <h1>My React Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

function App() {
  return (
    <TodoList />
  )
}

export default App
