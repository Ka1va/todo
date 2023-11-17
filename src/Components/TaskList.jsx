import React from "react";
import TaskListItem from "./TaskListItem";

const TaskList = ({ tasks, remove, status }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskListItem
          remove={remove}
          status={status}
          number={index + 1}
          task={task}
          key={task.id}
        />
      ))}
      ;
    </div>
  );
};
export default TaskList;
