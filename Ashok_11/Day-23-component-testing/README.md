# Day 23 — Component Testing (Advanced)

This project demonstrates advanced component testing in React using Vitest and React Testing Library.  
It focuses on snapshot testing and integration testing so that anyone copying this project can understand how real-world React components are tested.

The project uses React with Vite and contains a simple Counter component that is fully tested.

Project structure:


Day-23-component-testing/
├─ src/
│ ├─ Counter.jsx
│ ├─ Counter.test.jsx
│ ├─ Counter.integration.test.jsx
│ ├─ setupTests.js
│ ├─ App.jsx
│ └─ main.jsx
├─ snapshots/
│ └─ Counter.test.jsx.snap
├─ vite.config.js
├─ package.json
└─ README.md


To run this project in VS Code:

1. Open a terminal in the project folder  
2. Install dependencies:
   npm install
3. (Optional) Run the app in the browser:
   npm run dev  
   Open http://localhost:5173
4. Run component tests:
   npx vitest

What this project does:

- Renders a Counter component
- Uses snapshot testing to detect UI structure changes
- Uses integration tests to simulate real user interactions
- Verifies increment and reset behavior through tests

What you learn from this project:

- How to set up testing in a Vite + React app
- How snapshot tests work and when they are useful
- How integration tests validate user behavior
- How professional frontend component testing is done

Notes:

- No backend or API is used
- This is component-level testing only
- End-to-end testing is covered in other days
- Works on Windows, macOS, and Linux

Status:
Day 23 complete. Snapshot and integration tests implemented and passing.