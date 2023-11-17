import * as React from "react";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskListItem = (props) => {
  return (
    <div className="taskList">
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
        <Fab size="small" color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      </div>
    </div>
  );
};
export default TaskListItem;
