# DEXCHANGE SAAS Dashboard

Un dashboard moderne et responsive reproduisant fidèlement l'interface de l'image de référence, construit avec Next.js, React et Tailwind CSS.

Fonctionnalités

- **Sidebar fixe** avec navigation complète
- **Barre de navigation supérieure** avec recherche et actions utilisateur
- **Cartes de statistiques** avec indicateurs de performance
- **Tableau des projets** avec progression détaillée
- **Liste des commandes** avec aperçu en temps réel
- **Design responsive** optimisé pour tous les écrans
- **Interface moderne** avec couleurs teal/mint green

Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

Technologies utilisées

- **Next.js 14** - Framework React
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Traitement CSS

Structure du projet

```
dashboard/
├── app/
│   ├── globals.css          # Styles globaux
│   ├── layout.tsx           # Layout principal
│   └── page.tsx             # Page dashboard
├── components/
│   ├── Sidebar.tsx          # Barre latérale
│   ├── TopNav.tsx           # Navigation supérieure
│   ├── StatCard.tsx         # Carte de statistique
│   ├── HeroCard.tsx         # Carte hero Chakra
│   ├── InfoCard.tsx         # Carte d'information
│   ├── ProjectsTable.tsx    # Tableau des projets
│   └── OrdersOverview.tsx   # Liste des commandes
├── public/                  # Assets statiques
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

Design

Le design suit fidèlement l'interface de référence avec :
- Fond gris clair (#f4f7fe)
- Cartes blanches avec ombres subtiles
- Couleur teal/mint green comme accent principal
- Typographie claire et moderne
- Bordures arrondies sur tous les éléments

Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Lance le serveur de production
- `npm run lint` - Vérifie le code avec ESLint

Contribution

Ce projet a été créé pour reproduire fidèlement l'interface de l'image de référence. Tous les détails visuels ont été attentivement reproduits.



