<template>
  <div>
    <NavbarAdmin :isHidden="isHidden" :toggleSidebar="toggleSidebar" />
    <!-- Nội dung chính -->
    <div class="content" :style="contentStyle">
      <!-- Header -->
      <HeaderaAdmin :toggleSidebar="toggleSidebar" />
      <h1>Dashboard</h1>
      <p>Nội dung chính của trang.</p>
    </div>
  </div>
</template>
<script setup>
import NavbarAdmin from "@/components/admin/NavbarAdmin.vue";
import HeaderaAdmin from "@/components/admin/HeaderAdmin.vue";
import { layoutNavbarAdmin } from "@/assets/js/layoutNavbarAdmin.js";
const { isHidden, contentStyle, toggleSidebar } = layoutNavbarAdmin();
</script>
