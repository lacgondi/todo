import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from "./Components/TodoItem";
import {List} from "@mui/material";
import TodoList from "./Components/TodoList";

function App() {
  return (
    <div className="App">
      <TodoList/>
    </div>
  );
}

export default App;
