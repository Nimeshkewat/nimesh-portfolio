import { site } from '@/data/site'
import { GitHubIcon, LinkedInIcon } from './Icons'

export function Footer() {
  return (
    <footer className="border-t border-border-soft light:border-border-light py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-dim text-center sm:text-left">
          © 2026 Nimesh. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted light:text-muted-light hover:text-accent transition-colors"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted light:text-muted-light hover:text-accent transition-colors"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
