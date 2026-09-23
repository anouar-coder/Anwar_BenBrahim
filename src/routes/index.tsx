import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import projMdr from "@/assets/project-ai.jpg";
import projEhealth from "@/assets/project-campus.jpg";
import projEeg from "@/assets/project-eeg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anwar Ben Brahim — Computer Engineering Student | AI & Cybersecurity" },
      {
        name: "description",
        content:
          "Portfolio of Anwar Ben Brahim, computer engineering student at ENIT — AI, machine learning and cybersecurity. Projects, experience, education and contact.",
      },
      {
        property: "og:title",
        content: "Anwar Ben Brahim — Computer Engineering Student | AI & Cybersecurity",
      },
      {
        property: "og:description",
        content:
          "Projects, experience, education and contact — computer engineering student at ENIT, focused on AI and cybersecurity.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

/* ------------------------------------------------------------------ */
/* Data — CV content                                                  */
/* ------------------------------------------------------------------ */

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#education" },
  { label: "Clubs", href: "#clubs" },
];

const STATS = [
  { value: "3", label: "Internships" },
  { value: "6", label: "Research & academic projects" },
  { value: "2", label: "Certifications" },
];

const FACTS = [
  "Tuni, Tunisia",
  "ENIT — computer engineering",
  "Arabic · French · English",
  "Open to internships",
];

const RESEARCH_INTERESTS = [
  "AI for cybersecurity",
  "Network & IoT security",
  "Intrusion & anomaly detection",
  "Explainable AI",
  "LLMs for security",
  "Intelligent threat detection",
];

const SKILL_GROUPS = [
  {
    index: "01",
    title: "AI & Data",
    items: [
      "Machine learning",
      "Deep learning",
      "Data mining",
      "Classification & anomaly detection",
      "Feature engineering",
      "Explainable AI (SHAP)",
    ],
  },
  {
    index: "02",
    title: "Cybersecurity & Networks",
    items: [
      "Network security",
      "Intrusion detection",
      "Network traffic analysis",
      "Threat detection & incident response",
      "Access control",
      "Malware analysis",
    ],
  },
  {
    index: "03",
    title: "Programming & Frameworks",
    items: [
      "Python",
      "Java · C / C#",
      "Scikit-learn · NFStream · SHAP",
      "Node.js / Express",
      "Java EE · MySQL",
    ],
  },
  {
    index: "04",
    title: "Tools",
    items: ["Linux", "Docker", "GitHub", "Wireshark", "AVISPA / HLPSL", "Ganache"],
  },
];

const EXPERIENCE = [
  {
    role: "AI-driven MDR platform",
    org: "RFC — Réseaux, Formation, Conseil",
    period: "06/2026 — 07/2026",
    location: "Tunis, Tunisia",
    points: [
      "Designed an AI-driven MDR platform for network threat detection and response in an isolated VirtualBox environment.",
      "Extracted network-flow features with NFStream and trained a Random Forest classifier for normal and multiple attack categories, with SHAP explainability and MITRE ATT&CK / D3FEND threat mapping.",
      "Built a real-time detection dashboard and semi-automated response mechanism with Flask, Socket.IO and iptables; integrated a local LLM (Ollama / Phi-3 Mini) to support security analysis.",
    ],
  },
  {
    role: "Botnet detection — real-time application",
    org: "YUCCAINFO",
    period: "07/2025 — 08/2025",
    location: "Sousse, Tunisia",
    points: [
      "Analyzed attacks targeting the RDP protocol and deployed a Docker-based testing lab simulating brute-force attacks, DoS and SSH tunneling.",
      "Analyzed system logs to identify and investigate traces of attacks.",
      "Studied security mechanisms including firewalls, VPNs and access-control measures.",
    ],
  },
  {
    role: "Software development intern",
    org: "OPUS LAB",
    period: "06/2025 — 07/2025",
    location: "Tunis, Tunisia",
    points: [
      "Contributed to two web projects, focusing on application communication flows and collaboration within development teams.",
    ],
  },
];

