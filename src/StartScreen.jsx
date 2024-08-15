// StartScreen.js
import React from 'react';

function StartScreen({ onStart }) {
  return (
    <div>
      <h1>Reaction Time Test</h1>
      <p>Click the button below to start the test.</p>
      <button onClick={onStart}>Start</button>
    </div>
  );
}

export default StartScreen;
