import React, { useState } from 'react'

export default function TodoForm({ addTodo, todos }) {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  })

  const handleChangeInput = (e) => {
    setTodo({
      ...todo,
      task: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo.task.trim()) {
      addTodo({ ...todo, id: todos.length })
      setTodo({ ...todo, task: '' })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="task"
        className="todo-input"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleChangeInput}
      />
      <button type="submit" className="add-btn">
        +
      </button>
    </form>
  )
}
