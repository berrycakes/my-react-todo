import React from 'react'
import Todo from './Todo'

export default function TodoList({
  todos,
  toggleComplete,
  deleteTodo,
  editTodo,
}) {
  return (
    <ul className="todo-entries">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  )
}
