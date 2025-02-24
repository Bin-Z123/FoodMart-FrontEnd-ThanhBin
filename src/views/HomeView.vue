<template>
  <HeaderApp :fetchCartUser="fetchCartUser" />
  <NavbarApp />
  <SliderApp />
  <!-- <CartApp /> -->
  <section class="py-5 px-5">
    <div class="d-flex justify-content-between align-items-center">
      <h2>All Product</h2>
      <select class="form-select align-items-end w-25" id="category">
        <option value="all">All</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <div
            class="products-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5"
          >
            <div
              class="col"
              v-for="product in products"
              :key="product.id"
              :class="'overflow-hidden'"
            >
              <div class="product-item">
                <span class="text-decoration-line-through position-absolute m-3"
                  >10000</span
                >
                <figure>
                  <a href="/" :title="product.nameProduct"
                    ><img
                      class=""
                      style="height: 200px"
                      :src="banana"
                      alt="img"
                  /></a>
                </figure>
                <h3>{{ product.nameProduct }}</h3>
                <span class="qty"
                  >{{ product.stockQuantity }}<span> unit/sold </span
                  >{{ product.soldQuantity }}</span
                >
                <span class="price">{{ product.price }} <span>₫</span></span>

                <div class="d-flex align-item-center justify-content-center">
                  <a
                    href="#"
                    class="add-cart text-decoration-none"
                    @click.prevent="addCart(product.id)"
                    >Add to cart</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import HeaderApp from "@/components/HeaderApp.vue";
import NavbarApp from "@/components/NavbarApp.vue";
import SliderApp from "@/components/SliderApp.vue";
import banana from "../assets/images/bananas.png";
import { onMounted } from "vue";
import { ref } from "vue";
import { fetchAddCartProduct } from "@/assets/js/cart/fetchCart";
import { fetchCartbyUser } from "@/assets/js/cart/fetchCart";
import { fetchUserData } from "@/assets/js/user/fetchUser";
import { eventBus } from "@/assets/js/eventBus";
// Category
const categories = ref([]);

const fetchCategoryData = async () => {
  try {
    const response = await fetch("http://localhost:9999/api/category");
    if (!response.ok) {
      console.log("Loi Khong Xac Dinh: " + response);
    }
    categories.value = await response.json();
    console.log(categories.value);
  } catch (error) {
    console.log(error);
  }
};

// Product
import { fetchProductData } from "@/assets/js/product/fetchProduct.js";
const { products, fetchProductsData } = fetchProductData();
onMounted(() => {
  fetchCategoryData();
  fetchProductsData();
  console.log(document.cookie);
});
// ADD CART

const { fetchAddCart } = fetchAddCartProduct();
const { fetchUserProfile, user } = fetchUserData();
const { fetchCartUser } = fetchCartbyUser();

const addCart = async (idProduct) => {
  await fetchUserProfile();
  await fetchAddCart(user.value.id, idProduct, 1);

  eventBus.cartUpdated = true; // Cho biến mới tạo - true

  console.log("Product add Cart");
};
</script>

<style scoped>
.product-item h3 {
  display: block;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  width: 100%;
}

.product-item {
  position: relative;
  padding: 16px;
  background: #ffffff;
  border: 1px solid #fbfbfb;
  box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  margin-bottom: 30px;
  transition: box-shadow 0.3s ease-out;
}

.product-item:hover {
  box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.1);
}

.product-item figure {
  background: #f9f9f9;
  border-radius: 12px;
  text-align: center;
  margin: 0 0 1rem;
}

.product-item .qty {
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #9d9d9d;
}

.product-item .price {
  display: block;
  width: 100%;
  font-weight: 600;
  font-size: 22px;
  line-height: 30px;
  text-transform: capitalize;
  color: #222222;
}

img,
svg {
  vertical-align: middle;
}

.add-cart {
  color: #878787;
}

/* input group */
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.product-item .product-qty {
  width: 85px;
}

.product-item .btn-number {
  width: 26px;
  height: 26px;
  line-height: 1;
  text-align: center;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  color: #222;
  padding: 0;
}

.product-item #quantity {
  height: auto;
  width: 28px;
  border: none;
  margin: 0;
  padding: 0;
  text-align: center;
}

.justify-content-between {
  justify-content: space-between !important;
}
</style>
