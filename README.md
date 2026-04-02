# Cynexsys Next.js Website

Production-ready Next.js App Router project for Cynexsys.

## Stack
- Next.js
- React
- Tailwind CSS
- Motion for React
- Nodemailer contact API

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Contact form

The form posts to `/api/contact`.

For live email delivery, set SMTP values in `.env.local`.
For Gmail, generate an app password and use:
- `SMTP_HOST=smtp.gmail.com`
- `SMTP_PORT=587`
- `SMTP_USER=cynexsysites@gmail.com`
- `SMTP_PASS=your-app-password`

If SMTP values are missing, the API falls back to development-mode logging instead of failing.

## Deploy

### Vercel
1. Push this project to GitHub.
2. Import the repo into Vercel.
3. Add the environment variables from `.env.example`.
4. Deploy.

### Custom domain
After deployment, connect your domain in Vercel project settings.

## Suggested next upgrades
- Replace placeholder project cards with real case studies.
- Add Open Graph image assets in `public/`.
- Add blog / insights pages.
- Add CMS or admin panel.
