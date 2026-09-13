import { skillGroups } from "@/data/skills";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 md:py-32 border-t border-border-soft light:border-border-light"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-xl">
          <p className="font-mono text-sm text-accent mb-3">Skills</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-text light:text-text-light">
            Tools I reach for
          </h2>
          <p className="mt-4 text-muted light:text-muted-light leading-relaxed">
            A working toolkit spanning interface, API, and deployment — the
            layers a full-stack application is made of.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.1}>
              <div className="h-full rounded-lg border border-border light:border-border-light bg-surface light:bg-surface-light p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1">
                <h3 className="font-mono text-xs text-muted-dim mb-5">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md border border-border-soft light:border-border-light text-text light:text-text-light bg-bg/60 light:bg-bg-light transition-transform duration-200 hover:scale-105 hover:border-accent/40"
                    >
                      <item.icon
                        className="h-4 w-4 shrink-0"
                        style={{ color: item.color }}
                        aria-hidden="true"
                      />
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
