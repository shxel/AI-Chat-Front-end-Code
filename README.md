## AI Chat Frontend Code

**A modern, lightweight React + Vite + Tailwind CSS starter template for building AI-powered chat applications.**

## Features

* **React 18** with functional components and hooks
* **TypeScript** for type safety and better DX
* **Vite** for fast development and build times
* **Tailwind CSS** + **Tailwind Animate** for utility-first, responsive styles
* **Framer Motion** for smooth animations
* **Lucide React** for crisp, customizable icons
* **ESLint** & **Prettier** integrations for code quality

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/shxel/AI-Chat-Front-end-Code.git
   cd AI-Chat-Front-end-Code
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

## Available Scripts

In the project directory, you can run:

* **`npm run dev`** — Start the development server (Vite)
* **`npm run build`** — Bundle the app for production
* **`npm run lint`** — Run ESLint across the codebase
* **`npm run preview`** — Serve the production build locally

## Project Structure

```
AI-Chat-Front-end-Code/
├─ src/                # Application source code
│  ├─ components/      # Reusable UI components
│  ├─ hooks/           # Custom React hooks
│  ├─ utils/           # Utility functions (API, formatting)
│  ├─ App.tsx          # Root component
│  └─ main.tsx         # Entry point
├─ public/             # Static assets and index.html
├─ tailwind.config.js  # Tailwind CSS configuration
├─ postcss.config.js   # PostCSS configuration
├─ vite.config.ts      # Vite build configuration
├─ tsconfig.json       # TypeScript compiler options
└─ package.json        # Project metadata & dependencies
```

## Usage

1. Open the **development server** at `http://localhost:5173`.
2. Integrate your backend **AI chat API** endpoints in `src/utils/api.ts`.
3. Customize UI components in `src/components/Chat` (or your preferred folder).
4. Use **Framer Motion** animations by wrapping components with `<motion.div>`.

## Environment Variables

Create a `.env` file in the root to store your API keys (e.g., `VITE_OPENAI_API_KEY`).

```env
VITE_OPENAI_API_KEY=your_api_key_here
```

## Technologies

* **React** & **React DOM** (v18)
* **TypeScript**
* **Vite**
* **Tailwind CSS** & **Tailwind Animate**
* **Framer Motion**
* **Lucide React**
* **ESLint**

## Contributing

Feel free to **fork** the repository, create a new branch, and submit a **pull request**.
Please ensure all new code is **linted** and **formatted**.

## License

This project is licensed under the **MIT License**.
