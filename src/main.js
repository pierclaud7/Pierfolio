import { createApp } from 'vue' // Importe la fonction pour créer une application Vue
import App from './App.vue' // Importe le composant racine de l'application
import router from './router' // Importe notre configuration
import './style.css' // Importe les styles globaux

const app = createApp(App) // Crée une nouvelle application Vue avec le composant racine App

app.use(router) // Dit à Vue d'utiliser le système de navigation
app.mount('#app') // Monte l'application Vue dans l'élément avec l'ID 'app'