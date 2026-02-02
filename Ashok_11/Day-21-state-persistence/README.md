# Day 21 — State Persistence & Offline Handling

This project demonstrates how frontend state can be persisted across page reloads and how basic offline and online status can be handled in a React application.

The focus of this project is reliability on the frontend by ensuring that important UI state is not lost when the user refreshes the page or temporarily goes offline.

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

1. Open a terminal inside the project folder  
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev
4. Open the browser at:
   http://localhost:5173

What this project does:

- Persists application state using browser localStorage
- Restores state automatically after page refresh
- Detects online and offline network status
- Updates UI based on network availability

How the logic works:

- The counter value is saved to localStorage whenever it changes
- On page load, the saved value is read and restored
- Browser online and offline events are listened to using window events
- The UI reflects the current network status in real time

Key learning outcomes:

- Understanding state persistence on the frontend
- Using localStorage for simple data storage
- Detecting offline and online status in the browser
- Improving user experience during network interruptions

Notes:

- No service workers are used in this project
- This is not a full Progressive Web App (PWA)
- No backend or API calls are involved
- Works on Windows, macOS, and Linux

Status:
Day 21 complete. State persistence and offline handling implemented successfully.