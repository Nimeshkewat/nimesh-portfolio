import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { useTheme } from "@/lib/theme";
import { MenuIcon, CloseIcon, SunIcon, MoonIcon } from "./Icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          scrolled && !open
            ? "bg-bg/85 light:bg-bg-light/85 backdrop-blur-md border-b border-border light:border-border-light"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="font-display font-semibold text-lg tracking-tight text-text light:text-text-light"
          >
            Nimesh<span className="text-accent">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm text-muted light:text-muted-light hover:text-text light:hover:text-text-light transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              className="h-9 w-9 grid place-items-center rounded-full border border-border light:border-border-light text-muted light:text-muted-light hover:text-accent hover:border-accent/50 transition-colors"
            >
              {theme === "dark" ? (
                <SunIcon className="h-4 w-4" />
              ) : (
                <MoonIcon className="h-4 w-4" />
              )}
            </button>
            <a
              href="#projects"
              className="text-sm font-medium px-4 py-2 rounded-md bg-accent-button text-on-accent hover:brightness-110 hover:-translate-y-0.5 transition"
            >
              View Projects
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              className="h-9 w-9 grid place-items-center rounded-full border border-border light:border-border-light text-muted light:text-muted-light"
            >
              {theme === "dark" ? (
                <SunIcon className="h-4 w-4" />
              ) : (
                <MoonIcon className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="h-9 w-9 grid place-items-center rounded-md border border-border light:border-border-light text-text light:text-text-light"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-bg light:bg-bg-light">
          <div className="flex items-center justify-between px-6 h-16 border-b border-border light:border-border-light">
            <span className="font-display font-semibold text-lg text-text light:text-text-light">
              Nimesh<span className="text-accent">.</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-9 w-9 grid place-items-center rounded-md border border-border light:border-border-light text-text light:text-text-light"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>
          <ul className="flex flex-col px-6 py-8 gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-text light:text-text-light"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="#projects"
                onClick={() => setOpen(false)}
                className="inline-block text-sm font-medium px-5 py-2.5 rounded-md bg-accent-button text-on-accent"
              >
                View Projects
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
