import React, { useState } from 'react'

export default function Todo({
  todo,
  toggleComplete,
  deleteTodo,
  editTodo,
  isDeleting,
  deletedId,
}) {
  const [showEdit, setShowEdit] = useState(false)
  const [editInput, setEditInput] = useState(todo.task)

  const handleCheckbox = () => {
    toggleComplete(todo.id)
  }
  const handleDelete = () => {
    deleteTodo(todo.id)
  }

  const handleEdit = (e) => {
    setEditInput(e.target.value)
  }

  const handleShowEdit = () => {
    setShowEdit(!showEdit)
  }

  const handleUpdateTodo = () => {
    editTodo(todo.id, editInput)
    setShowEdit(!showEdit)
  }

  return (
    <div
      className={`todo-div${
        isDeleting && deletedId === todo.id ? ' todo-div-hide' : ''
      }`}
    >
      <input className="checkbox" type="checkbox" onClick={handleCheckbox} />
      {showEdit ? (
        <input
          className="todo-input-change"
          type="text"
          value={editInput}
          onChange={handleEdit}
        />
      ) : (
        <li
          onClick={handleUpdateTodo}
          className="todo-list"
          style={{
            opacity: todo.completed ? '0.5' : '1',
            textDecoration: todo.completed ? 'line-through' : null,
          }}
        >
          {todo.task}
        </li>
      )}
      <button className="remove-btn" onClick={handleDelete}>
        ╳
      </button>
      {showEdit ? (
        <button className="update-btn" onClick={handleUpdateTodo}>
          {' '}
          ✓{' '}
        </button>
      ) : (
        <button className="edit-btn" onClick={handleShowEdit}>
          ✎
        </button>
      )}
    </div>
  )
}
