# Madatha Ganesh — Java Backend Portfolio

A complete, responsive Java Backend Engineer portfolio built with **React + Vite + plain CSS**. The project uses client-side routing and is ready for Netlify or another static host. It has **no backend, database, credentials or paid API requirement**.

## 1. Open and run in VS Code

1. Install **Node.js 20.19+** (Node.js 22 LTS is a good choice) and VS Code.
2. Download and unzip this project.
3. Open the `ganesh-java-portfolio` folder in VS Code (the folder containing `package.json`).
4. Open **Terminal → New Terminal** and run:

```bash
npm install
npm run dev
```

5. Open the localhost URL printed by Vite (usually `http://localhost:5173`).

### Test a production build

```bash
npm run build
npm run preview
```

Vite produces deployable files in **`dist/`**. Never upload `node_modules/` to Netlify.

> **Testing note:** This project was created in an environment without access to the npm registry. Source code syntax and file integrity were checked offline, but `npm install`, interactive browser testing, and `npm run build` could not be completed there. Run the commands above on your machine before publishing. If any install/build error occurs, check your Node version and copy the exact error message for debugging.

## 2. Where to edit everything

### Personal information, work, projects, skills and contact links

Edit: **`src/data.js`**. No need to search through JSX for content changes.

| Item | Location in `src/data.js` |
|---|---|
| Name, role, email, LinkedIn, GitHub | `profile` |
| Intro and About | `profile.intro`, `profile.about` |
| Notice period/public job-search note | `profile.joiningNotice`, `profile.showPublicAvailability` |
| Production metrics | `achievements` |
| Genpact work | `experience` |
| Featured and previous projects | `projects` |
| Technology groups | `skills` |
| Certificates, college, volunteering, languages | `credentials`, `education`, `secondaryDetails` |

### Resume PDF

Replace **`public/resume.pdf`** with your final resume. Keep the filename `resume.pdf`, or update `profile.resumeUrl`.

**Important privacy note:** The supplied PDF includes your telephone number and email. Hosting `resume.pdf` makes the file public. Remove any details you do not want publicly accessible.

**Important hyperlink note:** The supplied PDF labels both project links “GitHub Demo,” but both point to the same Real-Time-Order-Event-Processing-System repository. Fix the ExpenseCore link in the resume itself before final deployment.

### Project repository links

The Real-Time Event Processing URL is copied from your resume:

`https://github.com/MadathaGanesh/Real-Time-Order-Event-Processing-System`

Its live public accessibility was not confirmed during creation. Check that it opens without login, contains the correct project, and has a useful README.

The exact ExpenseCore repository URL was **not provided**. In `src/data.js`, find:

```js
slug: 'expensecore',
repoUrl: '',
```

Replace the empty string with the actual URL. Until then, the GitHub action points to your GitHub profile, and the case-study page clearly explains that the repository link is not configured.

Older BookVault and Auto Dealer repositories also have empty URLs because exact links weren't supplied.

### Theme and colors

Edit `src/styles.css` under `:root` (dark colors) and `:root[data-theme='light']` (light colors). The site includes a working dark/light toggle saved to local storage.

### Layout / sections

- `src/pages/Home.jsx` — homepage and section layouts
- `src/pages/ProjectDetail.jsx` — detailed project pages
- `src/components/Header.jsx` — responsive navigation
- `src/components/ProjectCard.jsx` — project cards
- `src/components/FlowDiagram.jsx` — conceptual system-flow diagrams
- `src/components/Footer.jsx` — footer
- `src/App.jsx` — routes, theme, page scrolling

## 3. What this website includes

- Hero, About, production Experience, measurable scope, Projects, Skills, Education, Certifications, Contact, Resume
- Four case-study routes:
  - `/projects/real-time-event-processing`
  - `/projects/expensecore`
  - `/projects/bookvault`
  - `/projects/auto-dealer-management`
