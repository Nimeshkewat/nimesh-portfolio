import { projects } from '@/data/projects'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 border-t border-border-soft light:border-border-light">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-xl">
          <p className="font-mono text-sm text-accent mb-3">Projects</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-text light:text-text-light">
            Featured work
          </h2>
          <p className="mt-4 text-muted light:text-muted-light leading-relaxed">
            Two full-stack applications built end to end — from interface, to API, to database.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
