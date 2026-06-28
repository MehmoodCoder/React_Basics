# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## Features

- Convert amounts between different world currencies
- Fetch live exchange rates using a public currency API
- Swap "From" and "To" currencies with a single click
- Clean and responsive UI styled with Tailwind CSS
- Input validation to handle invalid or empty amounts

## Core Concept Learning

- **Custom Hooks** — Building `useCurrencyInfo` to fetch and return currency data cleanly
- **useState** — Managing selected currencies, input amount, and converted result
- **useEffect** — Fetching updated exchange rate data when the selected currency changes
- **Props** — Passing currency options and handlers into reusable components
- **Tailwind CSS** — Styling the UI with utility classes

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
