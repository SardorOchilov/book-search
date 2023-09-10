<template>
    <section>
      <div class="container">
        <Navbar />
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import Navbar from "../components/TheNavbar.vue";
  
  export default defineComponent({
    name: "Home",
    components: {
      Navbar,
    },
  });
  </script>
  
  <style scoped>

  </style>
  