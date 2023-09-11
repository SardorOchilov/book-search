<template>
  <div>
    <div class="navbar">
      <a href="/" class="logo">BookSearch</a>
      <ul class="nav-links">
        <li><a href="/">register</a></li>
        <li><a href="/">login</a></li>
      </ul>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
hr {
  position: absolute;
  left: 0;
  width: 100%;
  border: 1px solid #e7e7e772;
}
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
}

.logo {
  color: #2b7f75;
  font-weight: 800;
  letter-spacing: 2px;
  font-size: 30px;
  font-style: italic;
}

.nav-links {
  display: flex;
  gap: 10px;
  list-style: none;
}

.nav-links li {
  padding: 10px 20px;
  border: 1px solid #2b7f75;
  border-radius: 7px;
  color: #2b7f75;
  font-weight: 500;
  transition: 0.1s all linear;
}

.nav-links li:hover {
  background-color: #2b7f75;
  color: white;
}
</style>
