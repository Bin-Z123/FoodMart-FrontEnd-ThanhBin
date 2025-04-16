<template>
  <HeaderApp />
  <section>
    <div class="container-fluid">
      <table class="table table-bordered table-striped table-hover">
        <caption>
          Danh sách đơn hàng
        </caption>
        <thead class="align-middle">
          <tr>
            <th>STT</th>
            <th>Họ tên</th>
            <th>Số lượng sản phẩm</th>
            <th>Tổng tiền</th>
            <th>Ngày đặt</th>
            <th>Trạng thái</th>
            <th>Chi tiết</th>
          </tr>
        </thead>
        <tbody class="align-middle">
          <tr v-for="(order, index) in orders" :key="order.id">
            <td>{{ index + 1 }}</td>
            <td>{{ userFullname }}</td>
            <td>{{ order.orderDetail.length }}</td>
            <td>{{ order.totalAmount }}</td>
            <td>{{ order.orderDate }}</td>

            <td v-if="order.status === 'COMPLETED'">Đã xử lý</td>
            <td v-else-if="order.status === 'CANCELLED'">Đã hủy</td>
            <td v-else-if="order.status === 'DELIVERED'">Đã giao hàng</td>
            <td v-else>Đang xử lý</td>
            <td>
              <button class="btn btn-primary">Xem chi tiết</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>
<script setup>
import HeaderApp from "@/components/HeaderApp.vue";
import { onMounted, ref, watch } from "vue";
import { OrderUser } from "@/assets/js/order/fetchOrder";
import { fetchUserData } from "@/assets/js/user/fetchUser";

const { orders, fetchOrderUser } = OrderUser();
const { user, fetchUserProfile } = fetchUserData();

const userID = ref("");
const userFullname = ref("");

onMounted(async () => {
  await fetchUserProfile();
  await fetchOrderUser(userID.value);
  console.log("Order User: ", orders.value);
  console.log("User ID: ", userID.value);
});

watch(
  () => user.value,
  (newValue) => {
    userID.value = newValue.id;
    userFullname.value = newValue.fullname;
  }
);
</script>
