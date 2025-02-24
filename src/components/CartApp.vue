<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
    data-bs-scroll="true"
    role="dialog"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title text-warning" id="offcanvasExampleLabel">
        Your Cart
        <button class="btn btn-warning rounded-pill text-white">
          {{ carts.length }}
        </button>
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="list-group mb-3">
        <li
          class="list-group-item d-flex justify-content-between lh-sm"
          v-for="cart in carts"
          :key="cart.id"
        >
          <div>
            <h6 class="my-0">
              {{ cart.product.nameProduct }}{{ cart.id.idUser }}
            </h6>
            <div class="d-flex align-item-center">
              <div class="input-group product-qty mt-1">
                <span class="input-group-btn">
                  <button type="button" class="btn btn-danger btn-number">
                    <i class="fa-solid fa-minus fa-lg"></i>
                  </button>
                </span>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  class="form-control input-number"
                  v-model="cart.quantity"
                />
                <span class="input-group-btn">
                  <button type="button" class="btn btn-success btn-number">
                    <i class="fa-solid fa-plus fa-lg"></i>
                  </button>
                </span>
              </div>
              <span class="mt-2"
                ><span class="text-white">.</span> <span> x </span
                >{{ cart.product.price }} <span>₫</span></span
              >
            </div>
          </div>
          <span
            class="text-body-secondary align-items-center justify-content-center price total"
            style="margin: auto"
          >
            {{ calculateTotal(cart) }}<span>₫</span></span
          >
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span class="price" style="font-size: 18px">Total (VND)</span>
          <strong class="total">{{ toTal() }}<span>₫</span></strong>
        </li>
      </ul>
      <button
        class="w-100 btn btn-warning btn-lg text-white"
        type="submit"
        cursorshover="true"
      >
        Continue to checkout
      </button>
    </div>
  </div>
</template>
<script setup>
import { onMounted, watch } from "vue";
import { fetchCartbyUser } from "@/assets/js/cart/fetchCart";
import { defineProps, defineEmits } from "vue";
import { eventBus } from "@/assets/js/eventBus";
// AddCart
const emit = defineEmits(["update-total"]);
const calculateTotal = (cart) => {
  if (!cart || !cart.product || !cart.quantity || !cart.product.price) {
    return 0;
  }
  return cart.quantity * cart.product.price;
};
const toTal = () => {
  const total = carts.value.reduce(
    (total, cart) => total + calculateTotal(cart),
    0
  );
  emit("update-total", total);
  return total;
};

// LOAD CART
const props = defineProps({
  user: Object,
  isLogin: Boolean,
});
const { carts, fetchCartUser } = fetchCartbyUser();
onMounted(() => {
  if (props.isLogin && props.user && props.user.id) {
    fetchCartUser(user.id);
    console.log("user-cart: ", user.value);
    console.log("cart: ", carts.value);
  }
});
watch(
  () => props.user,
  async (newUser) => {
    if (props.isLogin && newUser && newUser.id) {
      await fetchCartUser(newUser.id);
      console.log("user-cart(watch): ", newUser);
      console.log("cart(watch): ", carts.value);
    }
  },
  { immediate: true }
);
// Lắng nghe sự kiện và fetch lại giỏ hàng khi có cập nhật
watch(
  () => eventBus.cartUpdated,
  async (newValue) => {
    if (newValue && props.user && props.user.id) {
      await fetchCartUser(props.user.id);
      eventBus.cartUpdated = false; //đổi lại trạng thái ban đầu cho eventBus
      console.log("Cart updated and reloaded!");
    }
  }
);
</script>
<style scoped>
/* input group */
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.product-qty {
  width: 85px;
}
.btn-number {
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
#quantity {
  height: auto;
  width: 28px;
  border: none;
  margin: 0;
  padding: 0;
  text-align: center;
}
h6 {
  font-weight: 600;
}
.justify-content-between {
  justify-content: space-between !important;
}
.price {
  color: #878787;
}
</style>
