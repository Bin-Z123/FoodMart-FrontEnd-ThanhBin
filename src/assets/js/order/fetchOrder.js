import { ref } from "vue";
const baseURL = process.env.VUE_APP_BASE_URL; //Lấy url của backend từ file .env
//Create Order
export const fetchCreate = () => {
  const isLoadingOrder = ref(false);
  const fetchOrderCreate = async (idUser, order) => {
    isLoadingOrder.value = true;
    const formData = new FormData();
    formData.append("idUser", idUser);
    formData.append(
      "order",
      new Blob([JSON.stringify(order)], { type: "application/json" })
    );
    console.log("FormData Order: ");
    for (const pair of formData.entries()) {
      console.log(pair[0], pair[1]);
    }
    try {
      const response = await fetch(`${baseURL}/api/user/order`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        console.log("Đặt hàng thành công", data);
        alert("Đặt hàng thành công");
        return data;
      } else if (response.status === 403 || response.status === 401) {
        alert("Vui lòng đăng nhập");
      } else {
        console.error("Lỗi không xác định", data);
        alert("Lỗi không xác định");
      }
    } catch (error) {
      console.error("error order: ", error);
    } finally {
      isLoadingOrder.value = false;
    }
  };
  return {
    isLoadingOrder,
    fetchOrderCreate,
  };
};
