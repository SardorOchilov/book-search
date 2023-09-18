<template>
  <div>
    <RouterView />
  </div>
</template>

<script lang="ts" setup>

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
  width: 1200px;
  position: relative;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 20px;
}

.navbar {
  z-index: 5;
}

@media only screen and (max-width: 1200px) {
  .container {
    width: 100%;
    padding: 0 20px;
  }
}
</style>
