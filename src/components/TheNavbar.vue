<template>
  <div>
    <div class="navbar">
      <a href="/" class="logo">BookSearch</a>
      <template v-if="user">
        <div class="profile-box">
          <div class="Profile"></div>
          <span class="user-name">{{ user }}</span>
          <button @click="logout" class="logout">logout</button>
        </div>
      </template>
      <template v-else>
        <ul class="nav-links">
          <router-link to="/register" href="/"><li>register</li></router-link>
          <router-link to="/login" href="/"><li>login</li></router-link>
        </ul>
      </template>
    </div>
    <hr />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Navbar",
  setup() {
    const user = ref("");
    user.value = window.localStorage.getItem("token")!;

    function logout(){
      user.value = ''
    }
    return {
      user,
      logout
    };
  },
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
.logout {
  padding: 10px 20px;
  border: 1px solid #f63e66;
  border-radius: 7px;
  color: #f63e66;
  font-weight: 500;
  transition: 0.1s all linear;
  background-color: white;
  font-weight: 700;
}

.nav-links li:hover {
  background-color: #2b7f75;
  color: white;
}
.logout:hover {
  background-color: #f63e66;
  color: white;
}
.Profile {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #b8c2c1;
}
.profile-box {
  display: flex;
  gap: 10px;
  align-items: center;
}
@media only screen and (max-width: 900px) {
  .logo {
    font-size: 25px;
  }
}

@media only screen and (max-width: 600px) {
  .user-name {
    display: none;
  }
}
</style>
