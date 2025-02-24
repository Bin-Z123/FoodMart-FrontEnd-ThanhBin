<template>
  <HeaderApp />
  <div class="container">
    <div class="w-50 mx-auto mt-3">
      <h2>Sign up</h2>
      <form @submit.prevent="handleRegister">
        <div class="mb-3">
          <label class="form-label">Username:</label>
          <input
            type="text"
            class="form-control"
            id="username"
            name="username"
            @input="messError.username = ''"
            v-model="formRegister.username"
          />
          <p class="text-danger">{{ messError.username }}</p>
        </div>
        <div class="mb-3">
          <label class="form-label">Email:</label>
          <input type="email" class="form-control" id="username" name="email" />
        </div>
        <div class="mb-3">
          <label class="form-label">Fullname:</label>
          <input
            type="text"
            class="form-control"
            id="email"
            name="email"
            @input="messError.fullname = ''"
            v-model="formRegister.fullname"
          />
          <p class="text-danger">{{ messError.fullname }}</p>
        </div>
        <div class="mb-3">
          <label class="form-label">Password:</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            @input="messError.password = ''"
            v-model="formRegister.password"
          />
          <p class="text-danger">{{ messError.password }}</p>
        </div>
        <div class="mb-3">
          <label class="form-label">Confirm Password:</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            name="confirmPassword"
            @input="messError.confirmPassword = ''"
            v-model="confirmPassword"
          />
          <p class="text-danger">{{ messError.confirmPassword }}</p>
        </div>
        <button
          type="submit"
          class="btn btn-primary w-100"
          :disabled="isLoading"
        >
          <span v-if="isLoading"
            ><div class="spinner-border spinner-border-sm" role="status"></div>
            Sign up...
          </span>
          <span v-else>Sign up</span>
        </button>
      </form>
    </div>
  </div>
</template>
<script setup>
import HeaderApp from "@/components/HeaderApp.vue";
import { fetchRegisterUser } from "@/assets/js/auth/fetchAuth";
import { ref } from "vue";
const { fetchRegister, isLoading } = fetchRegisterUser();
const formRegister = ref({
  username: "",
  fullname: "",
  password: "",
  email: "",
});
const messError = ref({
  username: "",
  password: "",
  email: "",
  fullname: "",
  confirmPassword: "",
});
const confirmPassword = ref("");
const handleRegister = () => {
  if (
    formRegister.value.username.length < 6 ||
    formRegister.value.fullname.length > 18
  ) {
    messError.value.username = "Username must be at least 6-18 characters";
  } else if (
    formRegister.value.password.length < 6 ||
    formRegister.value.password.length > 18
  ) {
    messError.value.password = "Password must be at least 6-18 characters";
  } else if (formRegister.value.password !== confirmPassword.value) {
    messError.value.confirmPassword = "Password not match";
  } else {
    fetchRegister(formRegister.value);
  }
};
</script>
<style scoped></style>
