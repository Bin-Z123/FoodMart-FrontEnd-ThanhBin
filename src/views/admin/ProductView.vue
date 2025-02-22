<template>
  <ModalProduct />
  <div>
    <NavbarAdmin :isHidden="isHidden" :toggleSidebar="toggleSidebar" />
    <!-- Nội dung chính -->
    <div class="content" :style="contentStyle">
      <!-- Header -->
      <HeaderaAdmin :toggleSidebar="toggleSidebar" />
      <!-- <h1>Product</h1> -->
      <!-- Modal -->
      <ProductModal
        :selectedProduct="selectedProduct"
        @productCreated="fetchProductsData"
      />
      <div class="container">
        <div class="d-flex justify-content-end mt-3 mb-3">
          <button
            data-bs-toggle="modal"
            data-bs-target="#productCreate"
            class="btn btn-success"
          >
            Add
          </button>
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
              <th scope="col">Create At</th>
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
              <td></td>
            </tr>
            <tr v-for="product in products" :key="product.id">
              <th scope="row">{{ product.id }}</th>
              <td><img :src="urlCloudImage + product.image" alt="img" /></td>
              <td>{{ product.nameProduct }}</td>
              <td>{{ product.category_name }}</td>
              <td>{{ product.price }} VND</td>
              <td>{{ product.stockQuantity }}</td>
              <td>{{ product.soldQuantity }}</td>
              <td>{{ product.createAt }}</td>
              <td>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#productEdit"
                  class="btn btn-success"
                  @click="openEditProduct(product)"
                >
                  Edit
                </button>
              </td>
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
import ModalProduct from "@/components/admin/BaseModal.vue";
// import banana from "@/assets/images/bananas.png";
const { isHidden, contentStyle, toggleSidebar } = layoutNavbarAdmin();
import { fetchProductData } from "@/assets/js/product/fetchProduct";
import { onMounted, ref } from "vue";
import ProductModal from "@/components/admin/ProductModal.vue";
const { products, fetchProductsData, urlCloudImage } = fetchProductData();
onMounted(() => {
  fetchProductsData();
});
// EDIT PRODUCT
// Lưu sản phẩm được chọn
const selectedProduct = ref(null);

const openEditProduct = (product) => {
  selectedProduct.value = { ...product };
  console.log("Select Product:", selectedProduct.value);
};
</script>
<style scoped>
td img {
  width: 60px;
  height: 60px;
}
</style>
