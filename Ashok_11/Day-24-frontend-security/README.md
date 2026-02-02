# Day 24 — Security for Frontend

This project demonstrates basic frontend security concepts using a simple React application.
The goal is to understand how authentication-related data should be handled safely on the frontend and what common mistakes must be avoided.

The project focuses on secure token handling, in-memory storage, and basic Content Security Policy (CSP) awareness.
No backend or real authentication service is used; everything is intentionally mocked for learning purposes.

Project structure:

    Day-24-frontend-security/
    ├─ src/
    │  ├─ auth/
    │  │  └─ authStore.js
    │  ├─ App.jsx
    │  └─ main.jsx
    ├─ index.html
    ├─ vite.config.js
    ├─ package.json
    └─ README.md

To run this project in VS Code:

1. Open a terminal in the project folder
2. Install dependencies:
   npm install
3. Run the development server:
   npm run dev
4. Open the browser at:
   http://localhost:5173

What this project does:

- Simulates a login and logout flow
- Stores a mock authentication token only in memory
- Ensures the token is cleared on page refresh
- Demonstrates why localStorage and sessionStorage are unsafe for tokens
- Adds a basic Content Security Policy (CSP) example

How the security logic works:

- The token is stored in a JavaScript variable inside a dedicated auth store
- The token exists only for the lifetime of the page session
- Refreshing the page clears the token automatically
- Logging out explicitly removes the token from memory

What you learn from this project:

- Why frontend applications should avoid storing tokens in localStorage
- How in-memory token storage reduces attack surface
- The role of frontend security as damage control, not full protection
- Basic awareness of CSP and its purpose

Notes:

- This project does not implement real authentication
- No backend, API, or database is used
- CSP configuration is minimal and for demonstration only
- This is not a complete security solution, only a learning example
- Works on Windows, macOS, and Linux

Status:
Day 24 complete. Frontend security basics implemented and demonstrated.