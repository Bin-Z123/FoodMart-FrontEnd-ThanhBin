<template>
  <HeaderApp />
  <div class="container">
    <div class="w-50 mx-auto mt-3">
      <h2>Sign in</h2>
      <form @submit.prevent="fetchLogin">
        <div class="mb-3">
          <label class="form-label">Username or Email:</label>
          <input
            v-model="formLogin.username"
            type="text"
            class="form-control"
            id="username"
            name="password"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Password:</label>
          <input
            v-model="formLogin.password"
            type="password"
            class="form-control"
            id="password"
            name="password"
          />
        </div>
        <div class="mb-3 form-check d-flex justify-content-between">
          <div>
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Remember me</label
            >
          </div>

          <button
            type="button"
            class="btn btn-link text-decoration-none text-black"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Forgot Password ?
          </button>
        </div>
        <button type="submit" class="btn btn-primary w-100">Sign in</button>
      </form>
      <p class="mt-2 mb-2 text-center">or</p>
      <router-link to="/signup"
        ><button type="btn" class="btn btn-success w-100">
          Sign up
        </button></router-link
      >
    </div>
  </div>
</template>
<script setup>
import HeaderApp from "@/components/HeaderApp.vue";
import { ref } from "vue";
const formLogin = ref({
  username: "",
  password: "",
});
const fetchLogin = async () => {
  console.log(formLogin.value.username, formLogin.value.password);
  try {
    const response = await fetch("http://localhost:1234/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: formLogin.value.username,
        password: formLogin.value.password,
      }),
    });

    if (!response.ok) {
      console.log("Loi Khong Xac Dinh: " + response);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
};
</script>
<style scoped>
.container {
  background-image: url("../assets/images/bg.png");
}
</style>
