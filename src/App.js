import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Andrew", age: 37 },
      { name: "Taby", age: 24 },
      { name: "Ryan", age: 33 },
    ],
  };
  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = "Mike";
    this.setState({
      persons: [
        { name: newName, age: 99 },
        { name: "Bobby", age: 83 },
        { name: "Timmy", age: 22 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler.bind(this, "Test1")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={() => this.switchNameHandler("Test2")}>
          My Hobbies: Racing
        </Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
