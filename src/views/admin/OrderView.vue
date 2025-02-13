<template>
  <div>
    <NavbarAdmin :isHidden="isHidden" :toggleSidebar="toggleSidebar" />
    <!-- Nội dung chính -->
    <div class="content" :style="contentStyle">
      <!-- Header -->
      <HeaderaAdmin :toggleSidebar="toggleSidebar" />
      <h1>Order</h1>
      <div class="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ordered By</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Order Date</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
              <th scope="col">Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Thanh Bin</td>
              <td>56.000 VND</td>
              <td>2023-01-01</td>
              <td>0123456789</td>
              <td>Delivered</td>
              <td><button class="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>Thanh Bin</td>
              <td>56.000 VND</td>
              <td>2023-01-01</td>
              <td>0123456789</td>
              <td>Delivered</td>
              <td><button class="btn btn-danger">Delete</button></td>
            </tr>
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
const { isHidden, contentStyle, toggleSidebar } = layoutNavbarAdmin();
</script>