const FEATURED_PROJECTS = [
  {
    title: "AI-driven MDR Platform",
    tag: "Python · Flask · NFStream · SHAP",
    description:
      "Managed detection & response for network threats: Random Forest classification of attack categories, SHAP explainability, MITRE ATT&CK/D3FEND mapping and a real-time dashboard with semi-automated response.",
    image: projMdr,
    link: { label: "source", href: "https://github.com/anouar-coder" },
  },
  {
    title: "Inference-Based Access Control for e-Health",
    tag: "Final-Year Project · HLPSL · AVISPA",
    description:
      "Formal validation of access control in e-health systems, plus a blockchain prototype (Ethereum, Solidity, Ganache, Node.js) with immutable audit logs and off-chain storage of clinical data.",
    image: projEhealth,
    link: { label: "source", href: "https://github.com/anouar-coder" },
  },
  {
    title: "EEG Seizure Detection",
    tag: "Biomedical data mining · ML pipeline",
    description:
      "End-to-end data mining and machine learning pipeline transforming raw EEG signals into features for automatic seizure-period detection, with signal preprocessing, feature extraction and classification.",
    image: projEeg,
    link: { label: "source", href: "https://github.com/anouar-coder" },
  },
];

const MORE_PROJECTS = [
  {
    title: "Flood Risk Spatial Analysis",
    tag: "Random Forest · web mapping",
    detail:
      "Hybrid modelling combining physics-based flood simulation with a Random Forest classifier for coastal flood-risk assessment, with an interactive web mapping platform for spatial predictions.",
  },
  {
    title: "Botnet Detection Lab",
    tag: "Docker · log analysis",
    detail:
      "Docker-based testing lab simulating RDP brute-force attacks, DoS and SSH tunneling, with system-log analysis to investigate attack traces. (YUCCAINFO internship)",
  },
  {
    title: "Malware Analysis — PFA1",
    tag: "FLARE VM · REMnux",
    detail:
      "Static, dynamic and hybrid analysis of a ransomware variant in a controlled lab, using VirusTotal, PEStudio and Wireshark to investigate behaviour and network activity.",
  },
];

const EDUCATION = [
  {
    period: "09/2024 — Present",
    title: "Computer Engineering — ENIT",
    detail:
      "École Nationale d'Ingénieurs de Tunis, Tunisia. Focus on artificial intelligence, machine learning and cybersecurity & network security.",
  },
  {
    period: "Sep 2025 — Present",
    title: "Master's in Systems and Communications (SYSCOM)",
    detail:
      "École Nationale d'Ingénieurs de Tunis (ENIT) — Tunis, Tunisia.",
  },
  {
    period: "09/2022 — 06/2024",
    title: "Preparatory Cycle — Mathematics & Physics",
    detail:
      "Institut Préparatoire aux Études d'Ingénieurs de Nabeul (IPEIN) — Nabeul, Tunisia.",
  },
];

const CERTIFICATIONS = [
  "CCNAv7 — Introduction to Networks",
  "Opus Lab — Web Development",
];

const CLUBS = [
  {
    period: "09/2025 — 08/2026",
    role: "Senior Member / Client Project Manager",
    org: "ENIT Junior Entreprise",
    detail:
      "Managed client-oriented projects, contributed to two client projects and participated in professional events including Forum ENIT Entreprise.",
  },
  {
    period: "10/2024 — 08/2025",
    role: "Active member",
    org: "ENIT Junior Entreprise",
    detail:
      "Participated in various student projects, developing skills in project management, teamwork, collaboration and professionalism.",
  },
  {
    period: "Ongoing",
    role: "Cybersecurity workshops & CTFs",
    org: "SecuriNets ENIT",
    detail:
      "Participated in cybersecurity workshops and Capture The Flag (CTF) competitions.",
  },
];

const SOFT_SKILLS = [
  "Leadership & initiative",
  "Teamwork",
  "Analytical & critical thinking",
  "Problem solving",
  "Independent learning",
  "Adaptability",
  "Scientific curiosity",
  "Communication & negotiation",
];

