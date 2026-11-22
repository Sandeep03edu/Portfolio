import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { readFileSync } from "node:fs";

// Fills SEO / social tags in index.html from content/portfolio.json,
// so personal details live only in the content file.
function contentMeta(): Plugin {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return {
    name: "content-meta",
    transformIndexHtml(html) {
      const c = JSON.parse(readFileSync(new URL("./content/portfolio.json", import.meta.url), "utf8"));
      const image = c.site.ogImage ? `${c.site.url}images/${c.site.ogImage}` : "";
      const sameAs = Object.entries(c.links as Record<string, string>)
        .filter(([k, v]) => v && k !== "email" && k !== "resume")
        .map(([, v]) => v);
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: c.profile.name,
        jobTitle: c.profile.title,
        worksFor: { "@type": "Organization", name: c.profile.company },
        alumniOf: c.education.map((e: { institution: string }) => ({ "@type": "EducationalOrganization", name: e.institution })),
        url: c.site.url,
        email: `mailto:${c.links.email}`,
        image,
        sameAs,
      };
      const tags = [
        `<title>${esc(c.site.title)}</title>`,
        `<meta name="description" content="${esc(c.site.description)}" />`,
        `<meta name="author" content="${esc(c.profile.name)}" />`,
        `<link rel="canonical" href="${esc(c.site.url)}" />`,
        `<meta property="og:type" content="profile" />`,
        `<meta property="og:title" content="${esc(c.site.title)}" />`,
        `<meta property="og:description" content="${esc(c.site.description)}" />`,
        `<meta property="og:url" content="${esc(c.site.url)}" />`,
        image && `<meta property="og:image" content="${esc(image)}" />`,
        `<meta name="twitter:card" content="summary" />`,
        `<meta name="twitter:title" content="${esc(c.site.title)}" />`,
        `<meta name="twitter:description" content="${esc(c.site.description)}" />`,
        `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, "\\u003c")}</script>`,
      ]
        .filter(Boolean)
        .join("\n    ");
      return html.replace("<!-- content-meta -->", tags);
    },
  };
}

export default defineConfig({
  base: "/Portfolio/",
  plugins: [react(), contentMeta()],
});
