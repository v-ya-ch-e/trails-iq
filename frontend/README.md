# TrailsIQ Frontend

Next.js 16 app for the TrailsIQ case workspace, intake assistant, supplier comparison, escalation management, and audit views.

For the full product setup, use the root [README](../README.md). The frontend expects the Organisational Layer and Logical Layer APIs to be reachable through the root Docker network or through the configured backend URLs.

## Local Development

```bash
cd frontend
npm ci
npm run dev
```

Open http://localhost:3000.

## Useful Commands

```bash
npm run dev      # Start local Next.js dev server
npm run build    # Build production bundle
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Environment

When running through Docker Compose, environment variables are read from the root `.env.local` or `.env.deployed` file. The important values are:

- `BACKEND_INTERNAL_URL`
- `LOGICAL_BACKEND_INTERNAL_URL`
- `NEXT_PUBLIC_API_BASE_URL`
- `ANTHROPIC_API_KEY` for the optional intake chat route
- `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, and `S3_BUCKET_NAME` for the optional upload route

Real `.env` files are ignored. Keep secrets out of git.
