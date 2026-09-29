<div align="center">

# Portfolio — Anwar Ben Brahim

**Étudiant ingénieur en informatique**

Portfolio personnel et CV interactif : parcours, compétences, projets, vie associative et contact.
Bilingue **FR / EN**, avec effets de particules, glow au pointeur et animations au défilement.

[Voir le site](#) · [Télécharger le CV](#) · [LinkedIn](https://www.linkedin.com/in/anwar-ben-brahim-68626034a/)

</div>

---

## À propos

Ce dépôt contient mon portfolio en ligne — le support web de mon parcours d'ingénieur en
informatique. Tout y est centralisé : formation, compétences techniques, expériences,
projets, engagement associatif et contact.

Le site est bilingue (français / anglais) et la langue choisie est mémorisée dans un cookie,
de sorte que le rendu est correct dès la première requête, sans clignotement.

## Fonctionnalités

- **Bilingue FR / EN** avec détection et persistance du choix de langue
- **Effets visuels** — champ de particules, halo suivant le pointeur, transitions au scroll
- **CV téléchargeable** en PDF, ainsi que depuis la section contact
- **Navigation fluide** par ancres entre les sections
- **Responsive** du mobile au grand écran
- **Typographie optimisée** via `next/font`

## Sections

| Section | Contenu |
| --- | --- |
| Hero | Nom, titre, accroche, appels à l'action |
| À propos | Parcours et présentation |
| Compétences | Langages, frameworks, outils |
| Expérience | Stages et projets professionnels |
| Projets | Réalisations détaillées |
| Formation | Diplômes et établissements |
| Vie associative | Clubs et engagement étudiant |
| Contact | Email, LinkedIn, téléchargement du CV |

## Stack technique

| Couche | Technologies |
| --- | --- |
| Framework | **TanStack Start** (`@tanstack/react-start`) |
| UI | **React 19**, **TypeScript** |
| Build | **Vite 8** |
| Style | **Tailwind CSS 4** |
| Composants | **shadcn/ui** + **Radix UI** (44 primitives) |
| Animations | Framer Motion, `tw-animate-css` |
| 3D / Data | **three.js**, **Recharts** |
| Validation | React Hook Form + Zod |

## Démarrage

### Prérequis

- **Node.js 20+** — [`nvm`](https://github.com/nvm-sh/nvm#installing-and-updating) recommandé
- **bun** (optionnel, un `bun.lock` est fourni)

### Installation

```bash
git clone https://github.com/anouar-coder/Anwar_BenBrahim.git
cd Anwar_BenBrahim
npm install
```

### Scripts

| Commande | Rôle |
| --- | --- |
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualisation du build |
| `npm run lint` | ESLint |
| `npm run format` | Prettier |

### Lancer en local

```bash
npm run dev
```

L'application est ensuite disponible sur l'adresse indiquée dans le terminal (par défaut
`http://localhost:5173`).

## Structure du projet

```
src/
  routes/          pages (index, __root) et arbre de routes généré
  components/      ParticleField, PointerGlow, ScrollFX + primitives UI
  lib/
    i18n/          dictionnaire, locales, provider et hook
    three-scene.ts scène three.js
    utils.ts       utilitaires (cn)
  hooks/           hooks React
  assets/          images et fichiers statiques
public/            fichiers servis tels quels (CV, favicon)
```

## Internationalisation

Les textes sont centralisés dans `src/lib/i18n/dictionary.ts`, et les locales disponibles
dans `src/lib/i18n/locale.ts` :

```ts
export const LOCALES = ["en", "fr"] as const;
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "folio_lang";
```

Pour ajouter une langue : ajoutez-la à `LOCALES`, complétez `LOCALE_LABELS` et ajoutez une
entrée correspondante dans le dictionnaire.

## Personnalisation

| Je veux changer… | Fichier |
| --- | --- |
| Mes informations de contact | `src/routes/index.tsx` → objet `CONTACT` |
| Mes liens (LinkedIn, GitHub) | `src/routes/index.tsx` |
| Les textes FR / EN | `src/lib/i18n/dictionary.ts` |
| Les couleurs et le thème | `src/styles.css` |
| Le CV affiché | `public/cv-anwar-ben-brahim.pdf` |

## Contribution

Les suggestions et contributions sont les bienvenues. Pour contribuer :

```bash
git checkout -b ma-fonctionnalite
# ... vos modifications
git commit -m "feat: description de la modification"
git push origin ma-fonctionnalite
```

Puis ouvrez une **Pull Request** décrivant les changements.

## Projet lié

Ce portfolio est [**connecté à Lovable**](https://lovable.dev) : chaque commit poussé sur la
branche connectée est synchronisé dans l'éditeur Lovable, et inversement. Les modifications
déjà poussées ne doivent donc pas être réécrites (pas de *force push*, *rebase* ou *amend*
sur l'historique publié).

## Auteur

**Anwar Ben Brahim** — étudiant ingénieur en informatique

[![GitHub](https://img.shields.io/badge/GitHub-anouar--coder-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/anouar-coder)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Anwar%20Ben%20Brahim-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/anwar-ben-brahim-68626034a/)

> Le `README.md` d'origine (généré automatiquement) est conservé dans
> [`README.original.md`](./README.original.md).
