import { createRouter, createWebHistory } from 'vue-router' // Importe les fonctions nécessaires pour configurer le routeur
import HomeView from '../views/HomeView.vue' // Importe le composant de la page d'accueil

// Définit les routes de l'application
const routes = [
  {
    path: '/', 
    name: 'home', 
    component: HomeView 
  },
  {
    path: '/projets',
    name: 'projets',
    component: () => import('../views/ProjetsView.vue')
  }
]

// Crée une instance du routeur avec l'historique web et les routes définies
const router = createRouter({
  history: createWebHistory(), 
  routes 
})

export default router // Exporte la configuration du routeur pour l'utiliser dans l'application principale