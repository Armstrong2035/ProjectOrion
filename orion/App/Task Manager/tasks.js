import React, { useState } from "react";

/* 
Component list: 
    TaskManager
        TaskList
            TaskItem
                TaskTitle
                TaskStatus
                TaskPriority
*/

function TaskManager() {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    let task = {
      title: "Title",
      status: false,
      priority: ["Low", "Medium", "High"],
    };

    return task;
  };

  setTasks([...tasks, newTask]);

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      <TaskList tasks={tasks} />
    </div>
  );
}

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          Title: {task.title}, Status: {task.status ? "Completed" : "Pending"},
          Priority: {task.priority}
        </li>
      ))}
    </ul>
  );
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
  return <input>Title</input>;
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
