const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint to handle code execution
app.post('/api/code', (req, res) => {
  const { language, code } = req.body;

  // For Python
  if (language === 'python') {
    // Create a temporary Python file with the code
    const tempFilePath = path.join(__dirname, 'temp_script.py');

    fs.writeFileSync(tempFilePath, code);

    // Use quotes around the file path to avoid issues with spaces in directory names
    const command = `"python" "${tempFilePath}"`;

    exec(command, (error, stdout, stderr) => {
      // Clean up temporary file after execution
      fs.unlinkSync(tempFilePath);

      if (error) {
        res.status(500).json({ output: `Error: ${stderr || error.message}` });
      } else {
        res.json({ output: stdout });
      }
    });
  }

  // For JavaScript (Node.js)
  else if (language === 'javascript') {
    // Ensure code is correctly escaped
    const safeCode = JSON.stringify(code);
    exec(`node -e ${safeCode}`, (error, stdout, stderr) => {
      if (error) {
        res.status(500).json({ output: `Error: ${stderr}` });
      } else {
        res.json({ output: stdout });
      }
    });
  }


  // Add support for C++
  else if (language === 'cpp') {
    const fs = require('fs');
    const path = require('path');
    const cppCodePath = path.join(__dirname, 'temp.cpp');
    const execPath = path.join(__dirname, 'temp.exe'); // .out for Linux/macOS

    fs.writeFileSync(cppCodePath, code);

    exec(`g++ "${cppCodePath}" -o "${execPath}" && "${execPath}"`, (error, stdout, stderr) => {
      if (error) {
        res.status(500).json({ output: `Compilation Error: ${stderr}` });
      } else {
        res.json({ output: stdout });
      }

      // Clean up temp files
      fs.unlink(cppCodePath, () => { });
      fs.unlink(execPath, () => { });
    });
  }


  else {
    res.status(400).json({ output: 'Unsupported language' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
