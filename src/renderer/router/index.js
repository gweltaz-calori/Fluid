import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/pages/Home.vue";
import Editor from "@/components/pages/Editor.vue";
import Player from "@/components/pages/Player.vue";
import EditorLoader from "@/components/pages/EditorLoader.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/edit"
    },
    {
      name: "Player",
      component: Player,
      path: "/play"
    },
    {
      name: "Editor",
      component: Editor,
      path: "/edit"
    }
    /* {
      name: "EditorLoader",
      component: EditorLoader,
      path: "/edit/:key"
    } */
  ]
});
