<template>
  <HeaderApp />
  <div class="container">
    <div class="w-50 mx-auto mt-3">
      <h2>Sign in</h2>
      <form>
        <div class="mb-3">
          <label class="form-label">Username or Email:</label>
          <input
            type="text"
            class="form-control"
            id="username"
            name="password"
          />
        </div>
        <div class="mb-3">
          <label class="form-label">Password:</label>
          <input
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
</script>
<style scoped>
.container {
  background-image: url("../assets/images/bg.png");
}
</style>
