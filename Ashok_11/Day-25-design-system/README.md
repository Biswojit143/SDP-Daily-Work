# Day 25 — Design Systems & Storybook

This project demonstrates how to build reusable UI components and document them using Storybook.
It focuses on creating a small design system and showing component behavior and interactions in isolation, without running the full application.

The project uses React with Vite and Storybook and includes an interactive Button component whose behavior can be observed directly inside Storybook.

Project structure:

    Day-25-design-system/
    ├─ src/
    │  ├─ components/
    │  │  ├─ Button.jsx
    │  │  └─ Button.stories.jsx
    │  ├─ App.jsx
    │  └─ main.jsx
    ├─ .storybook/
    ├─ index.html
    ├─ vite.config.js
    ├─ package.json
    └─ README.md

How this project was set up (Storybook installation steps):

1. A React project was created using Vite:
   npm create vite@latest Day-25-design-system
   npm install

2. Storybook was added to the project:
   npx storybook@latest init

3. During installation, the following options were selected:
   - Framework detected automatically: react-vite
   - New to Storybook? → No (skip onboarding)
   - Configuration → Minimal (just the essentials)

4. Storybook installation completed successfully and added:
   - .storybook configuration folder
   - Storybook scripts in package.json

To run this project in VS Code:

1. Open a terminal in the project folder
2. Install dependencies (if not already installed):
   npm install
3. Run Storybook:
   npm run storybook
4. Open the browser at:
   http://localhost:6006

(Optional) To run the app itself:
   npm run dev  
   Open http://localhost:5173

What this project does:

- Creates a reusable Button component as part of a design system
- Uses Storybook to render components in isolation
- Demonstrates visible interaction inside Storybook using component state
- Shows different visual and behavioral variants of the same component

How interaction works in Storybook:

- The Button component itself remains stateless and reusable
- State and interaction logic are handled inside the Storybook stories
- Clicking the Primary button updates a click counter in the label
- Clicking the Secondary button toggles its active and inactive state
- All changes are visible immediately inside the Storybook UI

What you learn from this project:

- What a design system is and why it is useful
- How Storybook is installed and configured in a React project
- How Storybook is used in real frontend teams
- How to build and document reusable UI components
- How to demonstrate component behavior without running the full app

Notes:

- No backend or API is used
- This project focuses only on frontend UI components
- Storybook configuration is intentionally minimal and clean
- Works on Windows, macOS, and Linux

Status:
Day 25 complete. Design system basics implemented with interactive Storybook components.