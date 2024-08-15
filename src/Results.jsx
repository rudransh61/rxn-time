// Results.js
import React from 'react';

function Results({ times, onRetry }) {
  const averageTime = times.reduce((sum, time) => sum + time, 0) / times.length;

  return (
    <div>
      <h2>Your Average Reaction Time: {averageTime.toFixed(2)} ms</h2>
      <button onClick={onRetry}>Try Again</button>
    </div>
  );
}

export default Results;
