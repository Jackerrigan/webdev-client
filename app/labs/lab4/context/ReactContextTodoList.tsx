"use client";

import { useState } from "react";
import { useTodoContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodoContext();
  const [draft, setDraft] = useState("");
  return (
    <div id="wd-react-context-todo-list">
      <h3>Todo List</h3>
      <input
        id="wd-todo-input"
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        />
        <button 
          id="wd-add-todo"
          onClick={() => {
            if (!draft.trim()) return;
            addTodo(draft);
            setDraft("");
          }}
          >
            Add
          </button>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <input
                  value={todo.title}
                  onChange={(e) => updateTodo(todo.id, e.target.value)}
                  />
                  <button onClick={() => deleteTodo(todo.id)}>Delete</button>
              </li>
            ))}
          </ul>
      <hr />
    </div>
  );
}
