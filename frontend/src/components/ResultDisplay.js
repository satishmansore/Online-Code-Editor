import React from 'react';

function ResultDisplay({ output }) {
  return (
    <div>
      <h2>Result</h2>
      <pre>{output}</pre>
    </div>
  );
}

export default ResultDisplay;
