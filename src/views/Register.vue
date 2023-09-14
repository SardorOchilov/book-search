<template>
  <section>
    <div class="container">
      <RegisterModal />
    </div>
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
