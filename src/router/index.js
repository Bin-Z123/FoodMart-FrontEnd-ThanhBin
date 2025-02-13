import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import ProfileView from "../views/ProfileView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import DashBoard from "../views/admin/DashBoardView.vue";
import AccountView from "../views/admin/AccountView.vue";
import CategoryProductView from "../views/admin/CategoryProductView.vue";
import ProductView from "../views/admin/ProductView.vue";
import OrderView from "../views/admin/OrderView.vue";
const routers = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignInView,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUpView,
  },
  //Admin
  {
    path: "/admin/dashboard",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/admin/account",
    name: "Account",
    component: AccountView,
  },
  {
    path: "/admin/category",
    name: "CategoryProduct",
    component: CategoryProductView,
  },
  {
    path: "/admin/product",
    name: "Product",
    component: ProductView,
  },
  {
    path: "/admin/order",
    name: "Order",
    component: OrderView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

export default router;
