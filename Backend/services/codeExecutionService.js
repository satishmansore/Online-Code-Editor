const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const executeCode = (language, code) => {
  return new Promise((resolve, reject) => {
    const tempDir = path.join(__dirname, 'temp');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir);
    }

    const fileName = path.join(tempDir, `code.${language}`);
    fs.writeFileSync(fileName, code);

    let command;
    switch (language) {
      case 'python':
        command = `docker run --rm -v ${tempDir}:/code python:3 python /code/code.py`;
        break;
      case 'javascript':
        command = `docker run --rm -v ${tempDir}:/code node:16 node /code/code.js`;
        break;
      case 'cpp':
        command = `docker run --rm -v ${tempDir}:/code gcc:latest g++ /code/code.cpp -o /code/output && /code/output`;
        break;
      default:
        reject(new Error('Unsupported language'));
        return;
    }

    exec(command, (err, stdout, stderr) => {
      if (err) {
        reject(new Error(stderr || err.message));
      } else {
        resolve(stdout);
      }
    });
  });
};

module.exports = { executeCode };
