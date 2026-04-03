# UCSB Theta Tau Website

The official website for the UCSB chapter of Theta Tau, a co-ed professional engineering fraternity. Built with React and deployed to GitHub Pages at [ucsbthetatau.com](https://ucsbthetatau.com).

## Tech Stack

- **React 19** with React Router v6
- **Vite 6** for dev server and builds
- **styled-components 6** for component-level styling
- **Font Awesome 6** for icons
- **GitHub Actions** for CI/CD

## Getting Started

Requires **Node 22+** and **Yarn**.

```sh
nvm use 22
npm install --global yarn
yarn install
yarn dev
```

The dev server will start at `http://localhost:5173`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `yarn dev` | Start the Vite dev server |
| `yarn build` | Production build (outputs to `dist/`) |
| `yarn preview` | Preview the production build locally |
| `yarn deploy` | Build and deploy to GitHub Pages |
| `yarn lint-check` | Run ESLint on `src/` |
| `yarn lint-fix` | Run ESLint with auto-fix on `src/` |

## Project Structure

```
src/
├── main.jsx              # App entry point
├── App.jsx               # Router and route definitions
├── index.css             # Global styles
├── components/           # Shared UI components
│   ├── Navbar/           # Site navigation (hamburger menu on mobile)
│   ├── FullPage/         # Full-width hero section
│   ├── HomeFullPage/     # Home page hero with typing animation
│   ├── Gallery/          # Image gallery grid
│   ├── Deck/ & Card/     # Flippable card layout
│   ├── Profile/ & Class/ # Member profile cards grouped by class
│   ├── Modal/            # Active member detail modal
│   ├── QandA/ & FAQ/     # Expandable Q&A accordion
│   ├── About/            # About/text section
│   └── Text/             # Styled text block
├── pages/                # One folder per route
│   ├── Home/
│   ├── History/
│   ├── Brotherhood/
│   ├── Professionalism/
│   ├── Service/
│   ├── Actives/          # Includes active_list.json for member data
│   ├── Alumni/           # Includes alumni_list.json for member data
│   └── Rush/
└── styles/
    └── components/
        └── Navbar.css
```

Each component and page folder follows the pattern:
- `ComponentName.jsx` — React component
- `ComponentName.styles.js` — styled-components (where applicable)
- `index.js` — barrel export

## Static Assets

All images and static files live in `public/static/` and are referenced with root-relative paths (e.g. `/static/home/home.png`). Vite copies everything from `public/` into the build output automatically.

```
public/static/
├── home/           # Home page hero + pillar images
├── history/        # History page images
├── brotherhood/    # Brotherhood page + group photos
├── professionalism/
├── service/
├── rush/           # Rush banner
├── navbar/         # Logo
└── profiles/       # Member headshots, organized by class name
    ├── alpha/
    ├── beta/
    ├── ...
    └── pi/
```

### Updating member data

Active and alumni member lists are stored as JSON:
- `src/pages/Actives/active_list.json`
- `src/pages/Alumni/alumni_list.json`

Member photos go in `public/static/profiles/<class-name>/`.

## Routes

| Path | Page |
|------|------|
| `/` | Home |
| `/history` | History |
| `/brotherhood` | Brotherhood |
| `/professionalism` | Professionalism |
| `/service` | Service |
| `/actives` | Actives |
| `/alumni` | Alumni |
| `/rush` | Rush |

## Deployment

The site is deployed to **GitHub Pages** with a custom domain (`www.ucsbthetatau.com`, configured in `public/CNAME`).

**Automatic:** Pushing to `master` triggers the GitHub Actions workflow in `.github/workflows/deploy.yml`, which builds the site and force-pushes the `dist/` output to the `gh-pages` branch.

**Manual:** Run `yarn deploy` to build and push to `gh-pages` via the `gh-pages` package.

`public/404.html` contains a redirect script needed for client-side routing on GitHub Pages — do not remove it.

## CI

Two other GitHub Actions workflows run automatically:

- **Quality Check** (`.github/workflows/quality-check.yml`) — runs on every push and PR: installs dependencies, lints, and builds. Also enforces Yarn (fails if `package-lock.json` exists).
- **Compress Images** (`.github/workflows/compress-images.yml`) — runs on PRs that modify image files, automatically compresses them.
