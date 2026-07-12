# PJBStudios.com Agent Guidance

This project is the public website for PJBStudios, a modern software and creative technology studio. Treat it as a growing product studio and technology business website, not as a generic freelance-developer portfolio, freelance landing page, or AI-startup hype site.

## Project Context

- Public brand name: PJBStudios
- Website identity: PJBStudios.com
- Project folder: `pjbstudios-com`
- Tagline: Ideas Into Reality.
- Brand mission: PJBStudios exists to transform thoughtful ideas into polished digital products that solve real-world problems and deliver exceptional user experiences.
- North Star: "PJBStudios transforms thoughtful ideas into polished digital products that solve real-world problems."
- Initial goal: a polished, responsive, front-facing marketing website suitable for Vercel deployment and connection to the PJBStudios.com domain.
- Current technical foundation: Next.js 16 App Router, TypeScript, Tailwind CSS, ESLint, `src` directory, npm, and import alias `@/*`.

## Brand Position

PJBStudios designs and builds high-quality mobile applications, web platforms, business software, AI-assisted tools, and digital products. The focus is solving real problems with thoughtful design and excellent engineering, not chasing trends.

Every page, section, and product presentation should support the North Star and communicate a studio that is:

- Innovative.
- Trustworthy.
- Professional.
- Thoughtful.
- Detail-oriented.
- Approachable.
- Product-focused.

Never portray the company as arrogant, gimmicky, or driven by hype.

## Core Brand Values

- Practical Innovation
- Thoughtful Design
- Exceptional User Experience
- Simplicity
- Quality Engineering
- Continuous Improvement
- Trust
- Professionalism

## Visual Identity

- Primary logo treatment: `PJB` should always appear in Electric Blue, and `Studios` should always appear in White.
- Tagline treatment: `Ideas Into Reality.` should appear beneath the logo using a muted gray.
- Background: very dark charcoal or near black.
- Primary brand accent: Electric Blue.
- Primary text: White.
- Secondary text: Soft Gray.
- Borders: subtle dark gray.
- Cards: slightly lighter than the page background.
- Electric Blue should be used intentionally for buttons, links, focus states, hover states, subtle glow effects, and important highlights.

Avoid excessive neon, overly bright gradients, visual clutter, gimmicky animation, and unreadable contrast.

## Design And UX Direction

The Version 1.0 brand direction is premium, modern, confident, professional, creative, and product-focused. The website should feel like a modern technology company rather than a freelance portfolio or AI startup.

Typography should be modern, clean, highly legible, premium, and understated. Avoid decorative or futuristic fonts.

Motion should be smooth, subtle, purposeful, and polished. Favor elegant transitions and restrained motion over flashy animations.

Mobile presentation is equally important as desktop and tablet presentation.

## Next.js Version Awareness

This project uses a newer Next.js release. Before changing framework behavior, inspect the existing files and, when needed, read the relevant local documentation in `node_modules/next/dist/docs/`. Do not assume older Next.js conventions are still correct.

## Working Rules

- Inspect existing files before modifying them.
- Preserve working behavior unless a requested change requires otherwise.
- Prefer simple, maintainable architecture over unnecessary abstraction.
- Use reusable React components where repetition justifies them.
- Avoid replacing complete working files when a focused edit is safer.
- Keep visual content and repeated project data structured for easy future editing.
- Do not invent facts about PJBStudios, its products, launches, customers, revenue, testimonials, partnerships, investors, client relationships, employees, offices, awards, statistics, or availability.
- Do not deploy, connect domains, create remote repositories, or publish changes without explicit approval.

## Accessibility And Frontend Quality

- Use semantic HTML for page structure and content hierarchy.
- Use accessible interaction patterns for navigation, buttons, forms, links, and any future motion or interactive elements.
- Maintain strong responsiveness across mobile, tablet, and desktop.
- Keep contrast readable and avoid effects that reduce clarity.
- Structure pages so the first release may begin as one page while allowing additional pages later.

## Dependencies

- Avoid adding dependencies unless they provide meaningful value.
- Explain why a new dependency is needed before installing it.
- Prefer built-in platform, React, Next.js, and Tailwind features where they are sufficient.

## Validation

After meaningful implementation work, run:

```bash
npm run lint
npm run build
```

Fix errors caused by your changes before reporting completion. If a validation command cannot be run, report why.

## Security And Git Safety

- Never run destructive Git commands.
- Never expose secrets.
- Never commit environment files containing secrets.
- Do not initialize or connect a remote repository unless explicitly approved.
- Do not modify unrelated projects or move files outside this project unless explicitly requested.

## Completion Reports

When reporting completion, include:

- Changed files.
- Validation results.
- Any unresolved concerns or decisions that need owner approval.
- A clear note when design or implementation has not begun.
