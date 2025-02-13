<template>
  <div>
    <!-- Sidebar -->
    <div class="sidebar" :class="{ 'hide-sidebar': isHidden }" @click.stop>
      <div class="sidebar-header">
        <router-link to="/"
          ><img
            src="https://cdn-icons-png.flaticon.com/128/2942/2942547.png"
            alt="Logo"
            class="logo"
        /></router-link>

        <h5>Spike Admin</h5>
      </div>

      <!-- Menu -->
      <nav class="sidebar-menu px-2">
        <p class="sidebar-title">HOME</p>
        <ul>
          <li
            :class="{ active: selectedItem === 'dashboard' }"
            @click="selectItem('dashboard')"
          >
            <router-link class="router-link" to="/"
              ><i class="bi bi-grid"></i> Dashboard</router-link
            >
          </li>
        </ul>

        <p class="sidebar-title">MANAGEMENT</p>
        <ul>
          <li
            :class="{ active: selectedItem === 'category' }"
            @click="selectItem('category')"
          >
            <router-link
              @click="selectItem('category')"
              class="router-link"
              to="/admin/category"
              ><i class="bi bi-exclamation-circle"></i> Category
              Product</router-link
            >
          </li>
          <li :class="{ active: selectedItem === 'product' }">
            <router-link
              @click="selectItem('product')"
              class="router-link"
              to="/admin/product"
              ><i class="bi bi-exclamation-circle"></i> Product</router-link
            >
          </li>
          <li :class="{ active: selectedItem === 'order' }">
            <router-link
              @click="selectItem('order')"
              class="router-link"
              to="/admin/order"
              ><i class="bi bi-exclamation-circle"></i> Order</router-link
            >
          </li>
          <li :class="{ active: selectedItem === 'account' }">
            <router-link
              @click="selectItem('account')"
              class="router-link"
              to="/admin/account"
            >
              <i class="bi bi-exclamation-circle"></i> Account
            </router-link>
          </li>
        </ul>

        <p class="sidebar-title">AUTH</p>
        <ul>
          <li
            :class="{ active: selectedItem === 'profile' }"
            @click="selectItem('profile')"
          >
            <i class="bi bi-box-arrow-in-right"></i> Profile
          </li>
          <li
            :class="{ active: selectedItem === 'logout' }"
            @click="selectItem('logout')"
          >
            <i class="bi bi-box-arrow-in-right"></i> Logout
          </li>
        </ul>

        <button class="upgrade-btn">Upgrade To Pro</button>
      </nav>
    </div>
  </div>
  <!-- Overlay khi mở sidebar -->
  <div v-if="!isHidden" class="overlay d-lg-none" @click="toggleSidebar"></div>
</template>

<script setup>
import { ref } from "vue";
defineProps({
  isHidden: Boolean,
  toggleSidebar: Function,
});
const selectedItem = ref("");

const selectItem = (item) => {
  selectedItem.value = item;
};
</script>

<style scoped>
.router-link {
  text-decoration: none;
  padding-left: 10px;
}
/* Sidebar */
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100vh;
  background-color: #fff;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  z-index: 2;
}

/* Ẩn sidebar khi màn nhỏ */
.hide-sidebar {
  transform: translateX(-110%);
}

/* Button mở menu */
/* .menu-toggle {
  position: fixed;
  top: 15px;
  left: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 20px;
  border-radius: 8px;
  cursor: pointer;
  z-index: 1001;
  transition: background 0.3s;
} */

/* .menu-toggle:hover {
  background-color: #0056b3;
} */

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1;
  transition: opacity 0.3s ease-in-out;
}

/* Menu */
.sidebar-title {
  font-size: 12px;
  font-weight: bold;
  color: gray;
  margin-top: 15px;
  margin-bottom: 5px;
  padding-left: 10px;
}

.sidebar-menu ul {
  list-style: none;
  padding: 0;
}

.sidebar-menu li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.sidebar-menu li:hover {
  background-color: #f0f6ff;
}

.sidebar-menu li.active {
  background-color: #e1efff;
  color: #007bff;
}

/* Nút Upgrade */
.upgrade-btn {
  margin-top: auto;
  width: 100%;
  background-color: #007bff;
  color: white;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}

.upgrade-btn:hover {
  background-color: #0056b3;
}
</style>
