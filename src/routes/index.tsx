import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import projCampus from "@/assets/project-campus.jpg";
import projAi from "@/assets/project-ai.jpg";
import projMaze from "@/assets/project-maze.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anwar Ben Brahim — Computer Science Engineering Student" },
      {
        name: "description",
        content:
          "Portfolio of Anwar Ben Brahim, a computer science engineering student. Projects, skills, education and contact.",
      },
      {
        property: "og:title",
        content: "Anwar Ben Brahim — Computer Science Engineering Student",
      },
      {
        property: "og:description",
        content:
          "Projects, skills, education and contact — the portfolio of a CS engineering student.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

/* ------------------------------------------------------------------ */
/* Data — edit these values to make the portfolio yours               */
/* ------------------------------------------------------------------ */

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

const STATS = [
  { value: "3+", label: "Years writing code" },
  { value: "10+", label: "Projects & labs" },
  { value: "3", label: "Spoken languages" },
];

const FACTS = [
  "Based in Tunisia",
  "Open to internships",
  "Arabic · French · English",
];

const SKILL_GROUPS = [
  {
    index: "01",
    title: "Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript / TypeScript"],
  },
  {
    index: "02",
    title: "Web & Data",
    items: ["HTML & CSS", "React", "Node.js", "SQL", "MongoDB"],
  },
  {
    index: "03",
    title: "Tools & CS Core",
    items: [
      "Git & GitHub",
      "Linux",
      "Data structures & algorithms",
      "Object-oriented programming",
      "Networks",
    ],
  },
];

const PROJECTS = [
  {
    title: "CampusConnect",
    tag: "React · Node.js · MySQL",
    description:
      "A club and event management platform for students — schedules, announcements and RSVPs in one place.",
    image: projCampus,
    links: [
      { label: "source", href: "#" },
      { label: "live demo", href: "#" },
    ],
  },
  {
    title: "Sentivue",
    tag: "Python · Flask · scikit-learn",
    description:
      "A sentiment analysis dashboard that classifies product reviews and visualizes trends over time.",
    image: projAi,
    links: [{ label: "source", href: "#" }],
  },
  {
    title: "Pathfindr",
    tag: "C++ · SDL",
    description:
      "An interactive visualizer for pathfinding algorithms — A*, Dijkstra and BFS racing on a live grid.",
    image: projMaze,
    links: [{ label: "source", href: "#" }],
  },
];

const TIMELINE = [
  {
    period: "2024 — Present",
    title: "Engineering degree in Computer Science",
    detail:
      "Focus on software engineering, algorithms and systems. Coursework: data structures, databases, operating systems.",
  },
  {
    period: "2022 — 2024",
    title: "Preparatory cycle — Mathematics & Physics",
    detail:
      "Two intensive years building the mathematical foundations that now back everything I build in code.",
  },
  {
    period: "Ongoing",
    title: "Hackathons & personal projects",
    detail:
      "Weekend builds, algorithm practice and open-source exploration — always shipping something new.",
  },
];

const BEYOND_CODE = [
  "Tech meetups",
  "Problem solving",
  "Chess",
  "Open-source",
  "Photography",
];

const CONTACT = {
  email: "anwar.benbrahim@example.com", // TODO: replace with your real email
  github: "#", // TODO: replace with https://github.com/<your-username>
  linkedin: "#", // TODO: replace with your LinkedIn profile URL
};

