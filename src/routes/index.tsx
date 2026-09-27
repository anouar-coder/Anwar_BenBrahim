import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import heroImg from "@/assets/hero.jpg";

import { ParticleField } from "@/components/ParticleField";
import { PointerGlow } from "@/components/PointerGlow";
import { ScrollFX } from "@/components/ScrollFX";
import { DICTIONARIES } from "@/lib/i18n/dictionary";
import { useLocale } from "@/lib/i18n/useLocale";
import { DEFAULT_LOCALE, LOCALE_LABELS, LOCALES } from "@/lib/i18n/locale";

export const Route = createFileRoute("/")({
  head: ({ match }) => {
    const locale = match.context.locale ?? DEFAULT_LOCALE;
    const copy = DICTIONARIES[locale].meta;

    return {
      meta: [
        { title: copy.title },
        { name: "description", content: copy.description },
        { property: "og:title", content: copy.title },
        { property: "og:description", content: copy.ogDescription },
        { property: "og:type", content: "website" },
        {
          property: "og:locale",
          content: locale === "fr" ? "fr_FR" : "en_US",
        },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Portfolio,
});

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

function Portfolio() {
  const { copy } = useLocale();

  return (
    <div className="relative isolate min-h-screen overflow-x-clip bg-background text-foreground">
      <PointerGlow />
      <ScrollFX />

      {/* 3D particle network, behind the ambient glows and all content.
          The mask keeps the field out of the centre so body copy stays crisp. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-20"
        style={{
          maskImage:
            "radial-gradient(ellipse 68% 74% at 50% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.32) 30%, #000 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 68% 74% at 50% 50%, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.32) 30%, #000 70%)",
        }}
      >
        <ParticleField className="h-full w-full opacity-85" />
      </div>

      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-15"
        style={{
          background:
            "radial-gradient(700px 500px at 85% -5%, oklch(0.815 0.152 75 / 9%), transparent 60%), radial-gradient(600px 500px at 5% 35%, oklch(0.775 0.135 185 / 6%), transparent 60%)",
        }}
      />

      {/* Readability scrim: dark across the reading column, lighter at the
          margins so the particle field still reads as depth. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, oklch(0.148 0.013 260 / 40%) 0%, oklch(0.148 0.013 260 / 86%) 18%, oklch(0.148 0.013 260 / 90%) 82%, oklch(0.148 0.013 260 / 40%) 100%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <a
          href="#main"
          className="sr-only rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50"
        >
          {copy.a11y.skipToContent}
        </a>
        <Nav />
        <main id="main" tabIndex={-1}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Clubs />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Language switcher                                                  */
/* ------------------------------------------------------------------ */

function LanguageSwitcher() {
  const { locale, setLocale, copy } = useLocale();

  return (
    <div
      role="group"
      aria-label={copy.switcher.label}
      className="flex items-center gap-0.5 rounded-full border border-border p-0.5 font-mono text-[12px] font-medium"
    >
      {LOCALES.map((option) => {
        const isActive = option === locale;

        return (
          <button
            key={option}
            type="button"
            onClick={() => {
              if (!isActive) setLocale(option);
            }}
            aria-current={isActive ? "true" : undefined}
            className={
              isActive
                ? "rounded-full bg-primary px-2.5 py-1 font-semibold text-primary-foreground"
                : "px-2.5 py-1 text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            {LOCALE_LABELS[option]}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Nav                                                                */
/* ------------------------------------------------------------------ */

function Nav() {
  const { copy } = useLocale();

  return (
    <header className="sticky top-0 z-40 -mx-5 border-b border-border bg-background/80 px-5 backdrop-blur-md sm:-mx-8 sm:px-8">
      <nav className="flex h-16 items-center justify-between gap-4">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          anwar<span className="text-primary">.</span>benbrahim
        </a>
        <div className="hidden items-center gap-6 font-mono text-[13px] text-muted-foreground lg:flex">
          {copy.nav.items.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label.toLowerCase()}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {copy.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  const { copy } = useLocale();

  return (
    <section
      id="top"
      data-reveal
      className="grid-bg -mx-5 px-5 pb-16 pt-14 sm:-mx-8 sm:px-8 lg:pb-24 lg:pt-20"
    >
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="fade-up">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-primary">
            {copy.hero.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Anwar Ben Brahim<span className="text-primary">.</span>
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg text-muted-foreground text-pretty">
            {copy.hero.bio}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="glow-primary inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              {copy.hero.primaryCta}
              <ArrowIcon />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {copy.hero.secondaryCta}
            </a>
            <a
              href={CV_FILE}
              download="anwar-ben-brahim-cv.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <DownloadIcon />
              {copy.hero.cvCta}
            </a>
          </div>
        </div>

        <div className="fade-up" style={{ animationDelay: "120ms" }}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="size-3 rounded-full bg-primary/70" />
              <span className="size-3 rounded-full bg-accent/60" />
              <span className="size-3 rounded-full bg-muted-foreground/40" />
            </div>
            <img
              src={heroImg}
              alt={copy.hero.imageAlt}
              width={1079}
              height={1349}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section heading                                                    */
/* ------------------------------------------------------------------ */

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-primary">
        {"// "}
        {eyebrow}
      </p>
      <h2 className="mt-3 max-w-[30ch] font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* About                                                              */
/* ------------------------------------------------------------------ */

function About() {
  const { copy } = useLocale();

  return (
    <section id="about" data-reveal className="border-t border-border py-16 lg:py-20">
      <SectionHeading eyebrow={copy.about.eyebrow} title={copy.about.title} />
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          {copy.about.paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-[52ch] leading-relaxed text-muted-foreground text-pretty first:text-lg first:leading-relaxed [&+&]:mt-5"
            >
              {paragraph}
            </p>
          ))}
          <div className="mt-7 flex flex-wrap gap-2.5">
            {copy.about.facts.map((fact) => (
              <span
                key={fact}
                className="rounded-full bg-secondary px-3.5 py-1.5 font-mono text-[13px] text-secondary-foreground"
              >
                {fact}
              </span>
            ))}
          </div>
          <div className="mt-8">
            <p className="font-mono text-[12px] uppercase tracking-wider text-muted-foreground">
              {copy.about.interestsLabel}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {copy.about.interests.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-5">
          <TerminalPanel>
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> cat about.txt
            </p>
            <p className="mt-3 text-foreground/90">{copy.about.terminal.about}</p>
            <p className="mt-3 text-muted-foreground">
              <span className="text-primary">$</span> current_focus
            </p>
            <p className="text-foreground/90">{copy.about.terminal.focus}</p>
            <p className="mt-3 text-muted-foreground">
              <span className="text-primary">$</span> now
            </p>
            <p className="text-foreground/90">{copy.about.terminal.now}</p>
            <p className="mt-3 text-muted-foreground">
              <span className="text-primary">$</span>{" "}
              <span className="blink inline-block h-4 w-2 translate-y-0.5 bg-primary" />
            </p>
          </TerminalPanel>
        </div>
      </div>
    </section>
  );
}

function TerminalPanel({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 font-mono text-[13px] leading-relaxed">
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Skills                                                             */
/* ------------------------------------------------------------------ */

function Skills() {
  const { copy } = useLocale();

  return (
    <section id="skills" data-reveal className="border-t border-border py-16 lg:py-20">
      <SectionHeading eyebrow={copy.skills.eyebrow} title={copy.skills.title} />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {copy.skills.groups.map((group) => (
          <div
            key={group.index}
            className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
          >
            <p className="font-mono text-[12px] text-muted-foreground">
              {group.index} — {group.title.toLowerCase()}
            </p>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Experience                                                         */
/* ------------------------------------------------------------------ */

function Experience() {
  const { copy } = useLocale();

  return (
    <section id="experience" data-reveal className="border-t border-border py-16 lg:py-20">
      <SectionHeading eyebrow={copy.experience.eyebrow} title={copy.experience.title} />
      <div className="mt-10 space-y-5">
        {copy.experience.items.map((job, i) => (
          <article key={job.org} className="rounded-2xl border border-border bg-card p-6 sm:p-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">{job.role}</h3>
                <p className="mt-0.5 text-sm text-primary">
                  {job.org}
                  <span className="text-muted-foreground"> · {job.location}</span>
                </p>
              </div>
              <p className="font-mono text-[12px] text-muted-foreground">
                {String(i + 1).padStart(2, "0")} — {job.period}
              </p>
            </div>
            <ul className="mt-4 space-y-2">
              {job.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Projects                                                           */
/* ------------------------------------------------------------------ */

function Projects() {
  const { copy } = useLocale();

  return (
    <section id="projects" data-reveal className="border-t border-border py-16 lg:py-20">
      <SectionHeading eyebrow={copy.projects.eyebrow} title={copy.projects.title} />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {copy.projects.featured.map((project, i) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-transform hover:-translate-y-1"
          >
            <img
              src={project.image}
              alt={copy.projects.previewAlt(project.title)}
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="flex grow flex-col p-6">
              <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
                {String(i + 1).padStart(2, "0")} — {project.tag}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 grow text-sm leading-relaxed text-muted-foreground text-pretty">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {copy.projects.more.map((project) => (
          <div key={project.title} className="rounded-2xl border border-border bg-card/50 p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-primary">
              {project.tag}
            </p>
            <h3 className="mt-1.5 font-display text-base font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground text-pretty">
              {project.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Education                                                          */
/* ------------------------------------------------------------------ */

function Education() {
  const { copy } = useLocale();

  return (
    <section id="education" data-reveal className="border-t border-border py-16 lg:py-20">
      <SectionHeading eyebrow={copy.education.eyebrow} title={copy.education.title} />
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <ol className="max-w-2xl space-y-0 border-l border-border lg:col-span-8">
          {copy.education.items.map((item, i) => (
            <li key={item.title} className="relative pb-9 pl-8 last:pb-0">
              <span
                className={`absolute -left-[5px] top-1.5 size-2.5 rounded-full ring-4 ring-background ${
                  i === 0 ? "bg-primary" : "bg-accent"
                }`}
              />
              <p className="font-mono text-[12px] text-muted-foreground">{item.period}</p>
              <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
        <div className="space-y-4 lg:col-span-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-[12px] uppercase tracking-wider text-muted-foreground">
              {copy.education.certifications.label}
            </p>
            <ul className="mt-4 space-y-2.5">
              {copy.education.certifications.items.map((cert) => (
                <li key={cert} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-[12px] uppercase tracking-wider text-muted-foreground">
              {copy.education.languages.label}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {copy.education.languages.items.map((language) => (
                <span
                  key={language}
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Clubs & social life                                                */
/* ------------------------------------------------------------------ */

function Clubs() {
  const { copy } = useLocale();

  return (
    <section id="clubs" data-reveal className="border-t border-border py-16 lg:py-20">
      <SectionHeading eyebrow={copy.clubs.eyebrow} title={copy.clubs.title} />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {copy.clubs.items.map((club) => (
          <div
            key={club.org + club.period}
            className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
          >
            <p className="font-mono text-[12px] text-muted-foreground">{club.period}</p>
            <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">{club.org}</h3>
            <p className="mt-0.5 text-sm text-primary">{club.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
              {club.detail}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-border bg-card p-6">
        <p className="font-mono text-[12px] uppercase tracking-wider text-muted-foreground">
          {copy.clubs.softSkills.label}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {copy.clubs.softSkills.items.map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Contact                                                            */
/* ------------------------------------------------------------------ */

const CV_FILE = "/cv-anwar-ben-brahim.pdf";

const CONTACT = {
  email: "anwar.benbrahim@etudiant-enit.utm.tn",
  github: "https://github.com/anouar-coder",
  linkedin: "https://www.linkedin.com/in/anwar-ben-brahim-68626034a/",
};

function Contact() {
  const { copy } = useLocale();

  return (
    <section id="contact" data-reveal className="border-t border-border py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-14">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(420px 260px at 88% 0%, oklch(0.815 0.152 75 / 16%), transparent 65%)",
          }}
        />
        <div className="relative">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-primary">
            {copy.contact.eyebrow}
          </p>
          <h2 className="mt-4 max-w-[20ch] font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            {copy.contact.title}
          </h2>
          <p className="mt-4 max-w-[46ch] text-muted-foreground text-pretty">{copy.contact.body}</p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="glow-primary inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <MailIcon />
              {CONTACT.email}
            </a>

            <a
              href={CONTACT.github}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <GitHubIcon />
              {copy.contact.githubLabel}
            </a>
            <a
              href={CONTACT.linkedin}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <LinkedInIcon />
              {copy.contact.linkedinLabel}
            </a>
            <a
              href={CV_FILE}
              download="anwar-ben-brahim-cv.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <DownloadIcon />
              {copy.contact.cvLabel}
            </a>
          </div>
          <p className="mt-8 font-mono text-[12px] text-muted-foreground">
            {copy.contact.replyNote}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                             */
/* ------------------------------------------------------------------ */

function Footer() {
  const { copy } = useLocale();

  return (
    <footer className="flex flex-col gap-2 border-t border-border py-7 font-mono text-[12px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <span>{copy.footer.credit}</span>
      <span>
        <span className="text-primary">{copy.footer.statusLabel}</span> : {copy.footer.status}
      </span>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/* Icons                                                              */
/* ------------------------------------------------------------------ */

function ArrowIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      strokeWidth="1.6"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8h9m0 0L8.5 4.5M12 8l-3.5 3.5" />
    </svg>
  );
}

function DownloadIcon({ className = "size-4 shrink-0" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      strokeWidth="1.4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2.5v7m0 0 2.5-2.5M8 9.5 5.5 7M3.5 12.5h9" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="size-4 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      strokeWidth="1.4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 4h12v8H2zM2 4l6 5 6-5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      className="size-4 shrink-0"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      strokeWidth="1.4"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 3v3l2 1-2.5 2.5A7 7 0 008 12l2-2 1 2h3V6l-2-1-2 2a5 5 0 01-2-2l2-2h-2z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M8 1a7 7 0 00-2.22 13.65c.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.81-.78-1.03-.78-1.03-.64-.43.05-.42.05-.42.7.05 1.08.72 1.08.72.63 1.08 1.65.77 2.05.59.07-.46.25-.77.45-.95-1.55-.18-3.19-.78-3.19-3.46 0-.77.28-1.4.72-1.9-.07-.17-.31-.88.07-1.83 0 0 .58-.19 1.91.71a6.63 6.63 0 013.48 0c1.32-.9 1.9-.71 1.9-.71.39.95.15 1.66.08 1.83.45.5.72 1.13.72 1.9 0 2.69-1.64 3.28-3.2 3.45.26.22.48.65.48 1.32v1.96c0 .19.13.41.49.34A7 7 0 008 1z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="size-4 shrink-0" viewBox="0 0 16 16" fill="currentColor" aria-hidden>
      <path d="M3.4 2a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8zM2.2 6h2.4v8H2.2V6zm4 0h2.3v1.1h.03c.32-.6 1.1-1.24 2.27-1.24C13.2 5.86 14 7 14 9.06V14h-2.4v-4.35c0-1.04-.02-2.37-1.45-2.37-1.45 0-1.67 1.13-1.67 2.3V14H6.2V6z" />
    </svg>
  );
}
