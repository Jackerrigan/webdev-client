"use client";

import {
  createContext,
  createElement,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type Todo = { id: string; title: string };

type TodoContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
};

const TodoContext = createContext<TodoContextValue | null>(null);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "make a list" },
    { id: "2", title: "cry" },
  ]);

  const addTodo = (title: string) =>
    setTodos([...todos, { id: crypto.randomUUID(), title }]);

  const updateTodo = (id: string, title: string) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, title } : t)));

  const deleteTodo = (id: string) => setTodos(todos.filter((t) => t.id !== id));

  return createElement(
    TodoContext.Provider,
    { value: { todos, addTodo, updateTodo, deleteTodo } },
    children
  );
}

export function useTodoContext() {
  const value = useContext(TodoContext);
  if (!value) {
    throw new Error("useTodoContext must be used inside TodoProvider");
  }
  return value;
}
