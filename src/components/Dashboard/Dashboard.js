import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TimeTracker from './TimeTracker';
import './Dashboard.css';

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const updateTaskStatus = (taskId, status) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, status } : task
    ));
  };

  const updateTimeSpent = (taskId, timeSpent) => {
    setTasks(tasks.map((task) =>
      task.id === taskId ? { ...task, timeSpent } : task
    ));
  };

  return (
    <div className="dashboard-container">
      <h2>Task Dashboard</h2>
      <TaskForm addTask={addTask} />
      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        updateTaskStatus={updateTaskStatus}
        updateTimeSpent={updateTimeSpent}
      />
      <TimeTracker tasks={tasks} />
    </div>
  );
}

export default Dashboard;
