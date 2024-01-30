import React, { useState } from "react";

function TaskItem({ task, tasks, setTasks, completed, setCompleted }) {
  const [status, setStatus] = useState("pending");
  const markAsDone = (e, title) => {
    if (e === "done") {
      const filterTask = tasks.filter((task) => task.title != title);
      setCompleted([...completed, task]);
      setTasks(filterTask);
    }
  };

  const deleteTask = (title) => {
    const filterTask = tasks.filter((task) => task.title != title);
    setTasks(filterTask);
  };

  // useEffect(() => {
  //   if (task.status === "done") {
  //     return;
  //   }
  //   setStatus("pending");
  // }, [status]);
  return (
    <li>
      <h1>{task.title}</h1>
      {task.status !== "done" && (
        <div>
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
              markAsDone(e.target.value, task.title);
            }}
          >
            <option value="pending">Pending</option>
            <option value="done">Done</option>
          </select>
        </div>
      )}
      <span>{task.priority}</span>
      <button onClick={() => deleteTask(task.title)}>Delete Task</button>
    </li>
  );
}
