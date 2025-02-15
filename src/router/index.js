import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: () => import('../views/AboutMeView.vue')
    },
    {
      path: '/about-team',
      name: 'about-team',
      component: () => import('../views/AboutTeamView.vue')
    },
    {
      path: '/about-me/faq',
      name: 'faq',
      component: () => import('../views/FAQView.vue')
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('../views/RecipesView.vue')
    },
    {
      path: '/recipes/category',
      name: 'category',
      component: () => import('../views/CategoryView.vue')
    },
    {
      path: '/recipes/category/recipe',
      name: 'recipe',
      component: () => import('../views/RecipeView.vue')
    },
    {
      path: '/cookbook',
      name: 'cookbook',
      component: () => import('../views/CookbookView.vue')
    },
    {
      path: '/cooking-tips',
      name: 'cooking-tips',
      component: () => import('../views/CookingTipsView.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Para el comportamiento estándar de "atrás" y "adelante"
    } else {
      return { top: 0 }; // Desplázate al inicio de la nueva página
    }
  }
})

export default router
