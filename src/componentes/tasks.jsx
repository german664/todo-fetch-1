import React from "react";

const Tasks = (props) => {
  return props.tasks.map((el, index) => {
    return (
      <li key={"key_" + index}>
        {el.label}

        <i
          className={"far fa-trash-alt "}
          onClick={() => {
            props.deleteTask(index);
          }}
        ></i>
      </li>
    );
  });
};

export default Tasks;
