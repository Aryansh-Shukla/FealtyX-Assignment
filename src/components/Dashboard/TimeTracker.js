import React from 'react';
import './TimeTracker.css';

function TimeTracker({ tasks }) {
  return (
    <div className="time-tracker-container">
      <h3>Time Tracker</h3>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title} - <span>{task.timeSpent} minutes</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TimeTracker;
