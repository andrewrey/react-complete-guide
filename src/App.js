import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name="Tom" age="19" />
        <Person name="Andrew" age="37">
          My Hobbies: Racing
        </Person>
        <Person name="Sarah" age="25" />
      </div>
    );
  }
}

export default App;
