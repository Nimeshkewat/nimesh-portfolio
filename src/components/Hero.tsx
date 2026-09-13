import { motion, type Variants } from "framer-motion";
import { site } from "@/data/site";
import { ArrowUpRightIcon, GitHubIcon, FileIcon } from "./Icons";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden"
    >
      <div
        className="absolute inset-0 grid-fade pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="min-w-0"
        >
          <motion.p
            variants={item}
            className="font-mono text-sm text-accent mb-5"
          >
            Full-Stack Web Developer
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display font-semibold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.15] sm:leading-[1.08] tracking-tight text-balance text-text light:text-text-light"
          >
            Hi, I&apos;m Nimesh.
            <br className="hidden sm:block" /> I build modern full-stack web
            applications.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base sm:text-lg text-muted light:text-muted-light leading-relaxed"
          >
            {site.role} specializing in React, TypeScript, Node.js, Express, and
            MongoDB. I build scalable applications from frontend interfaces to
            backend APIs and deployment.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-md bg-accent-button text-on-accent hover:brightness-110 transition-[filter]"
            >
              View My Projects
            </motion.a>
            <motion.a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 text-sm font-medium px-5 py-3 rounded-md border border-border light:border-border-light text-text light:text-text-light hover:border-accent/60 hover:text-accent transition-colors"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </motion.a>
          </motion.div>

          <motion.a
            variants={item}
            href={site.resume}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted light:text-muted-light hover:text-accent transition group"
          >
            <FileIcon className="h-4 w-4" />
            Download Resume
            <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>

        <motion.div
          className="relative min-w-0"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
        >
          <div className="rounded-lg border border-border light:border-border-light bg-surface light:bg-surface-light shadow-2xl shadow-black/30 overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border light:border-border-light bg-surface-raised light:bg-bg-light">
              <span className="h-2.5 w-2.5 rounded-full bg-[#4a5060]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4a5060]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#4a5060]" />
              <span className="ml-3 font-mono text-xs text-muted-dim">
                nimesh.ts
              </span>
            </div>
            <pre className="p-4 sm:p-6 font-mono text-[11px] sm:text-[13px] leading-6 sm:leading-7 overflow-x-auto whitespace-pre">
              <code>
                <span className="text-muted-dim">01</span>
                <span className="text-blue"> const</span> developer{" "}
                <span className="text-muted-dim">=</span> {"{"}
                {"\n"}
                <span className="text-muted-dim">02</span>
                {"    "}name: <span className="text-accent">'Nimesh'</span>,
                {"\n"}
                <span className="text-muted-dim">03</span>
                {"    "}stack: <span className="text-accent">'MERN'</span> +{" "}
                <span className="text-accent">'TypeScript'</span>,{"\n"}
                <span className="text-muted-dim">04</span>
                {"    "}focus: [<span className="text-accent">'frontend'</span>,{" "}
                <span className="text-accent">'backend'</span>,{" "}
                <span className="text-accent">'deployment'</span>],{"\n"}
                <span className="text-muted-dim">05</span>
                {"    "}shipping: <span className="text-blue">true</span>
                {"\n"}
                <span className="text-muted-dim">06</span> {"}"}
                <span className="ml-1 inline-block w-1.75 h-3.75 align-middle bg-accent animate-[blink_1.1s_steps(1)_infinite]" />
              </code>
            </pre>
          </div>
          <div
            className="absolute -z-10 -bottom-8 -right-8 h-40 w-40 rounded-full bg-accent/10 blur-3xl float-slow"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  );
}
