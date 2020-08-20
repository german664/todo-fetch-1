import React, { useState } from "react";
import Tasks from "./componentes/tasks";
import Inputs from "./componentes/input";

function App() {
  const [tasks, setTasks] = useState([]);
  const deleteTask = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };
  return (
    <>
      <div className="inputs">
        <h2>TO DO LIST</h2>
        <Inputs tasks={tasks} setTasks={setTasks} />
        <ul>
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} deleteTask={deleteTask} />
          ) : (
            <p>No hay tareas pendientes</p>
          )}
        </ul>
        <div>
          <p className="counter">{`Quedan ${tasks.length} tareas pendientes`}</p>
        </div>
      </div>
    </>
  );
}

export default App;
