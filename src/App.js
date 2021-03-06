import React, { Component } from "react";
import classes from "./App.css";
import Person from "./Person/Person";
// import styled from "styled-components";
// import Radium from "radium";

class App extends Component {
  state = {
    persons: [
      { name: "Andrew", age: 37, id: 3 },
      { name: "Taby", age: 24, id: 2 },
      { name: "Ryan", age: 33, id: 1 },
    ],
    showPersons: false,
  };

  lastId = 3;

  idCreator = () => {
    let id = this.lastId;
    this.lastId += 1;
    return id;
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

  deleteNameHandler = (id) => {
    this.setState((prevState) => {
      return {
        persons: prevState.persons.filter((person) => person.id !== id),
      };
    });
  };
  nameChangeHandler = (event, id) => {
    let text = event.target.value;
    this.setState((prevState) => {
      return {
        persons: prevState.persons.map((person) => (person.id === id ? { ...person, name: text } : { ...person })),
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
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   boxShadow: "2px 2px 3px black",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };
    let btnClass = "";
    let persons = null;
    if (this.state.showPersons) {
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "lightpink",
      //   color: "black",
      // };
      btnClass = classes.Red;
      persons = (
        <div>
          {this.state.persons.map((person) => {
            return <Person key={person.id} name={person.name} age={person.age} deleteName={this.deleteNameHandler.bind(this, person.id)} nameChange={(e) => this.nameChangeHandler(e, person.id)} />;
          })}
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, "Tommy Boy")} changed={this.nameChangeHandler}>
            My Hobbies: Racing
          </Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> */}
        </div>
      );
    }
    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }

    if (this.state.persons.length < 2) {
      assignedClasses.push(classes.bold);
    }
    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(" ")}>This is really working!</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
