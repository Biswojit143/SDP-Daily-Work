# Day 22 — GraphQL Intro (Apollo Client v3)

This project introduces GraphQL usage on the frontend using React and Apollo Client.
It demonstrates how data can be fetched using GraphQL queries instead of REST APIs.

The project uses Apollo Client **v3** (intentionally), because it provides a stable and simpler API for learning, including the `useQuery` hook.

A public GraphQL API is used, so no backend setup is required.

Project structure:

Day-22-graphql-intro/
├─ src/
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

- Connects a React app to a GraphQL endpoint
- Fetches data using a GraphQL query
- Displays a list of countries from the API
- Handles loading and error states correctly

Important dependency note:

This project uses:
- @apollo/client version 3.x
- graphql package

Apollo Client v4 was intentionally avoided because it changes how hooks like `useQuery` are imported, which can cause confusion during learning.

Key learning outcomes:

- Understanding how GraphQL differs from REST
- Learning how Apollo Client manages GraphQL state
- Using `useQuery` to fetch and render data
- Handling loading and error states in GraphQL-based UIs

Notes:

- No REST API is used
- No backend or database is required
- This is a frontend-only GraphQL introduction
- Works on Windows, macOS, and Linux

Status:
Day 22 complete. GraphQL data fetching implemented using Apollo Client v3.