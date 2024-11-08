// src/components/Dashboard/Dashboard.js
import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import TimeTracker from './TimeTracker';
import './Dashboard.css';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} />
      <TimeTracker />
    </div>
  );
};

export default Dashboard;
