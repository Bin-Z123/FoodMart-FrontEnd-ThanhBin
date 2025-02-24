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
import AdminLayout from "@/views/admin/AdminLayout.vue";
const baseURL = process.env.VUE_APP_BASE_URL; //Lấy url của backend từ file .env
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
    path: "/admin",
    component: AdminLayout,
    meta: { requiresAuth: true, role: true },
    children: [
      {
        path: "dashboard",
        name: "DashBoard",
        component: DashBoard,
      },
      {
        path: "account",
        name: "Account",
        component: AccountView,
      },
      {
        path: "category",
        name: "CategoryProduct",
        component: CategoryProductView,
      },
      {
        path: "product",
        name: "Product",
        component: ProductView,
      },
      {
        path: "order",
        name: "Order",
        component: OrderView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    try {
      const response = await fetch(`${baseURL}/api/user/profile`, {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        const userRole = data.result.role;
        if (to.meta.requiresAuth && to.meta.role !== userRole) {
          alert("Bạn không có quyền truy cập!");
          next("/");
        } else {
          next();
        }
      } else if (response.status === 401) {
        //Nêu chưa đăng nhập
        if (to.path !== "/signin") {
          alert("Vui lòng đăng nhập!");
          next("/signin");
        } else {
          next();
        }
      } else {
        alert("Loi khong xac dinh", response.status);
        next("/");
      }
    } catch (error) {
      console.error("Lỗi kiểm tra quyền", error);
      next("/signin");
    }
  } else {
    next();
  }
});

export default router;
