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
      meta: {
        home: true,
      },
    },
    {
      name: "register",
      path: "/register",
      component: Register,
      meta: {
        isAuth: true,
      },
    },
    {
      name: "login",
      path: "/login",
      component: Login,
      meta: {
        isAuth: true,
      },
    },
    {
      name: "bookSingle",
      path: "/:id",
      component: BookSingle,
      meta: {
        home: true,
      },
    },
  ],
});

const app = createApp(App);
app.use(router);
app
  .component("Navbar", Navbar)
  .component("BookCard", BookCard)
  .component("Sidebar", TheSidebarVue);

router.beforeEach((to, from, next) => {
  if (to.meta.home) {
    if (localStorage.getItem("username")) {
      next();
    } else {
      next("/register");
    }
  } else if(to.meta.isAuth) {
    if(localStorage.getItem("username")){
      next("/");
    }else {
      next()
    }
  }else {
    next()
  }
});

app.mount("#app");
