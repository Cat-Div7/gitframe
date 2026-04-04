# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build the project (TypeScript check + Vite build)
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Architecture Overview

GitFrame is a GitHub developer analytics dashboard built with React, TypeScript, and Vite.

Key files:
- `src/main.tsx` - Entry point that renders the React app
- `src/App.tsx` - Main React component
- `src/store.ts` - Zustand global state store
- `src/index.css` - Global styles
- `vite.config.ts` - Vite configuration with React plugin
- `tsconfig.json` (and `tsconfig.app.json`, `tsconfig.node.json`) - TypeScript configuration with strict settings

State management uses Zustand. `react-router-dom` is listed as a dependency, suggesting planned routing.

## Tech Stack (Planned)

From README.md, the intended stack includes:
- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- TanStack Query
- Zustand
- Recharts
- Jest + React Testing Library

Note: Tailwind, TanStack Query, and Recharts are not yet installed in package.json.

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json` - TypeScript configurations
- `eslint.config.js` - ESLint v9 config using `@eslint/js` and plugins

## Development Workflow

1. Run `npm install`
2. Start dev server: `npm run dev`
3. Open displayed localhost URL
4. Build production: `npm run build`
5. Lint: `npm run lint`

## Notes

- No test scripts are configured yet.
- The project is in early stage; many dependencies listed in README are not yet installed.
- Component files exist directly in `src/`; expect more directories to emerge as the project grows.