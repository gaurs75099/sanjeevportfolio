# Sanjeev Gaur — Portfolio

A responsive, component-based portfolio built with Next.js App Router, React, and TypeScript.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). For a production build, run `npm run build`, then `npm run start`.

## Project structure

```text
src/
  app/
    globals.css       Design tokens, layout, and responsive styles
    layout.tsx        Root layout and page metadata
    page.tsx          Home page composition
  components/         Reusable page sections and section heading
  data/
    portfolio.ts      Project, experience, skills, and education content
public/
  sanjeev-gaur-profile.jpg
  sanjeev-gaur-resume.pdf
```

Update the portfolio content in `src/data/portfolio.ts`. Page sections live in `src/components/`, and their shared styling is in `src/app/globals.css`.

The header theme toggle supports light and dark themes, follows the system preference by default, and saves manual selections.

## Checks

```bash
npm run lint
npm run build
```
