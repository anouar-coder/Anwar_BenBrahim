import projEeg from "@/assets/project-eeg.jpg";
import projEhealth from "@/assets/project-campus.jpg";
import projMdr from "@/assets/project-ai.jpg";

import type { Locale } from "./locale";

const en = {
  meta: {
    title: "Anwar Ben Brahim — Computer Engineering Student | AI & Cybersecurity",
    description:
      "Portfolio of Anwar Ben Brahim, computer engineering student at ENIT — AI, machine learning and cybersecurity. Projects, experience, education and contact.",
    ogDescription:
      "Projects, experience, education and contact — computer engineering student at ENIT, focused on AI and cybersecurity.",
  },
  switcher: {
    label: "Language",
  },
  a11y: {
    skipToContent: "Skip to content",
  },
  nav: {
    items: [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Journey", href: "#education" },
      { label: "Clubs", href: "#clubs" },
    ],
    cta: "get in touch",
  },
  hero: {
    eyebrow: "~/anwar — computer engineering student",
    bio: "Computer engineering student at ENIT, focused on artificial intelligence, machine learning and cybersecurity, building intelligent systems that keep networks safe.",
    primaryCta: "view my projects",
    secondaryCta: "get in touch",
    cvCta: "download my cv",
    imageAlt: "Abstract network of glowing amber nodes",
  },
  about: {
    eyebrow: "about",
    title: "Who I am",
    paragraphs: [
      "Computer engineering student at ENIT with hands-on experience in artificial intelligence, machine learning and cybersecurity through academic, research and engineering projects. Interested in AI-driven security, intelligent systems, network security and emerging AI applications.",
      "I like the part of the machine you don't see — from network traffic and attack traces to explainable models. Right now I am deepening my knowledge of AI-driven security while looking for opportunities to contribute to real projects.",
    ],
    facts: [
      "Tunis, Tunisia",
      "ENIT — computer engineering",
      "Arabic · French · English",
      "Open to internships",
    ],
    interestsLabel: "research interests",
    interests: [
      "AI for cybersecurity",
      "Network & IoT security",
      "Intrusion & anomaly detection",
      "Explainable AI",
      "LLMs for security",
      "Intelligent threat detection",
    ],
    terminal: {
      about: "final-year computer engineering student @ ENIT · AI & cybersecurity",
      focus: "cybersecurity · machine learning · intelligent threat detection",
      now: "currently seeking a final-year project opportunity",
    },
  },
  skills: {
    eyebrow: "skills",
    title: "Technical skills",
    groups: [
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
        items: ["Linux", "Docker", "GitHub", "Wireshark", "AVISPA / HLPSL", "Ganache", "Burpsuite"],
      },
    ],
  },
  experience: {
    eyebrow: "experience",
    title: "Internships & work",
    items: [
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
    ],
  },
  projects: {
    eyebrow: "projects",
    title: "Research & academic projects",
    featured: [
      {
        title: "AI-driven MDR Platform",
        tag: "Python · Flask · NFStream · SHAP",
        description:
          "Managed detection & response for network threats: Random Forest classification of attack categories, SHAP explainability, MITRE ATT&CK/D3FEND mapping and a real-time dashboard with semi-automated response.",
        image: projMdr,
      },
      {
        title: "Inference-Based Access Control for e-Health",
        tag: "Final-Year Project · HLPSL · AVISPA",
        description:
          "Formal validation of access control in e-health systems, plus a blockchain prototype (Ethereum, Solidity, Ganache, Node.js) with immutable audit logs and off-chain storage of clinical data.",
        image: projEhealth,
      },
      {
        title: "EEG Seizure Detection",
        tag: "Biomedical data mining · ML pipeline",
        description:
          "End-to-end data mining and machine learning pipeline transforming raw EEG signals into features for automatic seizure-period detection, with signal preprocessing, feature extraction and classification.",
        image: projEeg,
      },
    ],
    previewAlt: (title: string) => `${title} preview`,
    more: [
      {
        title: "Name Matching Engine",
        tag: "Java · deduplication",
        detail:
          "An efficient application to search, compare and eliminate duplicates in large name lists.",
      },
      {
        title: "Pilates Course Manager",
        tag: "Cross-platform mobile app",
        detail:
          "Class scheduling, messaging with the coach, push notifications and online payment in one multi-platform app.",
      },
      {
        title: "Smurf Game",
        tag: "C#",
        detail: "A game developed in C#.",
      },
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
    ],
  },
  education: {
    eyebrow: "journey",
    title: "Education",
    items: [
      {
        period: "09/2024 — Present",
        title: "Computer Engineering — ENIT",
        detail: "École Nationale d'Ingénieurs de Tunis, Tunisia.",
      },
      {
        period: "Sep 2025 — Present",
        title: "Master's in Systems and Communications (SYSCOM)",
        detail: "École Nationale d'Ingénieurs de Tunis (ENIT) — Tunis, Tunisia.",
      },
      {
        period: "09/2022 — 06/2024",
        title: "Preparatory Cycle — Mathematics & Physics",
        detail:
          "Institut Préparatoire aux Études d'Ingénieurs de Nabeul (IPEIN) — Nabeul, Tunisia.",
      },
    ],
    certifications: {
      label: "certifications",
      items: ["CCNAv7 — Introduction to Networks", "Opus Lab — Web Development"],
    },
    languages: {
      label: "languages",
      items: ["Arabic", "French", "English"],
    },
  },
  clubs: {
    eyebrow: "clubs & leadership",
    title: "Social life & student clubs",
    items: [
      {
        period: "09/2025 — 08/2026",
        role: "Senior Member",
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
        detail: "Participated in cybersecurity workshops and Capture The Flag (CTF) competitions.",
      },
    ],
    softSkills: {
      label: "soft skills",
      items: [
        "Leadership & initiative",
        "Teamwork",
        "Analytical & critical thinking",
        "Problem solving",
        "Independent learning",
        "Adaptability",
        "Scientific curiosity",
        "Communication & negotiation",
      ],
    },
  },
  contact: {
    eyebrow: "$ contact",
    title: "Let's build something together.",
    body: "Looking for internships, collaborations on AI or security projects.",
    githubLabel: "github.com/anouar-coder",
    linkedinLabel: "linkedin/anwar ben brahim",
    cvLabel: "cv_anwar ben brahim",
    replyNote: "",
  },
  footer: {
    credit: "© 2026 Anwar Ben Brahim",
    statusLabel: "status",
    status: "open to internships",
  },
  errors: {
    notFoundTitle: "Page not found",
    notFoundBody: "The page you're looking for doesn't exist or has been moved.",
    errorTitle: "This page didn't load",
    errorBody: "Something went wrong on our end. You can try refreshing or head back home.",
    tryAgain: "Try again",
    goHome: "Go home",
  },
};

export type Dictionary = typeof en;

/**
 * The French locale is served the English copy verbatim. Both locales point at
 * the same object, so the two can never drift apart and there is no second copy
 * to keep in sync. Replace this with a real `fr` object when the French copy
 * comes back.
 */
const fr: Dictionary = en;

export const DICTIONARIES: Record<Locale, Dictionary> = { en, fr };
