# Portfolio website guide

## Overview
The site uses React + TypeScript with Vite. Three.js and React Three Fiber power the interactive 3D viewer. The agreed palette is `#F9E6A8`, `#F2A900`, `#CC6F00` and `#4D2A00`. PT Serif is used for main text and DM Mono for technical labels.

## Run locally
Install Node.js 22 LTS, then open a terminal in the repository:
```bash
npm install
npm run dev
```
Open the local address Vite prints (normally `http://localhost:5173`). Create a production build with `npm run build`, and preview it with `npm run preview`.

## Main files
- `src/main.tsx`: React entry point.
- `src/App.tsx`: assembles the page sections.
- `src/components/`: separate components for navigation, hero, project cards, 3D viewer, about section and footer.
- `src/data/projects.ts`: project card content and optional project links.
- `src/data/site.ts`: public site details, including the contact email and footer year.
- `src/styles.css`: colours, typography, layout, responsive rules and reduced-motion support.
- `public/models/`: your own 3D model files.
- `docs/`: project documentation.

## Change the colours
At the top of `src/styles.css`, edit the CSS variables in `:root`:
```css
--cream: #f9e6a8;
--gold: #f2a900;
--orange: #cc6f00;
--brown: #4d2a00;
```
Most of the site's colours use these variables, so changing them updates the design consistently.

## Change the fonts
The Google Fonts link is in `index.html`. PT Serif is the main typeface; DM Mono is used for small labels. Update the font link and the `font-family` declarations in `src/styles.css` to change them. Local fallback fonts are included.

## Edit project cards
Open `src/data/projects.ts`. Each project has a number, title, category, description and accent class. Replace the starter text with your real project details. Add another object to the array to add another card. An optional `href` property makes the card title/artwork link to a project page or external project URL. The card layout is in `src/components/ProjectGallery.tsx`, and each card's pointer-tilt behaviour is in `src/components/ProjectCard.tsx`. The tilt is deliberately subtle and only responds to a mouse; touch users get the normal card layout.

The current card artwork is CSS shapes, not final project imagery. We can replace each with your own screenshots and links as you provide them.

## Edit the page
The page is split into components in `src/components/`: `Navigation`, `Hero`, `ProjectGallery`, `ModelShowcase`, `ModelViewer`, `About` and `Footer`. The main `App` component assembles them in order. Navigation links use the section IDs `work`, `showcase` and `about`; keep those IDs in sync if you rename a section.

## 3D viewer
The 3D canvas is in `ModelViewer.tsx`. It contains the lighting, environment, orbit controls and a procedural placeholder. To show a GLB, follow `ADDING_3D_MODELS.md` and set `featuredModelPath` in `ModelShowcase.tsx`.

## Responsive design
Responsive breakpoints are near the bottom of `src/styles.css`. The mobile navigation is keyboard-operable, sections use semantic HTML, and reduced-motion preferences are respected.

## Contact details
Set `contactEmail` in `src/data/site.ts` to the email address you want to publish. The contact links appear automatically when this value is set. Leave it empty to keep the placeholder contact links hidden. Do not publish a private address unless you are happy to receive public enquiries.

## Asset and licensing approach
This first version uses CSS shapes, a hand-written SVG favicon and procedural 3D geometry rather than stock or AI-generated imagery. Before adding third-party assets, check that the licence allows portfolio and public website use, retain attribution where required, and record the source.

## Automatic build check
The GitHub Actions workflow in `.github/workflows/ci.yml` installs dependencies and runs the production build for pushes to the working branches and pull requests into `main`.

## Future improvements
- Replace starter project copy with final content, screenshots and links.
- Add your own 3D models and optionally a model selector.
- Add a dedicated game development section when its content is ready.
- Add project detail pages as the portfolio grows.
- Test the production build on desktop, tablet and mobile before launch.