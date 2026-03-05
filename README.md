# Parole du Jour

Application web pour lire la Bible chaque jour en suivant le **calendrier liturgique** de l’Église catholique. Conçue par **Bazagod**.

## Objectif

Aider les fidèles à découvrir et méditer les **lectures liturgiques quotidiennes** (Première lecture, Psaume, Évangile) telles que proposées par l’Église catholique, avec des textes conformes au lectionnaire officiel.

## Fonctionnalités

- **Lectures du jour** — Première lecture, Psaume responsorial, Évangile (et deuxième lecture les dimanches et solennités), avec textes complets.
- **Source officielle** — Les textes sont récupérés via l’API [AELF](https://www.aelf.org/) (Association Épiscopale Liturgique pour les pays Francophones) pour garantir la conformité avec la Bible catholique en français.
- **Calendrier liturgique** — Navigation par mois, couleurs liturgiques et cycle de trois ans (Année A – Matthieu, B – Marc, C – Luc).
- **À propos** — Présentation de la mission et des temps liturgiques.

## Technologies

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [date-fns](https://date-fns.org/) — calcul des dates liturgiques
- [Framer Motion](https://www.framer.com/motion/) — animations
- [Lucide React](https://lucide.dev/) — icônes

## Démarrage

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans le navigateur.

## Scripts

| Commande        | Description              |
|-----------------|--------------------------|
| `npm run dev`   | Serveur de développement |
| `npm run build` | Build de production      |
| `npm run start` | Démarrer en production   |
| `npm run lint`  | Vérification ESLint      |

## Structure du projet

- `src/app/` — Pages et layout (App Router)
- `src/components/` — Composants réutilisables (Header, Footer, DailyReadings, etc.)
- `src/data/` — Données liturgiques statiques (Avent, Carême, dimanches) et logique de récupération
- `src/lib/` — Utilitaires et intégration API AELF
- `public/` — Fichiers statiques (icône, etc.)

## Licence

Projet privé. Tous droits réservés.

---

*Conçu par **Bazagod** pour la gloire de Dieu.*
