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
    showPersons: false,
  };
  // switchNameHandler = (newName) => {
  //   // DON'T DO THIS: this.state.persons[0].name = "Mike";
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 99 },
  //       { name: "Bobby", age: 83 },
  //       { name: "Timmy", age: 22 },
  //     ],
  //   });
  // };

  deleteNameHandler = (name) => {
    this.setState((prevState) => {
      return {
        persons: prevState.persons.filter((person) => person.name !== name),
      };
    });
  };
  nameChangeHandler = (event, name) => {
    let text = event.target.value;
    this.setState((prevState) => {
      return {
        persons: prevState.persons.map((person) => (person.name === name ? { ...person, name: text } : { ...person })),
      };
    });
  };

  togglePersonsHandler = () => {
    this.setState((prevState) => {
      return {
        showPersons: !prevState.showPersons,
      };
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      boxShadow: "2px 2px 3px black",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person) => (
            <Person name={person.name} age={person.age} deleteName={this.deleteNameHandler.bind(this, person.name)} nameChange={(e) => this.nameChangeHandler(e, person.name)} />
          ))}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Tommy Boy")} changed={this.nameChangeHandler}>
            My Hobbies: Racing
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
