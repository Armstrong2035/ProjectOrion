import React, { useEffect, useState } from "react";

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

export default TaskManager;
