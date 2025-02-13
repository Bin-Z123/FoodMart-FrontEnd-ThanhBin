<template>
  <div class="container mt-3">
    <header>
      <div class="d-flex justify-content-between align-items-center">
        <div class="">
          <button
            class="menu-toggle d-lg-none btn btn-primary btn-sm m-2"
            @click="toggleSidebar"
          >
            <i class="bi bi-list"></i>Menu</button
          >Thông Báo
        </div>
        <div>Profile</div>
      </div>
    </header>
  </div>
</template>
<script setup>
defineProps({
  toggleSidebar: Function,
});
</script>
<style scoped>
header {
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
</style>
