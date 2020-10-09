import React from "react";
import "./Person.css";

const Person = ({ name, age, children, click, changed }) => {
  return (
    <div className="Person">
      <p onClick={click}>
        My name is {name} and I am {age} years old.
      </p>
      <p>{children}</p>
      <input type="text" onChange={changed} value={name} />
    </div>
  );
};

export default Person;
