<template>
  <div class="login-modal">
    <form
      v-on:submit="
        (e) => {
          e.preventDefault();
          login(username);
        }
      "
    >
      <label for="username">Username</label>
      <input type="text" id="username" v-model="username" />
      <button :disabled="isLoading" class="submit" type="submit">
        {{ isLoading ? "loading..." : "Login" }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LoginModal",

  setup() {
    const router = useRouter()
    const username = ref("");
    let isLoading = ref(false);

    async function login(username: string) {
      isLoading.value = true;
      if (!/^[a-zA-Z]{16}$/.test(username)) {
        alert("User name is incorrect");
        isLoading.value = false
        return;
      }
      await new Promise((res) =>
        setTimeout(() => {
          res("");
        }, 3000)
      );
      if (window.localStorage.getItem("token") !== username) {
        alert("this user is not found");
      }else {
        router.push('/')
        username = ''
      }
      isLoading.value = false;
    }

    return {
      username,
      isLoading,
      login,
    };
  },
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