const CONTACT = {
  email: "anwar.benbrahim@etudiant-enit.utm.tn",
  phone: "+216 27 213 968",
  phoneHref: "tel:+21627213968",
  github: "https://github.com/anouar-coder",
  linkedin: "https://linkedin.com/in/anwar-ben-brahim-68626034a",
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
/* Nav                                                                */
/* ------------------------------------------------------------------ */

function Nav() {
  return (
    <header className="sticky top-0 z-40 -mx-5 border-b border-border bg-background/80 px-5 backdrop-blur-md sm:-mx-8 sm:px-8">
      <nav className="flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          anwar<span className="text-primary">.</span>dev
        </a>
        <div className="hidden items-center gap-6 font-mono text-[13px] text-muted-foreground lg:flex">
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
            ~/anwar — computer engineering student
          </p>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Anwar Ben Brahim<span className="text-primary">.</span>
          </h1>
          <p className="mt-6 max-w-[48ch] text-lg text-muted-foreground text-pretty">
            Computer engineering student at ENIT, focused on artificial
            intelligence, machine learning and cybersecurity — building
            intelligent systems that keep networks safe.
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
            Computer engineering student at ENIT with hands-on experience in
            artificial intelligence, machine learning and cybersecurity through
            academic, research and engineering projects. Interested in
            AI-driven security, intelligent systems, network security and
            emerging AI applications.
          </p>
          <p className="mt-5 max-w-[52ch] leading-relaxed text-muted-foreground text-pretty">
            I like the part of the machine you can't see — from network flows
            and attack traces to explainable models. Right now I'm deepening my
            knowledge of AI-driven security while looking for opportunities to
            contribute to real projects.
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
          <div className="mt-8">
            <p className="font-mono text-[12px] uppercase tracking-wider text-muted-foreground">
              research interests
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {RESEARCH_INTERESTS.map((item) => (
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
          <div className="rounded-2xl border border-border bg-card p-6 font-mono text-[13px] leading-relaxed">
            <p className="text-muted-foreground">
              <span className="text-primary">$</span> cat about.txt
            </p>
            <p className="mt-3 text-foreground/90">
              computer engineering @ ENIT · AI & cybersecurity
            </p>
            <p className="mt-3 text-muted-foreground">
              <span className="text-primary">$</span> current_focus
            </p>
            <p className="text-foreground/90">
              AI-driven security · explainable AI · intelligent threat detection
            </p>
            <p className="mt-3 text-muted-foreground">
              <span className="text-primary">$</span> now
            </p>
            <p className="text-foreground/90">
              client project manager @ ENIT Junior Entreprise
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
      <SectionHeading eyebrow="skills" title="Technical skills" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
  return (
    <section id="experience" className="border-t border-border py-16 lg:py-20">
      <SectionHeading eyebrow="experience" title="Internships & work" />
      <div className="mt-10 space-y-5">
        {EXPERIENCE.map((job, i) => (
          <article
            key={job.org}
            className="rounded-2xl border border-border bg-card p-6 sm:p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {job.role}
                </h3>
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
  return (
    <section id="projects" className="border-t border-border py-16 lg:py-20">
      <SectionHeading eyebrow="projects" title="Research & academic projects" />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {FEATURED_PROJECTS.map((project, i) => (
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
                <a
                  href={project.link.href}
                  className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-primary"
                >
                  {project.link.label}
                  <ArrowIcon className="size-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {MORE_PROJECTS.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-border bg-card/50 p-5"
          >
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
  return (
    <section id="education" className="border-t border-border py-16 lg:py-20">
      <SectionHeading eyebrow="journey" title="Education" />
      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <ol className="max-w-2xl space-y-0 border-l border-border lg:col-span-8">
          {EDUCATION.map((item, i) => (
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
        <div className="space-y-4 lg:col-span-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-[12px] uppercase tracking-wider text-muted-foreground">
              certifications
            </p>
            <ul className="mt-4 space-y-2.5">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert} className="flex items-start gap-2.5 text-sm">
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="font-mono text-[12px] uppercase tracking-wider text-muted-foreground">
              languages
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Arabic", "French", "English"].map((lang) => (
                <span
                  key={lang}
                  className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {lang}
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
  return (
    <section id="clubs" className="border-t border-border py-16 lg:py-20">
      <SectionHeading
        eyebrow="clubs & leadership"
        title="Social life & student clubs"
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {CLUBS.map((club) => (
          <div
            key={club.org + club.period}
            className="rounded-2xl border border-border bg-card p-6 transition-transform hover:-translate-y-1"
          >
            <p className="font-mono text-[12px] text-muted-foreground">
              {club.period}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold tracking-tight">
              {club.org}
            </h3>
            <p className="mt-0.5 text-sm text-primary">{club.role}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
              {club.detail}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-border bg-card p-6">
        <p className="font-mono text-[12px] uppercase tracking-wider text-muted-foreground">
          soft skills
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {SOFT_SKILLS.map((skill) => (
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
            Looking for internships, collaborations on AI or security projects,
            or just a good conversation about code — my inbox is open.
          </p>
          <div className="mt-9 grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="glow-primary inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <MailIcon />
              {CONTACT.email}
            </a>
            <a
              href={CONTACT.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <PhoneIcon />
              {CONTACT.phone}
            </a>
            <a
              href={CONTACT.github}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <GitHubIcon />
              github.com/anouar-coder
            </a>
            <a
              href={CONTACT.linkedin}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              <LinkedInIcon />
              linkedin — anwar ben brahim
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
