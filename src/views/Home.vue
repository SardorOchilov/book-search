<template>
  <section>
    <Navbar :count="countBadge" :books="wishlistBooks" />
    <div class="container">
      <template v-if="loading"> Loading... </template>
      <template v-else>
        <div class="home-screen">
          <Sidebar class="sidebar" @onChangeSearch="handleChangeSearch" />
          <div class="book-container">
            <div class="books-table">
              <BookCard
                @onAddToCard="handleAddToCard"
                :img="book.volumeInfo?.imageLinks?.thumbnail || 'no image'"
                :title="book.volumeInfo.title"
                :author="
                  book.volumeInfo.authors
                    ? book.volumeInfo.authors[0]
                    : 'No author'
                "
                :id="book.id"
                v-for="book in books"
              />
            </div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from "vue";
import axios from "axios";
import { IEntity } from "../modules/types";

const loading = ref(true);
let books: any = ref({});
const search = ref("");
const countBadge = ref(0);
const wishlistBooks = ref([] as IEntity.bookCard[]);

function handleChangeSearch(value: string) {
  search.value = value;
}

function handleAddToCard(book: IEntity.bookCard) {
  countBadge.value += 1;
  if (!wishlistBooks.value.some((item) => item.id === book.id))
    wishlistBooks.value.push(book);
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
  });
</script>

<!-- Style -->
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
.home-screen {
  display: flex;
  margin-top: 100px;
  align-items: stretch;
}
.books-table {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 0.6fr));
  justify-content: center;
  gap: 20px;
}
.book-container {
  padding: 0 20px;
  height: 100vh;
  overflow-y: scroll;
  flex: 1;
}
.book-container::-webkit-scrollbar {
  display: none;
}

@media only screen and (max-width: 1182px) {
  .books-table {
    grid-template-columns: repeat(auto-fill, minmax(230px, 0.4fr));
  }
}

@media only screen and (max-width: 1023px) {
  .books-table {
    grid-template-columns: repeat(auto-fill, minmax(230px, 0.4fr));
  }
  .sidebar {
    display: none;
  }
}
</style>
