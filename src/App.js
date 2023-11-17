import React, { useState } from "react";
import MyInput from "./Components/UI/Input/Input.jsx";
import "./styles/App.css";
import TaskListItem from "./Components/TaskListItem.jsx";
import TaskList from "./Components/TaskList.jsx";
import AddButton from "./Components/UI/AddButton/AddButton.jsx";
import classes from "./Components/UI/Input/Input.module.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, status: true, title: "Сделать уроки" },
    { id: 2, status: false, title: "Купить дом" },
  ]);
  const [title, SetTitle] = useState("");

  const addNewTask = () => {
    const newTask = {
      id: Date.now(),
      status: false,
      title,
    };
    setTasks([...tasks, newTask]);
    SetTitle("");
  };
  const removeTask = (task) => {
    setTasks(tasks.filter((p) => p.id !== task.id));
  };
  const switchStatus = (task) => {
    task.status = !task.status;
  };

  return (
    <div className="App">
      <div className={classes.InputStyle}>
        <MyInput value={title} onChange={(e) => SetTitle(e.target.value)} />
        <AddButton onClick={addNewTask} />
      </div>
      <TaskList status={switchStatus} remove={removeTask} tasks={tasks} />
    </div>
  );
}

export default App;
