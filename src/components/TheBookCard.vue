<template>
  <div class="book-card-box">
    <div class="img-box"></div>
    <img src="b" alt="" />
    <div class="book-description">
      <h4>Tittle</h4>
      <p>author</p>
      <div class="btn-box">
        <button class="box-card-btn">See detail</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BookCard",
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
  width: 300px;
  box-shadow: 0px 2.72px 3.712px 0px rgba(0, 0, 0, 0.01),
    0px 12.16px 8.576px 0px rgba(0, 0, 0, 0.01),
    30px 30.24px 20px 0px rgba(0, 0, 0, 0.02);
  border-radius: 20px;
  border: 1px solid #f2eeee;
}
.img-box {
  width: 100%;
  height: 150px;
}
.book-card-box img {
  object-fit: contain;
}
.book-description {
  padding: 20px 15px;
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
  font-weight: 900;
  background-color: #2b7f75;
  cursor: pointer;
  transition: .06s all linear;
}
.box-card-btn:active{
    transform: scale(1.05);
}
</style>