- Mobile navigation, project category filtering, light/dark theme toggle
- Mailto links, copy-email button with fallback, LinkedIn/GitHub outbound links
- Downloadable resume, keyboard focus styles, skip link, responsive layout
- Meta tags, Open Graph image, robots file, favicon, sitemap
- Netlify SPA routing configuration and safe basic response headers
- No fake contact form, no invented live backend demo and no external analytics trackers

## 4. Deploy to Netlify

### Option A — Via GitHub (recommended)

1. Create a new GitHub repository for this portfolio.
2. Commit and push the project (do not include `node_modules` or `dist`).
3. In Netlify, choose **Add new project → Import an existing project**.
4. Connect GitHub and choose the portfolio repository.
5. Verify the settings:

   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

6. Deploy. Both `netlify.toml` and `public/_redirects` include a SPA fallback so direct project URLs open correctly.
7. Open each project URL directly and refresh the browser to test routing.

### Option B — Manual upload

Run `npm install && npm run build`, then upload the `dist` folder to Netlify Drop or your static host. Do not upload the source folder as-is for static hosting.

For Vercel or similar hosts, configure a SPA rewrite to `/index.html` for routes not matching existing files.

## 5. Site URL, indexing and social preview

The sample site address matches the Netlify URL previously shown in your LinkedIn profile. If you deploy to a new domain, **change all three locations**:

1. `profile.siteUrl` in `src/data.js`
2. `<meta property="og:image">`, `og:url`, canonical URL and JSON-LD `url` in `index.html`
3. URLs in `public/sitemap.xml`

Also update any old LinkedIn / GitHub / resume links that still point to your previous portfolio. Social platforms may cache old preview images; use their link-debugging tools after publishing.

This is a client-rendered React portfolio; for maximum search-engine support for individual project case-study pages, consider adding static prerendering or SSR later. The main homepage content is indexable by modern JavaScript-capable crawlers, but that is not a ranking guarantee.

## 6. Accuracy, confidentiality and safety checklist

Before publicly publishing, verify:

- [ ] Your employer permits public mention of the CDK Global account.
- [ ] The figures **12+ REST endpoints**, **1,500–2,000 daily records**, **8 services**, and **zero downtime** are accurate and approved for disclosure.
- [ ] No proprietary source code, internal architecture, customer records, endpoints or credentials are included.
- [ ] Resume PDF contact details are appropriate to publish.
- [ ] Project repository URLs are correct; ExpenseCore URL is set.
- [ ] Each public repository has a clean README, reproducible setup and no secrets.
- [ ] All four certification entries match your actual credentials.
- [ ] You have checked the preview on mobile and desktop.
- [ ] `npm run build` completes successfully on your machine.
- [ ] All case-study pages reload directly on the deployed website.
- [ ] Email, GitHub, LinkedIn and resume links work.

## 7. Folder structure

```text
ganesh-java-portfolio/
├── index.html
├── netlify.toml
├── package.json
├── vite.config.js
├── public/
│   ├── _redirects
│   ├── favicon.svg
│   ├── og-cover.png
│   ├── resume.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── data.js           ← EDIT CONTENT HERE
│   ├── styles.css        ← EDIT STYLING HERE
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   └── FlowDiagram.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── ProjectDetail.jsx
│       └── NotFound.jsx
└── README.md
```

## 8. Notes on functionality

- The **Email me** button opens the visitor's default email program; it does not send a message directly without user action.
- The **Copy email** button uses the Clipboard API (works on localhost/HTTPS) and falls back to mailto if unavailable.
- The **theme toggle** uses browser local storage and falls back safely if blocked.
- **Project filters** work in-browser and update the visible project cards.
- Project architecture diagrams are conceptual explanations derived from your resume, **not actual client-specific architecture**.
- Changing content in `src/data.js` updates your local app immediately via Vite hot reload.

---

Content sources: **Ganesh_Madatha_Java_Backend_Developer.pdf** (primary); supplied LinkedIn screenshots and skill list (secondary). No fabricated production achievements were added.
