import React, { useState } from 'react';
import './TaskForm.css';

function TaskForm({ addTask }) {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
    priority: 'Medium',
    status: 'Pending',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskData);
    setTaskData({ title: '', description: '', priority: 'Medium', status: 'Pending' });
  };

  return (
    <div className="task-form-container">
      <h3>Create New Task</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={taskData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={taskData.description}
          onChange={handleChange}
          required
        />

        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          name="priority"
          value={taskData.priority}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label htmlFor="status">Status</label>
        <select
          id="status"
          name="status"
          value={taskData.status}
          onChange={handleChange}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button type="submit">Add Task</button>
      </form>
    </div>
  );
}

export default TaskForm;
