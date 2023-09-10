<template>
  <div>
    <Home />
    <Login />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
    Login,
  },
});
</script>

<style>
#app {
  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  width: 900px;
}

section {
  display: flex;
  justify-content: center;
}
</style>
