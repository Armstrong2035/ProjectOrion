import React, { useEffect, useState } from "react";

function TaskList({ tasks, setTasks, completed, setCompleted }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          completed={completed}
          setCompleted={setCompleted}
        />
      ))}
    </ul>
  );
}

export default TaskManager;
