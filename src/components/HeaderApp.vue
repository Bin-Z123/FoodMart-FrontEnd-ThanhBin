<template>
  <header>
    <div class="container-fluid">
      <div class="row py-3 border-bottom">
        <div class="col-sm-4 col-lg-3 text-center text-sm-start">
          <div class="logo">
            <router-link to="/"><img :src="logo" alt="logo" /></router-link>
          </div>
        </div>
        <div
          class="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block"
        >
          <div class="search-bar bg-light p-2 rounded-4">
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-light text-black" type="submit">
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>
        </div>
        <div
          class="col-sm-8 col-lg-4 d-flex justify-content-end justify-content-center align-items-center"
        >
          <ul
            class="justify-content-end d-flex m-0 list-unstyled align-items-center"
          >
            <!-- Profile -->
            <li>
              <router-link
                to="/profile"
                class="rounded p-1 bg-light d-flex flex-column align-items-center"
              >
                <span>Profile <i class="fa-regular fa-user fa"></i></span>
                <span
                  class="d-none d-lg-block"
                  style="font-weight: 700; font-size: 18px"
                  v-text="user.fullname"
                ></span
              ></router-link>
            </li>
            <!-- Your Cart -->
            <li>
              <button
                class="btn border-0 bg-light d-flex flex-column align-items-center"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
                @click="eventBus.showOffcanvas = true"
              >
                <span
                  >Your Cart <i class="fa-solid fa-cart-shopping fa"></i
                ></span>
                <span
                  class="d-none d-lg-block"
                  style="font-weight: 700; font-size: 18px"
                  >{{ totalAmount }}<span> ₫</span></span
                >
              </button>
            </li>
            <!-- Login -->
            <li v-if="!isLogin">
              <router-link
                to="/signin"
                class="rounded p-1 bg-light me-2 d-flex flex-column align-items-center"
              >
                <span><i class="fa-solid fa-right-to-bracket"></i></span>
                <span
                  class="d-none d-lg-block"
                  style="font-weight: 700; font-size: 18px"
                  >Sign In</span
                ></router-link
              >
            </li>
            <li v-else>
              <router-link
                to="#"
                @click="fetchLogout"
                class="rounded p-1 bg-light me-2 d-flex flex-column align-items-center"
              >
                <span><i class="fa-solid fa-right-to-bracket"></i></span>
                <span
                  class="d-none d-lg-block"
                  style="font-weight: 700; font-size: 18px"
                  >Logout</span
                ></router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <CartApp
      :user="user"
      :isLogin="isLogin"
      @update-total="handleUpdateTotal"
    />
    <ForgotPasswordModal />
  </header>
  <div class="box"></div>
</template>

<script setup>
import logo from "../assets/images/logo.png";
import CartApp from "./CartApp.vue";
import ForgotPasswordModal from "./ForgotPasswordModal.vue";
import { onMounted, ref } from "vue";
import { fetchUserData } from "@/assets/js/user/fetchUser";
import { fetchlogOut } from "@/assets/js/auth/fetchAuth";
import { eventBus } from "@/assets/js/eventBus";
const { fetchLogout } = fetchlogOut();
const { user, fetchUserProfile, isLogin } = fetchUserData();

// const fetchLogout = async () => {};
const totalAmount = ref(0);

const handleUpdateTotal = (newTotal) => {
  totalAmount.value = newTotal;
};
onMounted(() => {
  fetchUserProfile();
});
</script>
<style scoped>
a {
  text-decoration: none;
  color: #000000;
}

header {
  background-color: rgba(255, 255, 255, 0.65);
  background-image: url("../assets/images/bg.png");
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.box {
  height: 100px;
}
</style>
