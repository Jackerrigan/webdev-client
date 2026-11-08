import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReduxTodoForm from "./ReduxTodoForm";
import ReduxTodoItem from "./ReduxTodoItem";
import type { RootState } from "./store";

export default function ReduxTodos() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Learn Mongo");
  const [editingId, setEditingId] = useState<string | null>(null);
  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>
      <ReduxTodoForm
        title={title}
        setTitle={setTitle}
        editingId={editingId}
        setEditingId={setEditingId}
      />
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
          >
            <ReduxTodoItem
              key={todo.id}
              todo={todo}
              onEdit={() => {
                setTitle(todo.title);
                setEditingId(todo.id);
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
