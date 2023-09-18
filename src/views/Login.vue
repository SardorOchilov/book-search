<template>
  <section>
    <div class="container">
      <LoginModal />
    </div>
  </section>
</template>

<script lang="ts" setup>
import LoginModal from "../components/TheLoginModal.vue";
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
