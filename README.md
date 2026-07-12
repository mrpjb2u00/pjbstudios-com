# PJBStudios.com

PJBStudios.com is the public website for PJBStudios, an emerging software and creative technology studio building practical mobile applications, web applications, business platforms, interactive products, and AI-assisted digital experiences.

The first release is intended to be a polished, responsive, front-facing marketing website that explains what PJBStudios is building, introduces the studio's capabilities, showcases selected products and projects, establishes credibility, and gives visitors a simple way to contact or follow PJBStudios.

## Current Status

The project is in initial setup and documentation. The generated Next.js starter interface has not been redesigned or replaced yet. The visual design direction is not finalized and will be informed by a design created in Stitch.

## Technology Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS
- ESLint
- npm
- `src` directory
- Import alias `@/*`
- Vercel deployment target

## Local Setup

Install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:3000`.

## Validation Commands

Run lint checks:

```bash
npm run lint
```

Run a production build:

```bash
npm run build
```

## High-Level Folder Structure

```text
pjbstudios-com/
  docs/
    brand-foundation.md
  public/
  src/
    app/
  AGENTS.md
  README.md
  package.json
```

## Deployment Target

The intended deployment target is Vercel, with a future connection to the PJBStudios.com domain. Deployment, domain connection, remote repository creation, and publishing require explicit approval.

## Agent Instructions

Detailed guidance for Codex and other coding agents is in `AGENTS.md`.

## Brand Foundation

The initial positioning, goals, audience, content rules, visual direction, and unresolved decisions are documented in `docs/brand-foundation.md`.
