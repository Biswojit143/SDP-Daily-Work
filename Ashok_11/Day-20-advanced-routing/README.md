# Day 20 — Advanced Routing Patterns

This project demonstrates advanced routing concepts in React using React Router.
It focuses on nested routes and lazy loading (code splitting) to show how larger React applications organize navigation efficiently.

The project is built using React with Vite and does not include any backend or API logic.

Project structure:

Day-20-advanced-routing/
├─ src/
│  ├─ pages/
│  │  ├─ Home.jsx
│  │  ├─ Dashboard.jsx
│  │  ├─ Profile.jsx
│  │  └─ Settings.jsx
│  ├─ App.jsx
│  └─ main.jsx
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

- Implements client-side routing using React Router
- Uses nested routes inside a dashboard layout
- Loads route components lazily to reduce initial bundle size
- Demonstrates how `<Outlet />` renders child routes

How routing works in this project:

- `/` renders the Home page
- `/dashboard` renders the Dashboard page
- `/dashboard/profile` renders the Profile page inside Dashboard
- `/dashboard/settings` renders the Settings page inside Dashboard

Key learning outcomes:

- Understanding nested routes in React Router
- Using `<Outlet />` for child route rendering
- Implementing lazy loading with `React.lazy`
- Improving performance with code splitting

Notes:

- No authentication or protected routes are used
- No backend or API calls are included
- This project focuses only on routing patterns
- Works on Windows, macOS, and Linux

Status:
Day 20 complete. Advanced routing with nested routes and lazy loading implemented.