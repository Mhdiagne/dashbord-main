# 🚀 Guide de Démarrage Rapide

## Lancer l'application

```bash
# 1. Installer les dépendances (déjà fait si vous avez cloné le projet)
npm install

# 2. Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur **http://localhost:3000**

## 🎨 Interface reproduite

### Composants principaux

1. **Sidebar** (`components/Sidebar.tsx`)
   - Logo "DEXCHANGE SAAS"
   - Menu Dashboard (actif avec fond teal)
   - Section TRANSACTIONS (Billing, RTL)
   - Section ACCOUNT PAGES (Profile, Sign In, Sign Up)
   - Carte de documentation "Need help?" en bas

2. **Top Navigation** (`components/TopNav.tsx`)
   - Fil d'Ariane (Pages / Dashboard)
   - Barre de recherche
   - Boutons Sign In, Settings, Notifications
   - Avatar utilisateur

3. **Cartes de statistiques** (`components/StatCard.tsx`)
   - Today's Money: $53,000 (+55%)
   - Today's Users: 2,300 (+5%)
   - New Clients: +3,052 (-14%)
   - Total Sales: $173,000 (+8%)

4. **Hero Cards** (`components/HeroCard.tsx`, `components/InfoCard.tsx`)
   - Carte Chakra UI promotionnelle (fond teal)
   - Carte Lorem Ipsum avec placeholder image

5. **Tableau des projets** (`components/ProjectsTable.tsx`)
   - 6 projets avec progression visuelle
   - Icônes d'entreprise colorées
   - Avatars d'équipe
   - Barres de progression teal

6. **Aperçu des commandes** (`components/OrdersOverview.tsx`)
   - 6 notifications de commandes récentes
   - Icônes colorées par type
   - Horodatage pour chaque commande

## 🔧 Personnalisation

### Modifier les couleurs

Les couleurs principales sont définies dans `tailwind.config.ts` :

```typescript
colors: {
  teal: {
    50: '#e6fffa',
    100: '#b2fff1',
    // ...
    600: '#0dc5c5',
  },
}
```

### Ajouter de nouveaux projets

Éditez le tableau `projects` dans `components/ProjectsTable.tsx`.

### Ajouter de nouvelles commandes

Éditez le tableau `orders` dans `components/OrdersOverview.tsx`.

## 🏗️ Build pour production

```bash
# Générer une version optimisée
npm run build

# Lancer le serveur de production
npm run start
```

## 📝 Notes techniques

- **Next.js 14** avec App Router
- **TypeScript** pour le typage
- **Tailwind CSS** pour le styling
- **Responsive design** avec breakpoints md: et lg:
- **Icons** via Heroicons (SVG inline)
- **Pas de dépendances externes** pour les icônes

## ✅ Vérifications

- ✅ Compilation sans erreurs
- ✅ Aucun warning de linting
- ✅ Design responsive
- ✅ Couleurs fidèles à l'original
- ✅ Animations et transitions
- ✅ Accessible et sémantique

