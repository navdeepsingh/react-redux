import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import App from "./App";
import todoApp from "./reducers"
const store = createStore(todoApp)

import {
  addTodo,
  toggleTodo,
  setVisibilityFilter,
  VisibilityFilters
} from './actions'
// Log the initial state
console.log(store.getState())
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()))
// Dispatch some actions
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
// Stop listening to state updates
unsubscribe()

ReactDOM.render(<App />, document.getElementById('root'))