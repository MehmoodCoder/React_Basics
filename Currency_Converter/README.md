# 🎨 Currency Changer Project

Welcome to the **Currency Changer** project! This is a clean, interactive, and responsive single-page web application built to master state management in React using Tailwind CSS for rapid styling.

---

## 🚀 Features
* **Currency Conversion:** Convert amounts between different world currencies instantly.
* **Live Exchange Rates:** Fetch real-time exchange rates using a public currency API.
* **Swap Functionality:** Swap "From" and "To" currencies with a single click.
* **Modern Styling:** Clean and responsive UI styled purely with Tailwind CSS.
* **Input Validation:** Handles invalid or empty amounts gracefully.

---

## 🛠️ Tech Stack
* **Framework:** React.js (Vite Template)
* **Styling:** Tailwind CSS (v4 / Vite Plugin)
* **Language:** JavaScript (ES6+), HTML, CSS

---

## 📦 How to Setup & Build This Project From Scratch

Every time I initialize a new React + Tailwind CSS project, I follow these exact standard steps. You can use this guide to recreate or understand the workspace structure:

### Step 1: Initialize Vite Project
Run the following command in your terminal:
```bash
npm create vite@latest
```

## During the prompt configuration, fill out the selections exactly like this:

​Proceed? y 
​Project Name: Your_Project_Name 
​Package Name: your_package_name 
​Select a framework: React 
​Select a variant: JavaScript 
​With oxy? No 
​Install with npm? Yes 

## ​Step 2: Navigate and Install Dependencies 

​Move into your project directory and install Tailwind CSS along with its official Vite plugin:

```
cd project_folder
npm install tailwindcss @tailwindcss/vite
```

## Step 3: Configure Tailwind in Vite 

​Open the vite.config.js file and modify it manually to include the Tailwind plugin:

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// keeping the default react plugin intact
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})

```

## Step 4: Import Tailwind into CSS 

​Open your main CSS entry point (src/index.css) and add the following direct import at the very top of the file:

```
@import "tailwindcss";
```

## 💻 How to Run the Project Local Environment 

​If you want to pull this project and run it again locally, simply execute these commands:

```
# Navigate to the project folder
cd Bg_Changer_Project

# Start the local development server
npm run dev

```

Once the server starts, open the local network link (usually http://localhost:5173) in your browser to interact with the Background Changer!

---

## 💡 Core Concept Learned

* **Custom Hooks:** Building `useCurrencyInfo` to fetch and return live currency data cleanly.
* **State Management:** Using React's `useState` to manage selected currencies, input amount, and converted result.
* **Side Effects:** Using `useEffect` to fetch updated exchange rate data when the selected currency changes.
* **Props:** Passing currency options and event handlers into reusable components.
* **Modern Styling:** Styled purely with Tailwind CSS for a clean, responsive appearance.

---

## 💡 Maintained and documented by MehmoodCoder

😎 https://github.com/MehmoodCoder

