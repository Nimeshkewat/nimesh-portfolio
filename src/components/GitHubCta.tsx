import { site } from "@/data/site";
import { GitHubIcon } from "./Icons";

export function GitHubCta() {
  return (
    <section className="py-24 md:py-28 border-t border-border-soft light:border-border-light">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-lg border border-border light:border-border-light bg-surface light:bg-surface-light px-8 py-14 md:px-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-lg">
            <h2 className="font-display font-semibold text-2xl md:text-3xl tracking-tight text-text light:text-text-light">
              I build, learn, and ship.
            </h2>
            <p className="mt-4 text-muted light:text-muted-light leading-relaxed">
              Most of my learning comes from building real applications and
              understanding how they work from frontend to backend and
              deployment.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-md bg-accent-button text-on-accent hover:brightness-110 transition"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-md border border-border light:border-border-light text-text light:text-text-light hover:border-accent/60 hover:text-accent transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
