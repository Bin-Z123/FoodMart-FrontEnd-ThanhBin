<template>
  <div>
    <NavbarAdmin :isHidden="isHidden" :toggleSidebar="toggleSidebar" />
    <!-- Nội dung chính -->
    <div class="content" :style="contentStyle">
      <!-- Header -->
      <HeaderaAdmin :toggleSidebar="toggleSidebar" />
      <h1>Category</h1>
      <div class="container">
        <!-- FORM -->
        <div class="mb-3 w-50">
          <form>
            <div class="mb-3">
              <label for="category" class="form-label">Tên Loại SP: </label>
              <input
                type="category"
                class="form-control"
                id="category"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div class="mb-3">
              <!-- <label for="status" class="form-label">Trạng thái</label> -->
              <!-- <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              /> -->
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        <!-- TABLE -->
        <table
          class="table table-hover table-bordered align-middle text-center"
        >
          <thead class="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Product Quantity</th>
              <th scope="col">Status</th>
              <th scope="col">Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="category in categories" :key="category.id">
              <th scope="row">{{ category.id }}</th>
              <td>{{ category.name }}</td>
              <td>{{ category.product ? category.product.length : 0 }}</td>
              <td>{{ category.status ? "Active" : "Hidden" }}</td>
              <td><button class="btn btn-danger">Delete</button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Fruit</td>
              <td>12</td>
              <td>Hidden</td>
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
// CategoryData
import { fetchCategoryData } from "@/assets/js/fetchCategoryData";
import { onMounted } from "vue";
const { categories, fetchCategory } = fetchCategoryData();
onMounted(() => {
  fetchCategory();
  console.log(categories.value);
});
</script>
