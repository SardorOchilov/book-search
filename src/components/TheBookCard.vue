<template>
  <div :class="`book-card-box`">
    <div class="img-box">
      <img :src="img" alt="" />
    </div>

    <div class="book-description">
      <div class="book-text">
        <h4>{{ title }}</h4>
        <p>{{ author }}</p>
      </div>
      <div class="btn-box" v-if="place !== 'wishlist'">
        <RouterLink :to="id || ''" class="box-card-btn">See detail</RouterLink>
        <button
          class="box-card-btn"
          @click="$emit('onAddToCard', { title, author, img, id })"
        >
          Add to cart
        </button>
      </div>
      <div v-else>
        <button class="box-card-btn amount">-</button>
        <span class="amount-number">{{ amount }}</span>
        <button class="box-card-btn amount">+</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
interface Props {
  title: string;
  author: string;
  img: string;
  id: string;
  place?: string;
  amount?: number;
}
const props = defineProps<Props>();
const amount = ref(props.amount || 0);
</script>

<style scoped>
.book-card-box {
  display: flex;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  border-radius: 7px;
  border: 1px solid #f0f0f1;
}
.img-box {
  position: relative;
  width: 40%;
  height: 230px;
  border-radius: 7px;
  overflow: hidden;
}
.img-box img {
  position: absolute;
  width: 100%;
  height: 100%;
}
.book-description {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 15px;
  flex: 1;
}
h4 {
  font-size: 15px;
  color: #373d3f;
}
.book-description p {
  margin: 10px 0 35px;
  font-size: 14px;
  color: #aaadae;
}
.btn-box {
  display: flex;
  justify-content: center;
}
.box-card-btn {
  padding: 10px 15px;
  margin: 0 auto;
  border: 1px solid #373d3f;
  border-radius: 50px;
  color: #373d3f;
  font-size: 12px;
  cursor: pointer;
  transition: 0.06s all linear;
  background-color: transparent;
}
.box-card-btn:hover {
  background-color: #373d3f;
  color: white;
}
.amount {
  border-radius: 5px;
}
.amount-number {
  padding: 10px 15px;
}
@media only screen and (max-width: 1182px) {
  .book-card-box {
    flex-direction: column;
  }
  .img-box {
    width: 100%;
    height: 250px;
  }
  .btn-box {
    flex-direction: column;
    gap: 10px;
    align-items: stretch;
  }
  .box-card-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
