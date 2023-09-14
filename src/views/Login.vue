<template>
  <section>
    <div class="container">
      <LoginModal />
    </div>
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
  background: #f7f6f9;
  height: 100vh;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
