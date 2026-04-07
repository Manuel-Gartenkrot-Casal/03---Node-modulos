# 03---Node-m-dulos
📦 Node Modules Project
📌 Overview

This project demonstrates the use of modular architecture in Node.js, focusing on how to structure, export, and reuse functionality across different files.

The main goal is to understand how Node.js handles modules, how to separate concerns, and how to build scalable and maintainable backend code using native module systems.

🚀 Features
Modular code organization
Separation of concerns across multiple files
Use of require / module.exports
Reusable functions and logic
Clean and simple project structure for learning purposes
🛠️ Technologies Used
Node.js – JavaScript runtime environment
JavaScript (ES5/ES6) – Core programming language
Node Module System – require, exports, module.exports
📂 Project Structure
03---Node-modulos/
│
├── index.js          # Main entry point
├── modules/          # Custom modules folder
│   ├── module1.js
│   ├── module2.js
│   └── ...
└── package.json      # Project configuration
⚙️ How It Works
Each module contains specific functionality.
Functions or variables are exported using module.exports.
The main file (index.js) imports these modules using require().
The application executes logic by combining these modules.
▶️ Getting Started
1. Clone the repository
git clone https://github.com/Manuel-Gartenkrot-Casal/03---Node-modulos.git
cd 03---Node-modulos
2. Run the project
node index.js
📖 Learning Objectives

This project helps to:

Understand how Node.js modules work
Learn how to structure backend code properly
Improve code readability and maintainability
Prepare for more advanced backend architectures
📈 Future Improvements
Refactor to ES Modules (import/export)
Add more complex module interactions
Implement error handling across modules
Introduce unit testing (Jest or Mocha)
👨‍💻 Author

Developed as part of a learning project focused on Node.js fundamentals and modular programming.
