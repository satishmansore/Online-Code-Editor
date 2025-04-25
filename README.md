# 🧑‍💻 Online Code Editor

An interactive, web-based code editor that supports multiple languages including **Python**, **JavaScript**, and **C++**. Users can write, execute, and view code output in real-time from their browser.

## 🚀 Features

- 💡 Code editor with syntax highlighting
- 🌐 Supports Python, JavaScript, and C++
- 🧪 Execute code and see output instantly
- 🌈 Responsive and styled UI using Tailwind CSS & Bootstrap
- 🖥️ Built using the MERN stack (MongoDB, Express.js, React, Node.js)
- ⚙️ Dockerized for easy deployment

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, Bootstrap
- **Backend:** Node.js, Express.js
- **Languages Supported:** Python, JavaScript, C++
- **Others:** Docker, PostCSS, Code Execution APIs

## 📁 Project Structure

Online-Code-Editor/ ├── backend/ │ ├── server.js │ ├── routes/ │ └── controllers/ ├── frontend/ │ ├── src/ │ │ ├── components/ │ │ ├── App.js │ │ └── index.js │ ├── public/ │ └── tailwind.config.js ├── Dockerfile ├── docker-compose.yml └── README.md


## 🐳 Docker Setup

To build and run the app with Docker:

```bash
docker-compose up --build
