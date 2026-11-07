// ============================================================================
// site.config.js — everything that makes this site yours.
//
// This is the only file you have to edit to put your own name on the site.
// Your timeline lives in content/timeline/*.md, your posts in content/blog/*.md
// your projects in content/projects.md, your research in content/research.md,
// and your personal philosophy in content/soul.md. Spoken languages live here.
// ============================================================================

export default {
  // ---------------------------------------------------------------- identity
  identity: {
    // The header crumb reads "handle / repo", like a repository page.
    handle: 'maelmahf',
    repo: 'maelmahf.dev',

    // One letter for the circular avatar next to the crumb.
    avatar: 'M',

    // The README hero.
    name: 'Mohammed Elmahfoudi',
    tagline: "I'm a software engineering student at 1337-UM6P (42 Network) Coding School, seeking a software engineering internship. I build web applications, APIs, and automation with Python, TypeScript, and JavaScript, supported by a foundation in systems programming.",

    // What you do, in the words a recruiter would search for. Search engines
    // and AI assistants read it as your job title; it is not shown on the page.
    jobTitle: 'Software Engineering Student',

    // The pull quote under the tagline. Explains the graph to a first-time
    // reader; rewrite it in your own voice or set it to null to hide it.
    blurb: 'Learning by building — from an idea and a data model to a working application.',

    // The green-dot status line. Set status to null to hide the whole row.
    status: 'now · student at 1337-UM6P · seeking a SWE internship',
    location: 'Morocco',

    email: 'mohammedelmahfoudi2004@gmail.com',

    // The repo this site is built from — the header's Fork button. Set it to
    // null to hide the button.
    source: 'https://github.com/maelmahf/landing-graph',
  },

  // -------------------------------------------------------------------- soul
  // The personal page at /soul/. Its body lives in content/soul.md; these
  // strings label the page, navigation tab and search/share previews.
  soul: {
    title: 'About me',
    description: 'Software engineering student, hands-on builder, and aspiring SWE intern — my background, projects, and interests.',
    updated: '2026-11-07',
  },

  // ------------------------------------------------------------------- links
  // Rendered as the `git remote -v` table in the Contact section, in this
  // order. Sections elsewhere look these up by name: "medium" is the Writing
  // section's link, "researchgate" is the Research section's, "github" is the
  // header crumb and "linkedin" is the LinkedIn button. Add, remove or reorder
  // freely — a missing name just hides whatever renders it.
  links: [
    { name: 'origin', url: 'mailto:mohammedelmahfoudi2004@gmail.com', kind: 'email' },
    { name: 'github', url: 'https://github.com/maelmahf', kind: 'fetch' },
    { name: 'linkedin', url: 'https://linkedin.com/in/maelmahf', kind: 'fetch' },
  ],

  // --------------------------------------------------------------------- seo
  // The build writes these into the html of every page it emits, and the app
  // keeps them in step as the router moves. Nothing here is duplicated by
  // hand anywhere else.
  seo: {
    // Where the site is served from, no trailing slash.
    //
    // This is the one line the rest of the site hangs off: its path is the
    // base every link and asset is built against, and its origin is what
    // canonical urls, og:url, the share image and sitemap.xml are made
    // absolute with.
    //
    // The custom domain the repo's Pages site answers on. On a fork with no
    // domain this is the project url instead — 'https://you.github.io/repo'
    // — and the base path follows it; nothing else changes.
    url: 'https://maelmahf.dev',

    // The <title> of the README, and the headline on every share card for
    // it. The header crumb is not this: that is identity.handle / repo, and
    // it stays a repository breadcrumb. This is what a search result says,
    // so write the words someone would actually type to find you — a handle
    // and a domain are not among them. Leave it out and the crumb is used.
    title: 'Mohammed Elmahfoudi | Software Engineering Student',

    description: 'Software engineering student at 1337-UM6P (42 Network) in Morocco seeking a SWE internship. Projects in full-stack development, APIs, automation, and infrastructure.',

    // The picture shown when a link is posted to LinkedIn, X or Slack.
    // A path under public/, or a full url. 1200x630 is the safe size.
    // Empty means links share without a picture.
    //
    // public/og.png is generated from public/favicon-default.svg and the
    // identity above — run `npm run og` after changing either.
    image: '/og.png',

    // What the share image shows, for people who cannot see it. Leave it out
    // and the title above is used.
    imageAlt: 'Mohammed Elmahfoudi, software engineering student — maelmahf.dev',

    themeColor: '#0d1117',
  },

  // ------------------------------------------------------------------ tracks
  // One entry per file in content/timeline/. `key` IS the filename:
  // key 'work' reads content/timeline/work.md.
  //
  // Adding a track is one entry here plus one markdown file — no CSS, no
  // code. Removing one is deleting both. A file with no entry, or an entry
  // with no file, shows up in the warning banner above the graph instead of
  // failing silently.
  //
  //   key        filename in content/timeline/, and the CSS class
  //   label      shown in the filter legend and on each card
  //   color      branch color in dark mode
  //   colorLight branch color in light mode (optional — falls back to color)
  //   continuous all entries ride ONE shared branch that forks at the first
  //              and stays open, each entry a commit on it. Good for
  //              recurring activity: talks, teaching, writing. Default false,
  //              which gives every entry its own branch.
  tracks: [
    { key: 'work', label: 'work', color: '#3fb950', colorLight: '#1a7f37' },
    { key: 'education', label: 'education', color: '#58a6ff', colorLight: '#0969da' },
    { key: 'trainings', label: 'trainings', color: '#a371f7', colorLight: '#8250df' },
    { key: 'startups', label: 'entrepreneurship', color: '#f0883e', colorLight: '#bc4c00' },
    {
      key: 'speaking',
      label: 'speaking',
      color: '#db61a2',
      colorLight: '#bf3989',
      continuous: true,
    },
  ],

  // -------------------------------------------------------------------- note
  // The GitHub-style Note callout at the foot of the README hero — the place
  // to tell a first-time reader where new work shows up first. Set the whole
  // block to null to hide it.
  //
  //   link   which remote in links[] it points at, by name. A name that is
  //          not there hides the callout, same as everywhere else.
  //   label  the text on the link at the bottom of the callout
  //   text   the callout itself
  note: null,

  // -------------------------------------------------------- spoken languages
  // Shown in Contact. The coloured segments are decorative; levels are text.
  spokenLanguages: [],

  // ------------------------------------------------------------------ footer
  footer: {
    // {year} is replaced with the current year.
    text: '© {year} Mohammed Elmahfoudi · Morocco',
    note: 'rendered from `git log --graph --all` · v2.0',
  },
}
