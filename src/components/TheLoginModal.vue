<template>
  <div class="login-modal">
    <form v-on:submit.prevent="login">
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" />
      <button :disabled="isLoading || !username" class="submit" type="submit">
        {{ isLoading ? "loading..." : "Login" }}
      </button>
      <router-link to="/register">go to register</router-link>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth } from "../utils/auth";

const router = useRouter();
const username = ref("");
let isLoading = ref(false);

async function login() {
  isLoading.value = true;
  try {
    await auth(username.value, "login");
    username.value = "";
    router.push("/");
    isLoading.value = false;
  } catch (error: any) {
    isLoading.value = false;
    alert(error.message);
  }
}
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
  transition: 0.06s all linear;
}

.submit:disabled {
  background-color: #174641;
  color: #8b9594;
}

@media only screen and (max-width: 400px) {
  .login-modal {
    width: 100%;
  }
}
</style>
../utils/auth
