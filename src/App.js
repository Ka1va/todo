import React, { useState } from "react";
import MyInput from "./Components/UI/Input/Input.jsx";
import "./styles/App.css";
import TaskListItem from "./Components/TaskListItem.jsx";
import TaskList from "./Components/TaskList.jsx";
import AddButton from "./Components/UI/AddButton/AddButton.jsx";
import classes from "./Components/UI/Input/Input.module.css";
import MyModal from "./Components/UI/Modal/MyModal.jsx";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, status: true, title: "Сделать уроки" },
    { id: 2, status: false, title: "Купить дом" },
  ]);
  const [title, setTitle] = useState("");
  const [modal, setModal] = useState(false);

  const addNewTask = () => {
    const newTask = {
      id: Date.now(),
      status: false,
      title,
    };
    if (title !== "") {
      setTasks([...tasks, newTask]);
    }
    setTitle("");
  };
  const removeTask = (task) => {
    setTasks(tasks.filter((p) => p.id !== task.id));
  };
  const switchStatus = (task) => {
    task.status = !task.status;
  };

  return (
    <div className="App">
      {/*  <MyModal visible={modal} setVisible={setModal}>
        <MyInput
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <button onClick={editTask}>Подтвердить</button>
      </MyModal> */}
      <div className={classes.InputStyle}>
        <MyInput value={title} onChange={(e) => setTitle(e.target.value)} />
        <AddButton onClick={addNewTask} />
      </div>
      <TaskList
        edit={setModal}
        status={switchStatus}
        remove={removeTask}
        tasks={tasks}
      />
    </div>
  );
}

export default App;
