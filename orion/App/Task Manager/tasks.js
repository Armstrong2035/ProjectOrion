import React from "react";

/* Component list: 
    TaskManager
        TaskList
            TaskItem
                TaskTitle
                TaskStatus
                TaskPriority
                */

function TaskManager() {
  return <TaskList />;
}

function TaskList() {
  return <TaskItem />;
}

function TaskItem() {
  return (
    <>
      <TaskTitle />
      <TaskStatus />
      <TaskPriority />
    </>
  );
}

function TaskTitle() {
  return <p>Title</p>;
}

function TaskStatus() {
  return <button></button>;
}

function TaskPriority() {
  return (
    <select>
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
    </select>
  );
}
