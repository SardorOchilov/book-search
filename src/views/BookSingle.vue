<template>
  <section>
    <div class="container">
      <Navbar />
      <div class="book-box">
        <div class="img-box">
          <img
            src="http://books.google.com/books/content?id=2kLADwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
            alt=""
          />
        </div>
        <div class="book-description">
          <h2>Tittle</h2>
          <div class="book-addition">
            <div>
              <p>categories:</p>
              <p>language:</p>
            </div>
            <div>
              <p>published year:</p>
              <p>publisher:</p>
              <p>pages count:</p>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="books-table">
        <BookCard
          :img="book.volumeInfo.imageLinks.thumbnail"
          :title="book.volumeInfo.title"
          :author="
            book.volumeInfo.authors ? book.volumeInfo.authors[0] : 'No author'
          "
          :id="book.id"
          v-for="book in books"
        />
      </div> -->
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Navbar from "../components/TheNavbar.vue";
import { useRoute } from "vue-router";
import axios from "axios";
export interface book {
  title: String;
  year: String[];
  publishedDate: String;
  pageCount: Number;
  categories: String[];
  imageLinks: { thumbnail: any };
  language: String;
  publisher: String;
}
export default defineComponent({
  name: "BookSingle",
  components: {
    Navbar,
  },
  setup() {
    const location = useRoute();
    const id = location.params.id;
    let book = <book>{};
    let books: any = ref({});
    const search = ref("programming");

    // onMounted(() => {
    //   axios
    //     .get(`https://www.googleapis.com/books/v1/volumes?q=${id}`)
    //     .then((data) => (book = data.data.items));
    // axios
    //   .get(
    //     `https://www.googleapis.com/books/v1/volumes?q=${
    //       search.value ? search.value : "programming"
    //     }&key=AIzaSyBEUco8bJ9TgGGw8hlrZNLEN6_62LBxfIo`
    //   )
    //   .then((data) => (books.value = data.data.items))
    //   .catch((error) => alert(`${error.massage}`));
    // });

    return {
      book,
    };
  },
});
</script>

<style scoped>
.book-box {
  width: 100%;
  height: 70vh;
  display: flex;
  gap: 60px;
  margin-top: 50px;
}
.img-box {
  width: 30%;
}
.img-box img {
  width: 100%;
}
.book-description {
  display: flex;
  flex-direction: column;
}
.book-addition {
  display: flex;
  gap: 80px;
  margin-top: 30px;
}
.books-table {
  margin: 50px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 0.6fr));
  justify-content: center;
  gap: 40px;
}

@media only screen and (max-width: 750px) {
  .book-box {
    flex-direction: column;
    justify-content: center;
    height: 500px;
  }
  .img-box {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-grow: 2;
  }
  .img-box img {
    width: auto;
    height: 100%;
  }
  .book-description {
    flex-direction: column;
  }
}
</style>
