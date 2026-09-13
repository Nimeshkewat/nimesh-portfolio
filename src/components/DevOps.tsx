import { Reveal } from "./Reveal";

const flow = [
  "Code",
  "Git",
  "GitHub",
  "Docker",
  "GitHub Actions",
  "Deployment",
];

export function DevOps() {
  return (
    <section className="py-24 md:py-32 border-t border-border-soft light:border-border-light">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-xl mb-14">
          <p className="font-mono text-sm text-accent mb-3">Delivery</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-text light:text-text-light">
            From Code to Deployment
          </h2>
          <p className="mt-4 text-muted light:text-muted-light leading-relaxed">
            I&apos;ve worked with Docker and CI/CD pipelines and understand
            automated build, test, and deployment workflows — not just how to
            write the code, but how it reaches production.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 md:gap-2">
          {flow.map((step, i) => (
            <Reveal
              key={step}
              delay={i * 0.08}
              className="flex items-center gap-3 md:gap-2"
            >
              <div className="rounded-md border border-border light:border-border-light bg-surface light:bg-surface-light px-4 py-3">
                <span className="font-mono text-sm text-text light:text-text-light">
                  {step}
                </span>
              </div>
              {i < flow.length - 1 && (
                <span className="text-muted-dim select-none" aria-hidden="true">
                  &rarr;
                </span>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
