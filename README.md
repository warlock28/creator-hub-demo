# CreatorHub Web

CreatorHub is a marketing platform that lets brands book verified Indian creators with transparent pricing, escrow-backed payments, and collaborative dashboards for both creators and customers.

## Stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) with a custom design system
- [shadcn/ui](https://ui.shadcn.com/) + Radix primitives
- [Framer Motion](https://www.framer.com/motion/) for animation
- [TanStack Query](https://tanstack.com/query/latest) (ready for data fetching)

## Getting Started

```bash
npm install
npm run dev
```

The development server runs on http://localhost:5173 by default. Update environment variables inside `.env` (use `.env.example` if present) before connecting to APIs such as Supabase.

## Available Scripts

| Command        | Description                                  |
| -------------- | -------------------------------------------- |
| `npm run dev`  | Start the Vite dev server with HMR           |
| `npm run build`| Create an optimized production bundle        |
| `npm run preview` | Preview the production bundle locally    |
| `npm run lint` | Run ESLint with the shared project config    |

## Project Structure

```
src/
  components/      # UI primitives, layouts, shared sections
  data/            # Temporary mock data used before real APIs
  pages/           # Route segments rendered by React Router
  styles/          # Tailwind entry points and design tokens
```

## Deployment

1. Run `npm run build` to generate the production bundle.
2. Serve the `dist/` folder via any static host (Vercel, Netlify, Render, etc.).
3. Configure environment variables/secrets in your hosting provider before connecting live data sources.

## Contributing

1. Create a feature branch.
2. Make your changes and include tests/screenshots when possible.
3. Run `npm run lint` (and `npm run build` if your changes affect build output).
4. Open a pull request describing the change and the impact on the UI/UX.
