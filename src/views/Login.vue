<template>
  <section>
    <LoginModal />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginModal from "../components/TheLoginModal.vue";

export default defineComponent({
  name: "Login",
  components: {
    LoginModal,
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
