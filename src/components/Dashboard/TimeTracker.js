// src/components/Dashboard/TimeTracker.js
import React, { useState, useEffect } from 'react';
import './TimeTracker.css';

const TimeTracker = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="time-tracker">
      <h3>Time Spent</h3>
      <p>{seconds} seconds</p>
    </div>
  );
};

export default TimeTracker;
