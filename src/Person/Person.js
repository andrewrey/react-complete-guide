import React from "react";
import classes from "./Person.css";
// import "./Person.css";
// import styled from "styled-components";

// const StyledDiv = styled.div`
//   width: 60%;
//   margin: 16px auto;
//   border: 1px solid #eee;
//   box-shadow: 0 2px 3px #ccc;
//   padding: 16px;
//   text-align: center;
//   color: white;
//   background-color: orange;
//   @media (min-width: 700px) {
//     background-color: purple;
//     width: 450px;
//     color: blue;
//   }
// `;

const Person = ({ name, age, children, deleteName, nameChange }) => {
  // const style = {
  //   "@media (min-width: 700px)": {
  //     backgroundColor: "orange",
  //     width: "450px",
  //     color: "blue",
  //   },
  // };

  return (
    // <div className="Person" style={style}>
    <div className={classes.Person}>
      <p onClick={deleteName}>
        My name is {name} and I am {age} years old.
      </p>
      <p>{children}</p>
      <input type="text" onChange={nameChange} value={name} />
    </div>
  );
};

export default Person;
