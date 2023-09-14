<template>
  <section>
    <div class="container">
      <Navbar />
      <div class="search-box">
        <input
          class="search-input"
          v-model="search"
          type="text"
          placeholder="Search"
        />
      </div>

      <template v-if="loading"> Loading... </template>
      <template v-else
        ><div class="container">
          <div class="books-table">
            <BookCard
              :img="book.volumeInfo.imageLinks.thumbnail"
              :title="book.volumeInfo.title"
              :author="
                book.volumeInfo.authors
                  ? book.volumeInfo.authors[0]
                  : 'No author'
              "
              :id="book.id"
              v-for="book in books"
            />
          </div></div
      ></template>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted } from "vue";
import Navbar from "../components/TheNavbar.vue";
import BookCard from "../components/TheBookCard.vue";
import axios from "axios";

export default defineComponent({
  name: "Home",
  components: {
    Navbar,
    BookCard,
  },

  setup() {
    const loading = ref(true);
    let books: any = ref({});
    const search = ref("");

    function getBooks() {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            search.value ? search.value : "programming"
          }&key=AIzaSyBEUco8bJ9TgGGw8hlrZNLEN6_62LBxfIo`
        )
        .then((data) => (books.value = data.data.items))
        .catch((error) => alert(`${error.massage}`));
    }

    onMounted(() => {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            search.value ? search.value : "programming"
          }&key=AIzaSyBEUco8bJ9TgGGw8hlrZNLEN6_62LBxfIo`
        )
        .then((data) => {
          loading.value = false;
          books.value = data.data.items;
        })
        .catch((error) => alert(`${error.massage}`));
    }),
      watch(search, () => {
        getBooks();
      });

    return {
      books,
      search,
      loading,

    };
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
  border-radius: 8px;
  border: 1px solid #e7e7e7;
  padding: 14px 16px;
  font-size: 16px;
  outline: none;
}
.search-input:focus {
  box-shadow: inset 1px 0 0px #2b7f75;
}
.books-table {
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 0.6fr));
  justify-content: center;
  gap: 40px;
}
</style>