/* ------------------------------------------------------------------ */
/* Page                                                               */
/* ------------------------------------------------------------------ */

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(700px 500px at 85% -5%, oklch(0.815 0.152 75 / 9%), transparent 60%), radial-gradient(600px 500px at 5% 35%, oklch(0.775 0.135 185 / 6%), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Nav />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Nav                                                                */
/* ------------------------------------------------------------------ */

function Nav() {
  return (
    <header className="sticky top-0 z-40 -mx-5 border-b border-border bg-background/80 px-5 backdrop-blur-md sm:-mx-8 sm:px-8">
      <nav className="flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          anwar<span className="text-primary">.</span>dev
        </a>
        <div className="hidden items-center gap-7 font-mono text-[13px] text-muted-foreground md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label.toLowerCase()}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          get in touch
        </a>
      </nav>
    </header>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                               */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section id="top" className="grid-bg -mx-5 px-5 pb-16 pt-14 sm:-mx-8 sm:px-8 lg:pb-24 lg:pt-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="fade-up">
          <p className="font-mono text-[13px] uppercase tracking-[0.2em] text-primary">
            ~/anwar — computer science engineering student
          </p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Anwar Ben Brahim<span className="text-primary">.</span>
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg text-muted-foreground text-pretty">
            I turn curiosity into working software — from algorithms on paper to
            full-stack apps in the browser. Currently studying, building and
            shipping one project at a time.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="glow-primary inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              view my projects
              <ArrowIcon />
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              get in touch
            </a>
          </div>
          <dl className="mt-12 flex flex-wrap gap-10 border-t border-border pt-8">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-3xl font-bold tracking-tight">
                  {stat.value}
                </dd>
                <dd className="mt-1 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="fade-up" style={{ animationDelay: "120ms" }}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
              <span className="size-3 rounded-full bg-primary/70" />
              <span className="size-3 rounded-full bg-accent/60" />
              <span className="size-3 rounded-full bg-muted-foreground/40" />
              <span className="ml-2 font-mono text-[11px] text-muted-foreground">
                anwar — portfolio.sh
              </span>
            </div>
            <img
              src={heroImg}
              alt="Abstract network of glowing amber nodes"
              width={1024}
              height={1280}
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

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
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
  return (
    <section id="about" className="border-t border-border py-16 lg:py-20">
      <SectionHeading eyebrow="about" title="Who I am" />
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="max-w-[52ch] text-lg leading-relaxed text-muted-foreground text-pretty">
            I'm Anwar, a computer science engineering student who likes the part
            of the machine you can't see. I spend my days studying algorithms
            and systems, and my nights turning course concepts into small,
            working products — because the best way to understand something is
            to build it.
          </p>
          <p className="mt-5 max-w-[52ch] leading-relaxed text-muted-foreground text-pretty">
            Right now I'm deepening my knowledge of software architecture and
            web development, while looking for internship opportunities where I
            can contribute to real projects and learn from experienced
            engineers.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            {FACTS.map((fact) => (
              <span
                key={fact}
                className="rounded-full bg-secondary px-3.5 py-1.5 font-mono text-[13px] text-secondary-foreground"
              >
                {fact}
              </span>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-border bg-card p-6 font-mono text-[13px] leading-relaxed">
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> cat about.txt
            </p>
            <p className="mt-3 text-foreground/90">
              engineering student · problem solver · self-taught builder
            </p>
            <p className="mt-3 text-muted-foreground">
              <span className="text-primary">$</span> current_focus
            </p>
            <p className="text-foreground/90">
              software engineering · web development · algorithms
            </p>
            <p className="mt-3 text-muted-foreground">
              <span className="text-primary">$</span>{" "}
              <span className="blink inline-block h-4 w-2 translate-y-0.5 bg-primary" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Skills                                                             */
/* ------------------------------------------------------------------ */

function Skills() {
  return (
    <section id="skills" className="border-t border-border py-16 lg:py-20">
      <SectionHeading eyebrow="skills" title="What I work with" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.index}
            className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
          >
            <p className="font-mono text-[12px] text-muted-foreground">
              {group.index} — {group.title.toLowerCase()}
            </p>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm">
                  <span className="size-1.5 shrink-0 rounded-full bg-primary" />
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
/* Projects                                                           */
/* ------------------------------------------------------------------ */

function Projects() {
  return (
    <section id="projects" className="border-t border-border py-16 lg:py-20">
      <SectionHeading eyebrow="projects" title="Selected projects" />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-transform hover:-translate-y-1"
          >
            <img
              src={project.image}
              alt={`${project.title} preview`}
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
              <div className="mt-5 flex items-center gap-4 font-mono text-[13px]">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                    <ArrowIcon className="size-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-6 font-mono text-[12px] text-muted-foreground">
        + more coursework projects, scripts and experiments on GitHub — see the
        links below.
      </p>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Education                                                          */
/* ------------------------------------------------------------------ */

function Education() {
  return (
    <section id="education" className="border-t border-border py-16 lg:py-20">
      <SectionHeading eyebrow="education" title="My journey" />
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <ol className="max-w-2xl space-y-0 border-l border-border lg:col-span-8">
          {TIMELINE.map((item, i) => (
            <li key={item.title} className="relative pb-9 pl-8 last:pb-0">
              <span
                className={`absolute -left-[5px] top-1.5 size-2.5 rounded-full ring-4 ring-background ${
                  i === 0 ? "bg-primary" : "bg-accent"
                }`}
              />
              <p className="font-mono text-[12px] text-muted-foreground">
                {item.period}
              </p>
              <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                {item.detail}
              </p>
            </li>
          ))}
        </ol>
        <div className="lg:col-span-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-[12px] uppercase tracking-wider text-muted-foreground">
              beyond the code
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {BEYOND_CODE.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {item}
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
/* Contact                                                            */
/* ------------------------------------------------------------------ */

function Contact() {
  return (
    <section id="contact" className="border-t border-border py-16 lg:py-20">
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
            $ contact --now
          </p>
          <h2 className="mt-4 max-w-[20ch] font-display text-3xl font-bold leading-tight tracking-tight text-balance sm:text-5xl">
            Let's build something together.
          </h2>
          <p className="mt-4 max-w-[46ch] text-muted-foreground text-pretty">
            Looking for internships, collaborations on student projects, or just
            a good conversation about code — my inbox is open.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <MailIcon />
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.github}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <GitHubIcon />
              github
            </a>
            <a
              href={CONTACT.linkedin}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <LinkedInIcon />
              linkedin
            </a>
          </div>
          <p className="mt-8 font-mono text-[12px] text-muted-foreground">
            I read every message — expect a reply within a day.
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
  return (
    <footer className="flex flex-col gap-2 border-t border-border py-7 font-mono text-[12px] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
      <span>© 2026 Anwar Ben Brahim — designed & built with care</span>
      <span>
        <span className="text-primary">status</span> : open to internships
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

function GitHubIcon() {
  return (
    <svg
      className="size-4 shrink-0"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
    >
      <path d="M8 1a7 7 0 00-2.22 13.65c.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.81-.78-1.03-.78-1.03-.64-.43.05-.42.05-.42.7.05 1.08.72 1.08.72.63 1.08 1.65.77 2.05.59.07-.46.25-.77.45-.95-1.55-.18-3.19-.78-3.19-3.46 0-.77.28-1.4.72-1.9-.07-.17-.31-.88.07-1.83 0 0 .58-.19 1.91.71a6.63 6.63 0 013.48 0c1.32-.9 1.9-.71 1.9-.71.39.95.15 1.66.08 1.83.45.5.72 1.13.72 1.9 0 2.69-1.64 3.28-3.2 3.45.26.22.48.65.48 1.32v1.96c0 .19.13.41.49.34A7 7 0 008 1z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      className="size-4 shrink-0"
      viewBox="0 0 16 16"
      fill="currentColor"
      aria-hidden
    >
      <path d="M3.4 2a1.4 1.4 0 110 2.8 1.4 1.4 0 010-2.8zM2.2 6h2.4v8H2.2V6zm4 0h2.3v1.1h.03c.32-.6 1.1-1.24 2.27-1.24C13.2 5.86 14 7 14 9.06V14h-2.4v-4.35c0-1.04-.02-2.37-1.45-2.37-1.45 0-1.67 1.13-1.67 2.3V14H6.2V6z" />
    </svg>
  );
}
