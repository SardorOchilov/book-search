import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Register from "./views/Register.vue";
import Login from "./views/Login.vue";
import BookSingle from "./views/BookSingle.vue";
import Navbar from "./components/TheNavbar.vue";
import BookCard from "./components/TheBookCard.vue";
import TheSidebarVue from "./components/TheSidebar.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: Home,
    },
    {
      name: "register",
      path: "/register",
      component: Register,
    },
    {
      name: "login",
      path: "/login",
      component: Login,
    },
    {
      name: "bookSingle",
      path: "/:id",
      component: BookSingle,
    },
  ],
});

const app = createApp(App);
app.use(router);
app
  .component("Navbar", Navbar)
  .component("BookCard", BookCard)
  .component("Sidebar", TheSidebarVue);

router.beforeEach((to, _, next) => {
  if (
    to.name === "bookSingle" &&
    !JSON.parse(localStorage.getItem("isAuth")!)
  ) {
    next({ name: "register" });
  } else {
    next();
  }
});

app.mount("#app");
