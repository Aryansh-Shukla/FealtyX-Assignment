import React from 'react';
import { animated } from 'react-spring';
import './TaskList.css';

function TaskList({ tasks, deleteTask }) {
  return (
    <div className="task-list-container">
      <h3 style={{ width: '100%', textAlign: 'center', color: '#333' }}>Task List</h3>
      {tasks.length === 0 ? (
        <p style={{ width: '100%', textAlign: 'center', color: '#777' }}>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <animated.div key={task.id} className="task-item">
            <div className="task-item-header">{task.title}</div>
            <div className="task-item-description">{task.description}</div>
            <div className="task-item-footer">
              <div className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</div>
              <div className={`status ${task.status.toLowerCase().replace(' ', '-')}`}>
                {task.status}
              </div>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </div>
          </animated.div>
        ))
      )}
    </div>
  );
}

export default TaskList;
