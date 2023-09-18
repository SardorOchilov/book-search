<template>
  <div class="navbar">
    <div class="container">
      <div class="navbar-left">
        <router-link to="/" class="logo">hype<span>books</span></router-link>
        <ul class="nav-links">
          <router-link to="/" class="active"><li>Book Store</li></router-link>
          <li>Wishlist</li>
          <li>My Collection</li>
        </ul>
      </div>

      <template v-if="user">
        <div class="profile-box">
          <div class="wishlist-icon" @click="handleSideModal(true, 'wishlist')">
            <i class="fas fa-shopping-cart"></i>
            <div class="badge">
              <span>{{ count }}</span>
            </div>
          </div>
          <div class="Profile" @click="openLogout = !openLogout">
            <i class="fas fa-user"></i>
            <span class="user-name"><span>Hi,</span> name</span>
            <div class="drop-down" v-show="openLogout">
              <button @click="logout" class="logout">logout</button>
            </div>
          </div>
          <div @click="handleSideModal(true, 'menu')" class="menu-bar">
            <i class="fas fa-bars"></i>
          </div>
        </div>
      </template>
      <template v-else>
        <ul class="nav-btn">
          <router-link to="/register"><li>register</li></router-link>
          <router-link to="/login"><li>login</li></router-link>
        </ul>
      </template>
    </div>
  </div>
  <div
    class="bg-cover"
    v-show="bgShow"
    @click="handleSideModal(false, 'both')"
  ></div>
  <div class="side-modal wishlist" :style="sideStyleWishlist">
    <i @click="handleSideModal(false, 'wishlist')" class="fas fa-times"></i>
    <div class="books-box">
      <BookCard
        :title="book.title"
        :author="book.author"
        :img="book.img"
        :id="book.id"

        v-for="book in books"
        :place="'wishlist'"
      ></BookCard>
    </div>
  </div>
  <div class="side-modal menu-side" :style="sideStyle">
    <i @click="handleSideModal(false, 'menu')" class="fas fa-times"></i>
    <ul>
      <router-link to="/" class="active"><li>Book Store</li></router-link>
      <router-link to="/wishlist"><li>Wishlist</li></router-link>
      <router-link to="/my-collection"><li>My Collection</li></router-link>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import {IEntity} from "../modules/types"


const router = useRouter();
const user = ref("");
const openLogout = ref(false);
user.value = window.localStorage.getItem("username")!;
const sideStyle = ref({});
const sideStyleWishlist = ref({});
const bgShow = ref(false);

interface Props {
  count: number;
  books: IEntity.bookCard[];
}

defineProps<Props>();

function handleSideModal(value: boolean, component: string) {
  bgShow.value = value;
  if (component === "menu") {
    if (value) sideStyle.value = { right: "0px" };
    else sideStyle.value = { right: "-300px" };
  } else if (component === "wishlist") {
    {
      if (value) sideStyleWishlist.value = { right: "0px" };
      else sideStyleWishlist.value = { right: "-500px" };
    }
  } else {
    sideStyleWishlist.value = { right: "-500px" };
    sideStyle.value = { right: "-300px" };
  }
}

function logout() {
  user.value = "";
  localStorage.setItem("isAuth", "false");
  localStorage.removeItem("username");
  router.push("/");
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  position: fixed;
  width: 100%;
  background-color: white;
  display: grid;
  place-items: center;
  padding: 20px 0;
  box-shadow: 1px 0 10px #03030363;
}
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.logo {
  color: #030303;
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 30px;
  position: relative;
}
.logo::before {
  content: "";
  position: absolute;
  height: 5px;
  width: 60%;
  background: linear-gradient(
    to right,
    #fd9e22 20%,
    #ff5050 20% 50%,
    #13c6b8 50%
  );
  bottom: -5px;
  border-radius: 20px;
}
.logo span {
  font-weight: 300;
}
.nav-links,
.nav-btn {
  display: flex;
  gap: 10px;
  list-style: none;
}
.navbar-left {
  display: flex;
  align-items: center;
  width: 550px;
}
.nav-links {
  margin-left: 10%;
  display: flex;
  gap: 30px;
  font-size: 14px;
  font-weight: 600;
  color: #aaadae;
}
.nav-links .active {
  color: #030303;
}
.user-name {
  color: #030303;
  font-size: 14px;
  font-weight: 600;
}
.user-name span {
  color: #aaadae;
}
.nav-btn li {
  padding: 10px 20px;
  border: 1px solid #2b7f75;
  border-radius: 7px;
  color: #2b7f75;
  font-weight: 500;
  transition: 0.1s all linear;
}
.wishlist-icon,
.Profile {
  padding: 10px 0;
  user-select: none;
  cursor: pointer;
}
.Profile {
  display: flex;
  align-items: center;
  gap: 5px;
  position: relative;
  user-select: none;
  cursor: pointer;
}
.fa-user {
  color: #030303;
  font-size: 23px;
}
.drop-down {
  position: absolute;
  bottom: -70px;
  left: -15px;
  box-shadow: 1px 1px 10px #0303034b;
  border-radius: 10px;
  padding: 20px;
  background-color: white;
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
.logout:hover {
  background-color: #f63e66;
  color: white;
}
.wishlist-icon {
  position: relative;
}
.badge {
  position: absolute;
  top: -2px;
  right: -10px;
  height: 20px;
  width: 20px;
  display: grid;
  place-items: center;
  background-color: #ff5050;
  border-radius: 50%;
  color: white;
  font-size: 40%;
}
.fa-shopping-cart {
  color: #030303;
  font-size: 23px;
}
.profile-box {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}
.menu-bar {
  display: none;
  font-size: 25px;
  cursor: pointer;
}
.side-modal {
  position: fixed;
  z-index: 10;
  right: -300px;
  height: 100vh;
  width: 300px;
  background-color: white;
  padding: 50px 30px;
  box-shadow: -2px 0 10px #03030325;
  transition: 0.1s all linear;
}
.wishlist {
  width: 500px;
  right: -500px;
  overflow-y: scroll;
}
.menu-side li {
  user-select: none;
  list-style: none;
  padding: 10px;
  border-radius: 10px;
  transition: 0.1s all linear;
}
.menu-side li:hover {
  background-color: #030303;
  color: white;
}
.fa-times {
  cursor: pointer;
  position: absolute;
  font-size: 25px;
  right: 30px;
  top: 20px;
}
.bg-cover {
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9;
  background-color: #03030364;
}
@media only screen and (max-width: 900px) {
  .logo {
    font-size: 25px;
  }
}

@media only screen and (max-width: 800px) {
  .nav-links {
    display: none;
  }
  .menu-bar {
    display: block;
  }
  .navbar-left {
    width: auto;
  }
}

@media only screen and (max-width: 400px) {
  .menu-side {
    width: 100%;
  }
}
</style>
