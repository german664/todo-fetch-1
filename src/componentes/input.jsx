import React from "react";

const Inputs = (props) => {
  return (
    <input
      placeholder="Ingresa tarea nueva"
      onKeyDown={(e) => {
        let value = e.target.value;
        if (e.keyCode === 13 && value !== "") {
          props.setTasks((prevState) => {
            return [...prevState, { label: value, done: false }];
          });
          e.target.value = "";
        }
      }}
    />
  );
};

export default Inputs;
