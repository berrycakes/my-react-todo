import React, { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const [isDeleting, setIsDeleting] = useState(false)

  const addTodo = (todo) => {
    setTodos((currentTodos) => [todo, ...currentTodos])
  }
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const deleteTodo = (id) => {
    setIsDeleting(!isDeleting)
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id, newTask) => {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, task: newTask }
        }
        return todo
      })
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="main-div">
          <h1>todo list</h1>
          <TodoForm addTodo={addTodo} todos={todos} />
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            isDeleting={isDeleting}
          />
        </div>
      </header>
    </div>
  )
}

export default App
