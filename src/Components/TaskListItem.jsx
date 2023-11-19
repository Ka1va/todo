import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import MyModal from "./UI/Modal/MyModal";
import MyInput from "./UI/Input/Input";

const TaskListItem = (props) => {
  const [editTitle, setEditTitle] = useState("");
  const editTask = () => {
    props.task.title = editTitle;
    console.log(props.task.title);
    setModal(false);
    setEditTitle("");
  };
  const [modal, setModal] = useState(false);
  return (
    <div className="taskList">
      <MyModal visible={modal} setVisible={setModal}>
        <MyInput
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
        />
        <button
          style={{
            color: "white",
            backgroundColor: "purple",
            fontSize: "24px",
          }}
          onClick={editTask}
        >
          Подтвердить
        </button>
      </MyModal>
      <Checkbox
        onClick={() => props.status(props.task)}
        defaultChecked={props.task.status === true ? true : false}
      />
      <div className="taskTitle">
        <strong>{props.task.title}</strong>
      </div>
      <div className="post_btns">
        <Fab
          onClick={() => props.remove(props.task)}
          size="small"
          color="secondary"
          aria-label="edit"
        >
          <DeleteIcon />
        </Fab>
        <Fab
          onClick={() => setModal(true)}
          size="small"
          color="secondary"
          aria-label="edit"
        >
          <EditIcon />
        </Fab>
      </div>
    </div>
  );
};
export default TaskListItem;
