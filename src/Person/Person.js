import React from "react";
import Radium from "radium";
import "./Person.css";

const Person = ({ name, age, children, deleteName, nameChange }) => {
  const style = {
    "@media (min-width: 700px)": {
      backgroundColor: "orange",
      width: "450px",
      color: "blue",
    },
  };
  return (
    <div className="Person" style={style}>
      <p onClick={deleteName}>
        My name is {name} and I am {age} years old.
      </p>
      <p>{children}</p>
      <input type="text" onChange={nameChange} value={name} />
    </div>
  );
};

export default Radium(Person);
