# Publishing the portfolio

The site is a static frontend. It can be hosted by services such as Vercel, Netlify or GitHub Pages.

## Build settings

Use these settings with a static hosting provider:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22 or newer
- Repository: `AlexDevModel/Portfolio`

## Recommended branch workflow

1. Keep developing on `website-development`.
2. Use the pull request to review changes before merging to `main`.
3. Connect the hosting provider to the repository.
4. Configure preview deployments for pull requests or the development branch.
5. Configure production deployment from `main` only after the portfolio content is ready.

## Before publishing

- Replace the starter project descriptions in `src/data/projects.ts`.
- Add the email address you want public in `src/data/site.ts`.
- Add your own 3D models and screenshots.
- Check the licence for every third-party asset.
- Review the site on desktop, tablet and mobile.
- Confirm the page title and description in `index.html`.
- Add the final domain to your hosting provider and configure HTTPS.

## GitHub Pages note

GitHub Pages can host the built site, but Vite needs the correct base path when publishing from a repository subpath. If you choose GitHub Pages, set the Vite `base` option to `/Portfolio/` and use a deployment workflow that uploads the `dist` folder. Do not apply that base path when using a custom domain or a host that serves the site from the domain root.

No hosting provider or domain is configured by this repository yet. Choose the provider before adding a production deployment workflow.