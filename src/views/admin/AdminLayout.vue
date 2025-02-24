<template>
  <div>
    <NavbarAdmin :isHidden="isHidden" :toggleSidebar="toggleSidebar" />
    <router-view></router-view>
  </div>
</template>
<script setup>
import NavbarAdmin from "@/components/admin/NavbarAdmin.vue";
// import HeaderaAdmin from "@/components/admin/HeaderAdmin.vue";
import { layoutNavbarAdmin } from "@/assets/js/layoutNavbarAdmin.js";
const { isHidden, toggleSidebar } = layoutNavbarAdmin();
</script>
