# Day 21 — State Persistence & Offline Handling

This project demonstrates how frontend state can be persisted across page reloads and how basic offline and online status can be handled in a React application.

The focus of this project is reliability, ensuring that important UI state is not lost when the user refreshes the page or temporarily goes offline.

The project is built using React with Vite and does not rely on any backend or API.

Project structure:

    Day-21-state-persistence/
    ├─ src/
    │  └─ App.jsx
    ├─ index.html
    ├─ vite.config.js
    ├─ package.json
    └─ README.md

To run this project in VS Code:

1. Open a terminal in the project folder
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev
4. Open the browser at:
   http://localhost:5173

What this project does:

- Persists application state using browser localStorage
- Restores saved state after page reload
- Detects online and offline network status
- Updates the UI based on connectivity changes

How the logic works:

- State changes are saved to localStorage
- Stored values are read when the app loads
- Browser online and offline events are listened to
- The UI reflects network availability in real time

What you learn from this project:

- How frontend state persistence works
- When and how to use localStorage safely
- How to detect offline and online status
- How to improve user experience during network issues

Notes:

- No service workers are used
- This is not a full Progressive Web App (PWA)
- No backend or API calls are involved
- Works on Windows, macOS, and Linux

Status:
Day 21 complete. State persistence and offline handling implemented successfully.