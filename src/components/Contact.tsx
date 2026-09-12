import { site } from '@/data/site'
import { MailIcon, GitHubIcon, LinkedInIcon, FileIcon, ArrowUpRightIcon } from './Icons'

const links = [
  { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: MailIcon },
  { label: 'GitHub', value: 'View profile', href: site.github, icon: GitHubIcon },
  { label: 'LinkedIn', value: 'View profile', href: site.linkedin, icon: LinkedInIcon },
  { label: 'Resume', value: 'Download PDF', href: site.resume, icon: FileIcon },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border-soft light:border-border-light">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl mb-14">
          <p className="font-mono text-sm text-accent mb-3">Contact</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-text light:text-text-light">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-muted light:text-muted-light leading-relaxed">
            I&apos;m always interested in building interesting applications, learning new
            technologies, and connecting with other developers.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label === 'Email' ? undefined : '_blank'}
              rel={label === 'Email' ? undefined : 'noreferrer'}
              className="group flex items-center justify-between gap-4 rounded-lg border border-border light:border-border-light bg-surface light:bg-surface-light px-6 py-5 hover:border-accent/50 transition-colors"
            >
              <span className="flex items-center gap-4">
                <span className="h-10 w-10 shrink-0 grid place-items-center rounded-md bg-bg light:bg-bg-light text-accent">
                  <Icon className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm text-muted light:text-muted-light">{label}</span>
                  <span className="block text-text light:text-text-light">{value}</span>
                </span>
              </span>
              <ArrowUpRightIcon className="h-4 w-4 text-muted-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
