# ⚛️ React_Basics

A multi-project React learning repository covering core concepts and progressively complex applications — from building a custom React renderer from scratch to full routing with React Router v7.

---

## 🚀 Core Concepts Covered

- **JSX:** Writing HTML structures directly inside JavaScript
- **Components:** Building reusable functional components for modular UIs
- **Props:** Passing dynamic data from parent to child components
- **State Management (`useState`):** Handling local state and dynamic UI updates
- **Side Effects (`useEffect`):** Fetching data, timers, and lifecycle management
- **Custom Hooks:** Extracting reusable stateful logic into custom hook functions
- **Conditional Rendering:** Displaying elements selectively using ternary operators
- **List Rendering:** Rendering arrays using `.map()` with unique keys
- **Refs (`useRef`):** Accessing DOM elements and persisting values across renders
- **Callbacks (`useCallback`):** Memoizing functions to prevent unnecessary re-renders
- **React Router:** Client-side navigation with nested layouts and route-based rendering

---

## 💻 Projects Included

### 🔢 Counter Application
> **Folder:** `Project_1/`

Classic beginner React app demonstrating core state management.
- **Features:** Increment, Decrement
- **Concepts:** `useState`, event handlers, controlled UI updates

---

### 🎨 Tailwind CSS Integration
> **Folder:** `Tailwind_Project/`

Learning Tailwind CSS v4 inside a React + Vite project.
- **Covers:** Utility-first styling, Tailwind v4 setup with `@tailwindcss/vite` plugin
- **Concepts:** Responsive classes, custom color palette, layout utilities

---

### 🖌️ Background Color Changer
> **Folder:** `BG_Changer_Project/`

Interactive app that changes the full-page background color on button click.
- **Features:** Multiple color buttons, instant background swap
- **Concepts:** `useState`, event handlers, dynamic inline styles, Tailwind CSS

---

### 🔐 Password Generator
> **Folder:** `Password_Generator/`

Utility app that generates secure random passwords based on user preferences.
- **Features:** Adjustable length (slider), toggle numbers and special characters, copy to clipboard
- **Concepts:** `useState`, `useEffect`, `useRef`, `useCallback`, Tailwind CSS

---

### 💱 Currency Converter
> **Folder:** `Currency_Converter/`

Real-time currency converter using a live exchange rate API.
- **Features:** Select from/to currencies, enter amount, swap currencies, convert
- **Concepts:** Custom hook (`useCurrencyInfo`), `useState`, `useEffect`, live API fetch, Tailwind CSS

---


## 🛠️ Environment & Tools

| Tool / Technology | Version | Purpose |
|---|---|---|
| **React** | `^19.2.7` | UI library |
| **React DOM** | `^19.2.7` | DOM rendering |
| **Vite** | `^8.1.0` | Build tool & dev server |
| **@vitejs/plugin-react** | `^6.0.2` | JSX transform & HMR |
| **Tailwind CSS** | `^4.3.x` | Utility-first CSS framework |
| **@tailwindcss/vite** | `^4.3.x` | Tailwind v4 Vite plugin |
| **react-router-dom** | `^7.18.1` | Client-side routing |
| **Node.js / npm** | Latest LTS | Runtime & package manager |
| **Git & GitHub** | — | Version control & remote hosting |

---

## ⚙️ Development Guide

### Running Any Project

Navigate into the project folder and start the dev server:

```bash
cd Project_Folder
npm run dev
```

### Scaffolding a New Vite + React Project

```bash
npm create vite@latest
cd project-name
npm run dev
```

### Installing Tailwind CSS v4 (Vite)

```bash
npm install tailwindcss @tailwindcss/vite
```

Add plugin to `vite.config.js`:
```js
import tailwindcss from '@tailwindcss/vite'

export default {
  plugins: [tailwindcss()],
}
```

Add to `index.css`:
```css
@import "tailwindcss";
```

### Setting Up React Router v7 (via `create-react-router`)

Installed using the official React Router CLI as per [reactrouter.com](https://reactrouter.com):

```bash
npx create-react-router@latest
cd my-project
npm run dev
```

Or add to an existing Vite project:

```bash
npm install react-router-dom
```
