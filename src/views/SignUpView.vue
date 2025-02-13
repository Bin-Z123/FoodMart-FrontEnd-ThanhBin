<template>
  <HeaderApp />
  <div class="container">
    <div class="w-50 mx-auto mt-3">
      <h2>Sign up</h2>
      <form action="">
        <div class="mb-3">
          <label class="form-label">Username:</label>
          <input
            type="text"
            class="form-control"
            id="username"
            name="username"
          />
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
            id="username"
            name="fullname"
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
        <div class="mb-3">
          <label class="form-label">Confirm Password:</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            name="confirmPassword"
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">Sign up</button>
      </form>
    </div>
  </div>
</template>
<script setup>
import HeaderApp from "@/components/HeaderApp.vue";
</script>
<style scoped></style>
