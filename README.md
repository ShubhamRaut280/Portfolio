# Shubham Raut — Portfolio

Personal portfolio of **Shubham Raut**, Software Development Engineer (SDE I) at Onelab Ventures, Pune.

🌐 **Live:** [shubhamraut.me](https://www.shubhamraut.me/)

[![GitHub](https://img.shields.io/badge/GitHub-ShubhamRaut280-181717?logo=github)](https://github.com/ShubhamRaut280)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rautshubham280-0A66C2?logo=linkedin)](https://www.linkedin.com/in/rautshubham280/)
[![LeetCode](https://img.shields.io/badge/LeetCode-Shubham223-FFA116?logo=leetcode&logoColor=black)](https://leetcode.com/u/Shubham223/)
[![Email](https://img.shields.io/badge/Email-rautshubham280%40gmail.com-D14836?logo=gmail&logoColor=white)](mailto:rautshubham280@gmail.com)

## About

Full-stack engineer building production web platforms, cloud infrastructure and AI agent systems:

- **B2B e-commerce platform** that processed ₹650+ crore in orders and payments within its first 6 months.
- **AI-powered retrosynthesis platform** for molecule synthesis planning: LLM agents, an MCP tool server, async Celery pipelines and ML services on GCP Cloud Run.
- Cloud-native infrastructure on **AWS** (ECS Fargate, ECR, S3, CloudFront, ALB, Aurora, ElastiCache) with GitLab CI/CD.

**Certifications:** Claude Certified Architect – Foundations (Anthropic) · Postman API Fundamentals Student Expert · Accenture Nordics Developer Program · Java · MySQL

**Awards:** Customer Champion Award and Rising Star Award, Onelab Ventures.

## What's on the site

| Section | Contents |
| --- | --- |
| Hero | Intro and links |
| About | Summary, education, awards and certifications |
| Experience | Timeline of roles at Onelab Ventures and ResoluteAI Softwares |
| Skills | Languages, backend, frontend, databases, cloud, DevOps, AI / LLM, mobile |
| Projects | AI Retrosynthesis Platform, LiveThread, RAG PDF Bot, Collaborative Canvas, SkillSphere, Alertmate, ElectroRoute |
| Contact | Email, socials and location |

The resume is available from the nav bar to view or download.

## Tech stack

- **React 19** + **TypeScript**, bundled with **Vite**
- **Tailwind CSS v4** (design tokens in `src/index.css`)
- **lucide-react** and **react-icons** for icons
- **LaTeX** resume compiled to PDF at build time with [Tectonic](https://tectonic-typesetting.github.io)
- Deployed on **Vercel**

Highlights: responsive from 360px phones to wide desktops, scroll-reveal animations that respect `prefers-reduced-motion`, active-section highlighting and a scroll progress bar in the nav.

## Getting started

Requires Node.js 22.18+ (the build script imports a `.ts` constants file directly).

```bash
npm install
npm run dev       # compiles the resume, then starts the dev server
npm run build     # compiles the resume, type-checks and builds to dist/
npm run preview   # serves the production build
npm run lint
```

## Resume from LaTeX

The resume isn't a checked-in PDF. It's built from LaTeX source on every `dev` and `build`:

- Sources live in `src/assets/resume-<version>.tex` (`v1`, `v2`, `v3`).
- Pick the version in [`src/constants/resume.ts`](src/constants/resume.ts) via `RESUME_VERSION`.
- [`scripts/build-resume.mjs`](scripts/build-resume.mjs) compiles it to `src/assets/resume.pdf` (git-ignored). It uses a system `tectonic` if installed, otherwise downloads a pinned binary into `.cache/` on Linux x64.
- Run `npm run resume` to rebuild just the PDF.

## Project structure

```
src/
├── components/        # Page sections (Hero, About, Experience, Skills, Projects, Contact, ...)
│   └── ui/            # Shared Reveal (scroll animation) and SectionHeader
├── constants/         # Resume version selection
├── hooks/             # useScrollReveal
├── assets/            # Resume LaTeX sources (+ generated PDF)
├── types/             # Shared TypeScript types
└── index.css          # Tailwind v4 theme, shared component classes
scripts/
└── build-resume.mjs   # LaTeX → PDF build step
```

---

© Shubham Raut
