import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


function Editor({ onExecute }) {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');  // Default to Python

  const handleRun = () => {
    onExecute(language, code);
  };

  return (
    <div className="p-4">
      <Form.Group controlId="languageSelect">
        <Form.Label>Select Language</Form.Label>
        <Form.Control as="select" onChange={(e) => setLanguage(e.target.value)} value={language}>
          <option value="python">Python</option>
          <option value="javascript">JavaScript</option>
          <option value="cpp">C++</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="codeTextarea">
        <Form.Label>Write your Code</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
        />
      </Form.Group>

      <Button variant="primary" onClick={handleRun}>
        Run Code
      </Button>
    </div>
  );
}

export default Editor;
