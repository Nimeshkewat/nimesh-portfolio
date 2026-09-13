import { Reveal } from "./Reveal";

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-border-soft light:border-border-light"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-20">
          <div>
            <p className="font-mono text-sm text-accent mb-3">About</p>
            <h2 className="font-display font-semibold text-3xl md:text-4xl tracking-tight text-text light:text-text-light">
              Building the full picture
            </h2>
          </div>

          <div className="space-y-5 text-[15px] sm:text-base leading-relaxed text-muted light:text-muted-light max-w-2xl">
            <p>
              I&apos;m a full-stack developer who enjoys building complete web
              applications and understanding how the different parts of an
              application work together — from the interface a user sees to the
              API and database behind it.
            </p>
            <p>
              My main focus is the{" "}
              <span className="text-text light:text-text-light">
                MERN stack with TypeScript
              </span>
              . I work with React on the frontend and Node.js/Express on the
              backend, with MongoDB for data storage.
            </p>
            <p>
              I&apos;ve also been learning and applying Docker, GitHub Actions,
              and CI/CD pipelines, along with cloud deployment on platforms like
              Render and Vercel, so I can understand the complete development
              and deployment lifecycle — not just the code.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
