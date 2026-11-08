"use client";

import ContextCounterRead from "./ContextCounterRead";
import ContextCounterWrite from "./ContextCounterWrite";
import { CounterProvider } from "./CounterContext";
import ContextProfileForm from "./ContextProfileForm";
import ReactContextTodoList from "./ReactContextTodoList";
import { TodoProvider } from "./todosContext";

export default function ContextExamples() {
  return (
    <div id="wd-context-examples">
      <h2>React Context</h2>
      <p>
        Two siblings share one counter without the parent passing props through
        the middle.
      </p>
      <CounterProvider>
        <ContextCounterRead />
        <ContextCounterWrite />
      </CounterProvider>
      <TodoProvider>
        <ReactContextTodoList />
      </TodoProvider>
      <ContextProfileForm />
      <hr />
    </div>
  );
}
