import React, { useState } from 'react';
import Header from './components/Header';
import Editor from './components/Editor';
import ResultDisplay from './components/ResultDisplay';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [output, setOutput] = useState('');

  const handleExecute = async (language, code) => {
    console.log('Executing code:', language, code);  // Log to check if data is correct
    try {
      const response = await fetch('http://localhost:5000/api/code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ language, code }),
      });

      const data = await response.json();
      setOutput(data.output);
    } catch (error) {
      console.error('Execution error:', error);
      setOutput('Error: ' + error.message);
    }
  };

  return (
    <div className="App">
      <div className="container my-5">
        {/* Render the header */}
        <Header />

        {/* Render the editor and pass the execute handler */}
        <Editor onExecute={handleExecute} />

        {/* Render the result display */}
        <ResultDisplay output={output} />
      </div>
    </div>
  );
}

export default App;
