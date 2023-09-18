<template>
  <div class="sidebar-box">
    <div class="search-box">
      <input
        class="search-input"
        @keyup.enter="$emit('onChangeSearch', search)"
        type="text"
        placeholder="Title, Subject"
        v-model="search"
      />
      <i class="fas fa-search"></i>
    </div>

    <ul class="categories" v-for="topic of sidebar_dates">
      <p class="title">{{ topic.theme }}</p>
      <div class="sub-title-box">
        <li @click = "$emit('onChangeSearch', title)" class="sub-title" v-for="title of topic.sub_titles">
          {{ title }}
        </li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import { sidebar_dates } from "../data/sidebar";
const search = ref('');
</script>

<style scoped>
.sidebar-box {
  height: 100vh;
  overflow-y: scroll;
  background-color: #fbfbfb;
  padding: 30px;
  border-radius: 20px;
}
.sidebar-box::-webkit-scrollbar {
  display: none;
}
.search-box {
  border-bottom: 1px solid #aaadae;
  display: flex;
}
.fa-search {
  color: #aaadae;
}
.search-input {
  border: none;
  padding-right: 5px;
  width: 100%;
  padding-bottom: 5px;
  outline: none;
  background-color: transparent;
  font-size: 16px;
}
.categories {
  margin-top: 30px;
}
.title {
  color: #030303;
  font-weight: 500;
  font-size: 20px;
}
.sub-title {
  color: #aaadae;
  list-style: none;
  padding: 5px;
  transition: 0.1s all linear;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
}
.sub-title:hover {
  background-color: #373d3f;
  color: white;
}
.sub-title-box {
  margin-top: 15px;
}
</style>
