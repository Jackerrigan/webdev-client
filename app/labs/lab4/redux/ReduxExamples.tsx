"use client";
import { Provider } from "react-redux";
import AddRedux from "./AddRedux";
import CounterRedux from "./CounterRedux";
import HelloRedux from "./HelloRedux";
import ReduxTodos from "./ReduxTodos";
import { store } from "./store";

export default function ReduxExamples() {
  return (
    <Provider store={store}>
      <div id="wd-redux-examples">
        <h2>Redux Toolkit</h2>
        <HelloRedux />
        <CounterRedux />
        <AddRedux />
        <ReduxTodos />
        <hr />
      </div>
    </Provider>
  );
}
