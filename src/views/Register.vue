<template>
    <section>
      <RegisterModal/>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import RegisterModal from "../components/TheRegisterModal.vue";
  
  export default defineComponent({
    name: "Login",
    components: {
      RegisterModal,
    },
  });
  </script>
  
  <style scoped>
  section {
    align-items: center;
    background: #F7F6F9;
    height: 100vh;
  }
  </style>