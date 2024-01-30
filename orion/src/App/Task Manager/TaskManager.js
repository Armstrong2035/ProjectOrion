import React, { useState } from "react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter();

function TaskManager() {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("low");
  const [tasks, setTasks] = useState([]);
  const [completed, setCompleted] = useState([]);

  const addTask = () => {
    let task = {
      title: title,
      status: "pending",
      priority: priority,
    };

    setTasks([...tasks, task]);
  };

  // setTasks([...tasks, newTask]);

  return (
    <div>
      <input
        placeholder="Task Title "
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>

      <button onClick={addTask}>Add Task</button>
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        completed={completed}
        setCompleted={setCompleted}
      />
      <h1> Completed tasks </h1>
      <TaskList
        tasks={completed}
        setTasks={setTasks}
        completed={completed}
        setCompleted={setCompleted}
      />
    </div>
  );
}
