# Portfolio (v2)

Source for https://sandeep03edu.github.io/Portfolio/

Built with Vite, React, TypeScript, Tailwind CSS and Framer Motion. Each section looks like a terminal window. Its command types itself when you scroll to it, and the output appears as normal page content. There is a dark and a light theme, and an optional command palette (press `/` or `Ctrl K`).

## Updating your details

**All personal information lives in one file: `content/portfolio.json`.** The components only read from it. You never need to edit anything in `src/` to change text, dates, links or images.

- Open the file in VS Code. It is linked to `content/portfolio.schema.json`, so you get autocomplete and a red underline if a field name or URL is wrong.
- `npm run dev` and `npm run build` validate the file first. If something is off, the error tells you exactly which field is wrong.
- Images go in `public/images/`. In the JSON, use only the file name (for example `"image": "shield-pass.webp"`).
- Any link field is optional. If it is missing or `""`, the button is hidden.
- If a list is empty (for example `"articles": []`), that whole section is hidden.

### What each part of the file controls

| Key | Shown in |
| --- | --- |
| `site` | Browser tab title, search/social preview, footer text, the `user@host` in prompts |
| `profile` | Top section: name, title, intro line, rotating roles, photos |
| `links` | Email, resume, and profile links (top section, contact section, command palette) |
| `sections` | Order of sections, top-bar label, heading, the typed command and window title. Remove an entry to hide a section |
| `about` | About paragraphs and the small facts box |
| `experience` | Career timeline. `experienceVisible` sets how many show before "show all" |
| `projects` | Project cards. `"featured": true` moves a project to the front |
| `skills` | Skill groups |
| `achievements` | Numbered achievements list |
| `competitive` | Competitive programming cards |
| `education` | Education cards |
| `articles` | Writing section |
| `contact` | Contact heading and message |

### Examples

Add a new article:

```json
"articles": [
  {
    "title": "My new article",
    "summary": "One or two plain lines about what it covers.",
    "date": "Nov 2026",
    "readTime": "8 min read",
    "platform": "Medium",
    "url": "https://medium.com/@sandeep03edu/..."
  }
]
```

Add a GitHub link to an experience entry:

```json
{ "id": "ramsena", "company": "Shree Ramsena", "github": "https://github.com/Sandeep03edu/Ramsena", ... }
```

Add a link button to a project:

```json
"links": [
  { "label": "GitHub", "url": "https://github.com/Sandeep03edu/..." },
  { "label": "Demo", "url": "https://..." }
]
```

The icon is chosen automatically from the label or URL: GitHub, Play Store, Medium, YouTube, Certificate, Demo, Screenshots, Web App, Desktop App and Mobile App.

## Commands

```bash
npm install        # once
npm run dev        # local preview with live reload
npm run build      # validate content, type-check, build to dist/
npm run preview    # serve the built site at http://localhost:4173/Portfolio/
npm run deploy     # build and publish dist/ to the gh-pages branch (goes live)
```

`npm run deploy` publishes to the `gh-pages` branch of this repository. GitHub Pages serves that branch, so the URL stays https://sandeep03edu.github.io/Portfolio/.
