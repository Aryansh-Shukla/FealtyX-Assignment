import React from 'react';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <div className="task-list">
      <h3>Task List</h3>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task, index) => (
          <div key={index} className="task">
            <h4>{task.taskName}</h4>
            <p><strong>Description:</strong> {task.description}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <p><strong>Status:</strong> {task.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
