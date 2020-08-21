import React, { useState, useEffect } from "react";
import Tasks from "./componentes/tasks";
import Inputs from "./componentes/input";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState([]);

  const getTasks = async () => {
    try {
      const result = await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/german664"
      );
      const data = await result.json();
      if (data.msg) {
        postTasks();
      }
      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const postTasks = async () => {
    try {
      const result = await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/german664",
        {
          method: "POST",
          body: "[]",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await result.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTasks = async () => {
    try {
      const result = await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/german664",
        {
          method: "DELETE",
        }
      );
      const data = await result.json();
      console.log(data);
      setTasks([]);
      postTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const putTasks = async (newTask) => {
    try {
      const result = await fetch(
        "https://assets.breatheco.de/apis/fake/todos/user/german664",
        {
          method: "PUT",
          body: JSON.stringify(newTask),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await result.json();
      console.log(data);

      if (data.msg) {
        newTask = [{ label: "prueba", done: false }];
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = (index) => {
    tasks.splice(index, 1);
    setTasks([...tasks]);
    if (tasks.length < 1) {
      putTasks([{ label: "Agrega nueva tarea", done: false }]);
    }
  };

  /*  useEffect(() => {
    putTasks(newTasks);
  }, [newTasks]);
 */

  useEffect(() => {
    putTasks(tasks);
  }, [tasks]);
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className="inputs">
        <h2
          onClick={() => {
            console.log(tasks);
          }}
        >
          TO DO LIST
        </h2>
        <Inputs
          tasks={tasks}
          setTasks={setTasks}
          putTasks={putTasks}
          getTasks={getTasks}
        />
        <ul>
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              deleteTask={deleteTask}
              getTasks={getTasks}
              newTasks={newTasks}
              setTasks={setTasks}
              setNewTasks={setNewTasks}
            />
          ) : (
            <p>No hay tareas pendientes</p>
          )}
        </ul>
        {tasks.length > 0 ? (
          <button onClick={deleteTasks}>Borrar todo</button>
        ) : (
          ""
        )}
        <div>
          <p className="counter">{`Quedan ${tasks.length} tareas pendientes`}</p>
        </div>
      </div>
    </>
  );
}

export default App;
