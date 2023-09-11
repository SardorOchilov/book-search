<template>
  <div class="login-modal">
    <form action="">
      <label for="username">Username</label>
      <input type="text" id="username" />
      <button class="submit" type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoginModal",
});
</script>

<style scoped>
.login-modal {
  padding: 50px 20px;
  border-radius: 10px;
  background-color: white;
  width: 300px;
}

form {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

input {
  height: 30px;
  font-size: 16px;
  border-radius: 6px;
  border: 1px solid #e7e7e7;
  padding: 5px 8px;
}

input:focus {
    outline: 1px solid #2b7f75;
}
.submit {
  margin-top: 30px;
  padding: 10px;
  border: 1px solid #2b7f75;
  border-radius: 7px;
  color: white;
  font-size: 14px;
  font-weight: 900;
  background-color: #2b7f75;
  cursor: pointer;
  transition: .06s all linear;
}
.submit:active{
    transform: scale(1.05);
}
</style>
