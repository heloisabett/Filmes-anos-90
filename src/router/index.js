import { createRouter, createWebHistory } from "vue-router";
import AcaoView from "../views/AcaoView.vue";
import ComediaView from "../views/ComediaView.vue";
import FilmesView from "../views/FilmesView.vue";
import RomanceView from "../views/RomanceView.vue";
import TerrorView from "../views/TerrorView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Filmes",
      component: FilmesView,
    },
    {
      path: "/acao",
      name: "Ação",
      component: AcaoView,
    },
    {
      path: "/comedia",
      name: "Comédia",
      component: ComediaView,
    },
    {
      path: "/romance",
      name: "Romance",
      component: RomanceView,
    },
    {
      path: "/terror",
      name: "Terror",
      component: TerrorView,
    },
  ],
});

export default router;
