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
            name="username"
            placeholder="Username or Email"
            autocomplete="username"
            @input="error.messages = ''"
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
            placeholder="Password"
            autocomplete="current-password"
            @input="error.messages = ''"
          />
          <p class="text-danger">{{ error.messages }}</p>
        </div>
        <div class="mb-3 form-check d-flex justify-content-between">
          <div>
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
              disabled
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
        <button type="submit" class="btn btn-primary w-100">
          <span v-if="isLoading" :disabled="isLoading"
            ><div class="spinner-border spinner-border-sm" role="status"></div>
            Signing in...</span
          >
          <span v-else>Sign in</span>
        </button>
      </form>
      <p class="mt-2 mb-2 text-center">or</p>
      <router-link to="/signup"
        ><button type="button" class="btn btn-success w-100">
          Sign up
        </button></router-link
      >
    </div>
  </div>
</template>
<script setup>
import HeaderApp from "@/components/HeaderApp.vue";
import { ref } from "vue";
import { fetchUserData } from "@/assets/js/user/fetchUser";

const formLogin = ref({
  username: "",
  password: "",
});
const error = ref({
  messages: "",
});
const isLoading = ref(false);
const fetchLogin = async () => {
  isLoading.value = true;
  console.log(formLogin.value.username, formLogin.value.password);
  const formData = new FormData();
  formData.append("username", formLogin.value.username);
  formData.append("password", formLogin.value.password);
  try {
    const response = await fetch("http://localhost:9999/login", {
      method: "POST",
      body: formData,
      credentials: "include", // Để lưu session ID vào cookie
    });

    if (response.ok) {
      console.log("Đăng nhập thành công");
      const { user, fetchUserProfile } = fetchUserData();
      await fetchUserProfile();
      console.log("User Login:", user.role);
      console.log("Role:", user.role);
      if (user.value.role == true) {
        window.location.href = "/admin/dashboard";
      } else {
        window.location.href = "/";
      }
    } else {
      switch (response.status) {
        case 401:
          error.value.messages = "Sai tài khoản hoặc mật khẩu";
          break;
        default:
          alert("Loi khong xac dinh", response.status);
      }
    }
    const text = await response.text();
    console.log(text);
  } catch (error) {
    console.log("Error", error);
  } finally {
    isLoading.value = false;
  }
};
</script>
<style scoped>
.container {
  background-image: url("../assets/images/bg.png");
}
</style>
