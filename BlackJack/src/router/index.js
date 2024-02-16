import { createRouter, createWebHistory } from 'vue-router';

// Importiere die Komponenten
import Home from "../views/Home.vue";
import How from "../views/How";
import Diff from "../views/Diff";

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/HowTo',
    name: 'How',
    component: How,
  },
  {
    path: '/Diff',
    name: 'Diff',
    component: Diff,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  linkActiveClass: "active"
});

export default router;
