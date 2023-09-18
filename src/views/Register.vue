<template>
  <section>
    <div class="container">
      <RegisterModal />
    </div>
  </section>
</template>

<script lang="ts" setup>
import RegisterModal from '../components/TheRegisterModal.vue';</script>

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
