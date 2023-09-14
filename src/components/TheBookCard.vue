<template>
  <div class="book-card-box">
    <div class="img-box">
      <img :src="img" alt="" />
    </div>

    <div class="book-description">
      <div class="book-text">
        <h4>{{ title }}</h4>
        <p>{{ author }}</p>
      </div>
      <div class="btn-box">
        <RouterLink :to="id || ''" class="box-card-btn">See detail</RouterLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BookCard",
  props: {
    title: String,
    author: String,
    img: String,
    id: String
  },
});
</script>

<style scoped>
.book-card-box {
  display: flex;
  flex-direction: column;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 2.72px 3.712px 0px rgba(0, 0, 0, 0.01),
    0px 12.16px 8.576px 0px rgba(0, 0, 0, 0.01),
    30px 30.24px 20px 0px rgba(0, 0, 0, 0.02);
  border-radius: 20px;
  border: 1px solid #f2eeee;
}
.img-box {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 280px;
}
.img-box img {
  position: absolute;
  height: 100%;
}
.book-description {
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  background-color: #eef3f3;
}
h4 {
  font-size: 18px;
}
.book-description p {
  margin: 10px 0 35px;
  font-size: 14px;
}
.btn-box {
  display: flex;
  justify-content: center;
}
.box-card-btn {
  width: max-content;
  padding: 10px 15px;
  margin: 0 auto;
  border: 1px solid #2b7f75;
  border-radius: 7px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  background-color: #2b7f75;
  cursor: pointer;
  transition: 0.06s all linear;
}
.box-card-btn:active {
  transform: scale(1.05);
}
</style>
