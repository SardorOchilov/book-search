<template>
  <section>
    <div class="container">
      <Navbar></Navbar>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Navbar from "./components/TheNavbar.vue";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
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
