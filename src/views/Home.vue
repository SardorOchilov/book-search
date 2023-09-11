<template>
  <section>
    <div class="container">
      <Navbar />
      <div class="search-box">
        <input
          class="search-input"
          v-on:change=""
          type="text"
          placeholder="Search"
        />
        <button class="search-btn">Search</button>
      </div>
    </div>

    <div class="container">
      <div class="books-table">
        <BookCard title="a" author="b" v-for="card in books" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onUpdated } from "vue";
import Navbar from "../components/TheNavbar.vue";
import BookCard from "../components/TheBookCard.vue";
import axios from "axios";

let books: any = ref(null);
const search = ref("programming");

function getBooks() {
  axios
    .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
    .then((data) => (books.value = data));
}

export default defineComponent({
  name: "Home",
  components: {
    Navbar,
    BookCard,
  },
});
</script>

<style scoped>
.navbar-box {
  border: 1px solid #e7e7e7;
}
.search-box {
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 100px 0 40px;
}
.search-input {
  width: 300px;
  border-radius: 8px 0 0 8px;
  border: 1px solid #e7e7e7;
  padding: 14px 16px;
  font-size: 16px;
  outline: none;
}
.search-input:focus {
  box-shadow: inset 1px 0 0px #2b7f75;
}
.search-btn {
  padding: 10px 15px;
  border: 1px solid #2b7f75;
  border-radius: 0px 7px 7px 0;
  color: white;
  font-size: 14px;
  font-weight: 900;
  background-color: #2b7f75;
  cursor: pointer;
  transition: 0.06s all linear;
}
.search-btn:active {
  background-color: #277269;
}
.books-table {
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 40px;
}
</style>
