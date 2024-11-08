import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');
  const [status, setStatus] = useState('Pending');

  const addTask = () => {
    if (taskName && description) {
      onAddTask({
        taskName,
        description,
        priority,
        status
      });
      setTaskName('');
      setDescription('');
      setPriority('Low');
      setStatus('Pending');
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        value={taskName}
        placeholder="Task Name"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <textarea
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <label htmlFor="priority">Priority:</label>
      <select
        id="priority"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <label htmlFor="status">Status:</label>
      <select
        id="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
