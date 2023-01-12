import React from "react";
import "./App.css";
import { Component } from "react";
import Dashboard from "./scenes/Dashboard/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Dashboard />
      </div>
    );
  }
}

export default App;
