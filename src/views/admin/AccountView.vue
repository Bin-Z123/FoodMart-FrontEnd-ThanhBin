<template>
  <div>
    <NavbarAdmin :isHidden="isHidden" :toggleSidebar="toggleSidebar" />
    <!-- Nội dung chính -->
    <div class="content" :style="contentStyle">
      <!-- Header -->
      <HeaderaAdmin :toggleSidebar="toggleSidebar" />
      <h1>Account</h1>
      <div class="container">
        <table
          class="table table-hover table-bordered align-middle text-center"
        >
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fullname</th>
              <th scope="col">Email</th>
              <th scope="col">Username</th>
              <!-- <th scope="col">Quantity Purchased</th> -->
              <th scope="col">Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <th scope="row">{{ user.id }}</th>
              <td>{{ user.fullname }}</td>
              <td>{{ user.email }}</td>
              <td>{{ user.username }}</td>
              <!-- <td>3</td> -->
              <td><button class="btn btn-danger">Delete</button></td>
            </tr>
            <!-- <tr>
              <th scope="row">1</th>
              <td>Thanh Bin</td>
              <td>thanhbin123@gmail.com</td>
              <td>binbolao100</td>
              <td>3</td>
              <td><button class="btn btn-danger">Delete</button></td>
            </tr> -->
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import NavbarAdmin from "@/components/admin/NavbarAdmin.vue";
import HeaderaAdmin from "@/components/admin/HeaderAdmin.vue";
import { layoutNavbarAdmin } from "@/assets/js/layoutNavbarAdmin.js";
import { fetchAllUser } from "@/assets/js/user/fetchUser";
import { onMounted } from "vue";
const { users, fetchAllUsers } = fetchAllUser();
const { isHidden, contentStyle, toggleSidebar } = layoutNavbarAdmin();
onMounted(() => {
  fetchAllUsers();
});
</script>
