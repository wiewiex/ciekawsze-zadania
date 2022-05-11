import React, {Component} from "react";
import ReactDOM from "react-dom";
import ToDoList from "./ToDoList";

const App = () => <ToDoList />;

ReactDOM.render(<App/>, document.getElementById("app"));
