<template>
  <ModalProduct />
  <div>
    <NavbarAdmin :isHidden="isHidden" :toggleSidebar="toggleSidebar" />
    <!-- Nội dung chính -->
    <div class="content" :style="contentStyle">
      <!-- Header -->
      <HeaderaAdmin :toggleSidebar="toggleSidebar" />
      <!-- <h1>Product</h1> -->
      <div class="container">
        <div class="d-flex justify-content-end mt-3 mb-3">
          <button class="btn btn-success">Add</button>
        </div>
        <table
          class="table table-hover table-bordered align-middle text-center"
        >
          <thead>
            <tr class="table-dark">
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Price</th>
              <th scope="col">Stock Quantity</th>
              <th scope="col">Sold Quantity</th>
              <th scope="col">Status</th>
              <th scope="col">Option</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td><img :src="bananaAPI" alt="img" /></td>
              <td>Bananas</td>
              <td>Fruit</td>
              <td>25.000 VND</td>
              <td>234</td>
              <td>12</td>
              <td>Active</td>
              <td>
                <button
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Edit
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td><img :src="banana" alt="img" /></td>
              <td>Bananas</td>
              <td>Fruit</td>
              <td>25.000 VND</td>
              <td>234</td>
              <td>12</td>
              <td>Active</td>
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
import ModalProduct from "@/components/admin/ModalProduct.vue";
import banana from "@/assets/images/bananas.png";
const { isHidden, contentStyle, toggleSidebar } = layoutNavbarAdmin();
const bananaAPI =
  "https://res.cloudinary.com/ddo8dn17e/image/upload/banana.jpg";
</script>
<style scoped>
td img {
  width: 60px;
  height: 60px;
}
</style>
