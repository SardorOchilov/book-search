<template>
  <section>
    <Navbar />
    <div class="container">
      <template v-if="loading">
        <p>Loading...</p>
      </template>
      <template  v-else>
        <div class="home-single">
        <div class="book-box">
          <div class="img-box">
            <img :src="book.imageLink.toString()" alt="" />
          </div>
          <div class="book-description">
            <h2>{{ book.title }}</h2>
            <div class="book-addition">
              <div>
                <p>
                  categories:
                  <span v-for="category of book.categories">{{
                    category
                  }}</span>
                </p>
                <p>language: {{ book.language }}</p>
              </div>
              <div>
                <p>published year: {{ book.publishedDate }}</p>
                <p>publisher: {{ book.publisher }}</p>
                <p>pages count: {{ book.pageCount }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { Book } from "../modules/mapper";
import { IEntity } from "../modules/types";
import axios from "axios";

const loading = ref(true);
const location = useRoute();
const id = location.params.id;
let book = ref<IEntity.book>({} as IEntity.book);

onMounted(() => {
  axios
    .get(
      `https://www.googleapis.com/books/v1/volumes?q=${id}&key=AIzaSyBEUco8bJ9TgGGw8hlrZNLEN6_62LBxfIo`
    )
    .then((data) => {
      loading.value = false;
      book.value = Book(data.data.items[0].volumeInfo);
    });
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
.home-single {
  margin-top: 100px;
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
  .book-addition {
    flex-direction: column;
    gap: 10px;
  }
}
</style>
../modules/mapper
