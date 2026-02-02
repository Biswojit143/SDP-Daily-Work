# Day 22 — GraphQL Intro (Apollo Client v3)

This project introduces GraphQL usage on the frontend using React and Apollo Client.
It demonstrates how data can be fetched using GraphQL queries instead of traditional REST APIs.

The project intentionally uses Apollo Client version 3, which provides a stable and beginner-friendly API including the `useQuery` hook.

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

- Connects a React application to a GraphQL endpoint
- Fetches data using GraphQL queries
- Displays a list of items from the API
- Handles loading and error states properly

Important dependency note:

- Apollo Client v3 is used intentionally
- Apollo Client v4 was avoided to prevent hook import confusion
- The `useQuery` hook comes directly from `@apollo/client`

What you learn from this project:

- How GraphQL differs from REST
- How Apollo Client manages GraphQL state
- How to write and execute GraphQL queries
- How to handle loading and error states in GraphQL UIs

Notes:

- No REST API is used
- No backend or database is required
- This is a frontend-only GraphQL introduction
- Works on Windows, macOS, and Linux

Status:
Day 22 complete. GraphQL data fetching implemented using Apollo Client v3.