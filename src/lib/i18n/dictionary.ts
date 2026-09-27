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
    eyebrow: "$ contact --now",
    title: "Let's build something together.",
    body: "Looking for internships, collaborations on AI or security projects, or just a good conversation about code — my inbox is open.",
    githubLabel: "github.com/anouar-coder",
    linkedinLabel: "linkedin — anwar ben brahim",
    cvLabel: "cv — anwar ben brahim",
    replyNote: "I read every message — expect a reply within a day.",
  },
  footer: {
    credit: "© 2026 Anwar Ben Brahim — designed & built with care",
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

const fr: Dictionary = {
  meta: {
    title: "Anwar Ben Brahim — Étudiante en Génie Informatique | IA & Cybersécurité",
    description:
      "Portfolio d'Anwar Ben Brahim, étudiante en génie informatique à l'ENIT — IA, apprentissage automatique et cybersécurité. Projets, expériences, formation et contact.",
    ogDescription:
      "Projets, expériences, formation et contact — étudiante en génie informatique à l'ENIT, spécialisée en IA et cybersécurité.",
  },
  switcher: {
    label: "Langue",
  },
  a11y: {
    skipToContent: "Aller au contenu",
  },
  nav: {
    items: [
      { label: "À propos", href: "#about" },
      { label: "Compétences", href: "#skills" },
      { label: "Expériences", href: "#experience" },
      { label: "Projets", href: "#projects" },
      { label: "Parcours", href: "#education" },
      { label: "Associations", href: "#clubs" },
    ],
    cta: "me contacter",
  },
  hero: {
    eyebrow: "~/anwar — étudiante en génie informatique",
    bio: "Étudiante en génie informatique à l'ENIT, spécialisée en intelligence artificielle, en apprentissage automatique et en cybersécurité — je construis des systèmes intelligents qui sécurisent les réseaux.",
    primaryCta: "voir mes projets",
    secondaryCta: "me contacter",
    cvCta: "télécharger mon cv",
    imageAlt: "Réseau abstrait de nœuds ambrés lumineux",
  },
  about: {
    eyebrow: "à propos",
    title: "Qui je suis",
    paragraphs: [
      "Étudiante en génie informatique à l'ENIT, avec une expérience pratique en intelligence artificielle, en apprentissage automatique et en cybersécurité à travers des projets académiques, de recherche et d'ingénierie. Intéressée par la sécurité pilotée par l'IA, les systèmes intelligents, la sécurité réseau et les nouvelles applications de l'IA.",
      "J'aime la partie de la machine qu'on ne voit pas — des flux réseau et des traces d'attaques jusqu'aux modèles explicables. En ce moment, j'approfondis mes connaissances en sécurité pilotée par l'IA tout en cherchant des opportunités de contribuer à de vrais projets.",
    ],
    facts: [
      "Tunis, Tunisie",
      "ENIT — génie informatique",
      "Arabe · Français · Anglais",
      "Ouverte aux stages",
    ],
    interestsLabel: "domaines de recherche",
    interests: [
      "IA pour la cybersécurité",
      "Sécurité réseau et IoT",
      "Détection d'intrusion et d'anomalies",
      "IA explicable",
      "LLM pour la sécurité",
      "Détection intelligente des menaces",
    ],
    terminal: {
      about: "génie informatique @ ENIT · IA & cybersécurité",
      focus: "sécurité pilotée par l'IA · IA explicable · détection intelligente des menaces",
      now: "cheffe de projet client @ ENIT Junior Entreprise",
    },
  },
  skills: {
    eyebrow: "compétences",
    title: "Compétences techniques",
    groups: [
      {
        index: "01",
        title: "IA & Data",
        items: [
          "Apprentissage automatique",
          "Apprentissage profond",
          "Fouille de données",
          "Classification & détection d'anomalies",
          "Ingénierie des caractéristiques",
          "IA explicable (SHAP)",
        ],
      },
      {
        index: "02",
        title: "Cybersécurité & Réseaux",
        items: [
          "Sécurité réseau",
          "Détection d'intrusion",
          "Analyse du trafic réseau",
          "Détection des menaces & réponse aux incidents",
          "Contrôle d'accès",
          "Analyse de malwares",
        ],
      },
      {
        index: "03",
        title: "Programmation & Frameworks",
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
        title: "Outils",
        items: ["Linux", "Docker", "GitHub", "Wireshark", "AVISPA / HLPSL", "Ganache", "Burpsuite"],
      },
    ],
  },
  experience: {
    eyebrow: "expérience",
    title: "Stages & expérience",
    items: [
      {
        role: "Plateforme MDR pilotée par l'IA",
        org: "RFC — Réseaux, Formation, Conseil",
        period: "06/2026 — 07/2026",
        location: "Tunis, Tunisie",
        points: [
          "Conçu une plateforme MDR pilotée par l'IA pour la détection et la réponse aux menaces réseau, dans un environnement VirtualBox isolé.",
          "Extrait des caractéristiques de flux réseau avec NFStream et entraîné un classifieur Random Forest pour le trafic normal et plusieurs catégories d'attaques, avec explicabilité SHAP et cartographie des menaces MITRE ATT&CK / D3FEND.",
          "Développé un tableau de bord de détection en temps réel et un mécanisme de réponse semi-automatisé avec Flask, Socket.IO et iptables ; intégration d'un LLM local (Ollama / Phi-3 Mini) pour l'analyse de sécurité.",
        ],
      },
      {
        role: "Détection de botnets — application temps réel",
        org: "YUCCAINFO",
        period: "07/2025 — 08/2025",
        location: "Sousse, Tunisie",
        points: [
          "Analysé des attaques ciblant le protocole RDP et déployé un laboratoire de test basé sur Docker simulant des attaques par force brute, DoS et du tunnelling SSH.",
          "Analysé les journaux système pour identifier et enquêter sur les traces d'attaques.",
          "Étudié les mécanismes de sécurité : pare-feu, VPN et mesures de contrôle d'accès.",
        ],
      },
      {
        role: "Stagiaire en développement logiciel",
        org: "OPUS LAB",
        period: "06/2025 — 07/2025",
        location: "Tunis, Tunisie",
        points: [
          "Contribué à deux projets web, en me concentrant sur les flux de communication des applications et sur la collaboration au sein des équipes de développement.",
        ],
      },
    ],
  },
  projects: {
    eyebrow: "projets",
    title: "Projets de recherche & académiques",
    featured: [
      {
        title: "Plateforme MDR pilotée par l'IA",
        tag: "Python · Flask · NFStream · SHAP",
        description:
          "Détection et réponse gérées aux menaces réseau : classification par Random Forest des catégories d'attaques, explicabilité SHAP, cartographie MITRE ATT&CK/D3FEND et tableau de bord temps réel avec réponse semi-automatisée.",
        image: projMdr,
      },
      {
        title: "Contrôle d'accès par inférence pour la e-santé",
        tag: "Projet de fin d'études · HLPSL · AVISPA",
        description:
          "Validation formelle du contrôle d'accès dans les systèmes de e-santé, plus un prototype blockchain (Ethereum, Solidity, Ganache, Node.js) avec des journaux d'audit immuables et le stockage hors chaîne des données cliniques.",
        image: projEhealth,
      },
      {
        title: "Détection de crises par EEG",
        tag: "Fouille de données biomédicales · pipeline ML",
        description:
          "Pipeline complet de fouille de données et d'apprentissage automatique transformant des signaux EEG bruts en caractéristiques pour la détection automatique des périodes de crise, avec prétraitement du signal, extraction de caractéristiques et classification.",
        image: projEeg,
      },
    ],
    previewAlt: (title: string) => `Aperçu — ${title}`,
    more: [
      {
        title: "Moteur de rapprochement de noms",
        tag: "Java · déduplication",
        detail:
          "Une application efficace pour rechercher, comparer et éliminer les doublons dans de grandes listes de noms.",
      },
      {
        title: "Gestionnaire de cours de pilates",
        tag: "Application mobile multiplateforme",
        detail:
          "Planification des cours, messagerie avec le coach, notifications push et paiement en ligne dans une seule application multiplateforme.",
      },
      {
        title: "Smurf Game",
        tag: "C#",
        detail: "Un jeu développé en C#, réalisé comme projet logiciel personnel.",
      },
      {
        title: "Analyse spatiale du risque d'inondation",
        tag: "Random Forest · cartographie web",
        detail:
          "Modélisation hybride combinant une simulation d'inondation fondée sur la physique et un classifieur Random Forest pour l'évaluation du risque d'inondation côtier, avec une plateforme web interactive de cartographie pour les prédictions spatiales.",
      },
      {
        title: "Laboratoire de détection de botnets",
        tag: "Docker · analyse de journaux",
        detail:
          "Laboratoire de test basé sur Docker simulant des attaques par force brute sur RDP, DoS et du tunnelling SSH, avec analyse des journaux système pour enquêter sur les traces d'attaques. (Stage YUCCAINFO)",
      },
      {
        title: "Analyse de malwares — PFA1",
        tag: "FLARE VM · REMnux",
        detail:
          "Analyse statique, dynamique et hybride d'une variante de rançongiciel dans un laboratoire contrôlé, à l'aide de VirusTotal, PEStudio et Wireshark pour étudier le comportement et l'activité réseau.",
      },
    ],
  },
  education: {
    eyebrow: "parcours",
    title: "Formation",
    items: [
      {
        period: "09/2024 — Présent",
        title: "Génie Informatique — ENIT",
        detail:
          "École Nationale d'Ingénieurs de Tunis, Tunisie. Spécialité intelligence artificielle, apprentissage automatique et cybersécurité & sécurité réseau.",
      },
      {
        period: "Sep 2025 — Présent",
        title: "Master en Systèmes et Communications (SYSCOM)",
        detail: "École Nationale d'Ingénieurs de Tunis (ENIT) — Tunis, Tunisie.",
      },
      {
        period: "09/2022 — 06/2024",
        title: "Cycle préparatoire — Mathématiques & Physique",
        detail:
          "Institut Préparatoire aux Études d'Ingénieurs de Nabeul (IPEIN) — Nabeul, Tunisie.",
      },
    ],
    certifications: {
      label: "certifications",
      items: ["CCNAv7 — Introduction to Networks", "Opus Lab — Développement Web"],
    },
    languages: {
      label: "langues",
      items: ["Arabe", "Français", "Anglais"],
    },
  },
  clubs: {
    eyebrow: "associations & leadership",
    title: "Vie associative & clubs étudiants",
    items: [
      {
        period: "09/2025 — 08/2026",
        role: "Membre senior / Cheffe de projet client",
        org: "ENIT Junior Entreprise",
        detail:
          "Géré des projets orientés client, contribué à deux projets clients et participé à des événements professionnels dont le Forum ENIT Entreprise.",
      },
      {
        period: "10/2024 — 08/2025",
        role: "Membre active",
        org: "ENIT Junior Entreprise",
        detail:
          "Participé à divers projets étudiants, développant des compétences en gestion de projet, travail d'équipe, collaboration et professionnalisme.",
      },
      {
        period: "En cours",
        role: "Ateliers cybersécurité & CTF",
        org: "SecuriNets ENIT",
        detail:
          "Participé à des ateliers de cybersécurité et à des compétitions Capture The Flag (CTF).",
      },
    ],
    softSkills: {
      label: "soft skills",
      items: [
        "Leadership & initiative",
        "Travail d'équipe",
        "Esprit d'analyse et esprit critique",
        "Résolution de problèmes",
        "Apprentissage autonome",
        "Adaptabilité",
        "Curiosité scientifique",
        "Communication & négociation",
      ],
    },
  },
  contact: {
    eyebrow: "$ contact",
    title: "Construisons quelque chose ensemble.",
    body: "À la recherche de stages, de collaborations sur des projets d'IA ou de sécurité, ou simplement d'une bonne conversation sur le code — ma boîte mail est ouverte.",
    githubLabel: "github.com/anouar-coder",
    linkedinLabel: "linkedin — anwar ben brahim",
    cvLabel: "cv — anwar ben brahim",
    replyNote: "Je lis chaque message — attendez-vous à une réponse sous un jour.",
  },
  footer: {
    credit: "© 2026 Anwar Ben Brahim",
    statusLabel: "statut",
    status: "ouverte aux stages",
  },
  errors: {
    notFoundTitle: "Page introuvable",
    notFoundBody: "La page que vous cherchez n'existe pas ou a été déplacée.",
    errorTitle: "Cette page ne s'est pas chargée",
    errorBody:
      "Une erreur s'est produite de notre côté. Vous pouvez rafraîchir la page ou revenir à l'accueil.",
    tryAgain: "Réessayer",
    goHome: "Accueil",
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = { en, fr };
