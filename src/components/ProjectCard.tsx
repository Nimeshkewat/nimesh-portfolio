import { motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { Reveal } from "./Reveal";
import { ArrowUpRightIcon, GitHubIcon } from "./Icons";

export function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <Reveal className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className={`${reverse ? "md:order-2" : ""}`}>
        <div className="group relative rounded-lg border border-border light:border-border-light overflow-hidden bg-surface light:bg-surface-light">
          <img
            src={project.image}
            alt={`${project.title} preview screenshot`}
            className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
      </div>

      <div className={`${reverse ? "md:order-1" : ""}`}>
        <h3 className="font-display font-semibold text-2xl md:text-[1.7rem] text-text light:text-text-light">
          {project.title}
        </h3>
        <p className="mt-3 text-muted light:text-muted-light leading-relaxed">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-text light:text-text-light"
            >
              <span className="mt-2 h-1 w-1 rounded-full bg-accent shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs px-2.5 py-1 rounded border border-border-soft light:border-border-light text-muted light:text-muted-light"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-4">
          <motion.a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2.5 rounded-md bg-accent-button text-bg hover:brightness-110 transition-[filter]"
          >
            Live Demo
            <ArrowUpRightIcon className="h-3.5 w-3.5" />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2.5 rounded-md border border-border light:border-border-light text-text light:text-text-light hover:border-accent/60 hover:text-accent transition-colors"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </motion.a>
        </div>
      </div>
    </Reveal>
  );
}
