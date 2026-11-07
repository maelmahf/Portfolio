import config from '../site.config.js'

// Shared by the router, page headers and static build.
export const PAGES = {
  work: {
    title: 'Projects',
    file: 'projects.md',
    description:
      'Projects across full-stack applications, APIs, automation, infrastructure, and systems programming.',
  },
  timeline: {
    title: 'Timeline',
    file: 'timeline.md',
    description:
      'The full graph: work, education, trainings, startups and speaking. Follow each branch from its first commit to where it merges, or filter by track.',
  },
  soul: {
    title: config.soul.title,
    file: 'soul.md',
    description: config.soul.description,
  },
  more: {
    title: 'Contact',
    file: 'remotes.md',
    description: 'Find my code, connect on LinkedIn, or get in touch by email.',
  },
}
