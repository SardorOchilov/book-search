<template>
  <div>
    <Home />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";

export default defineComponent({
  name: "App",
  components: {
    Home,
    Login,
    Register,
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
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
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
  flex-direction: column;
  align-items: center;
  position: relative;
}
</style>
