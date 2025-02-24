import { ref } from "vue";
const baseURL = process.env.VUE_APP_BASE_URL;
// LOAD CART
export const fetchCartbyUser = () => {
  const carts = ref([]);
  const fetchCartUser = async (userid) => {
    const response = await fetch(`${baseURL}/api/user/cart/${userid}`, {
      method: "GET",
      credentials: "include",
    });
    if (!response.ok) {
      console.log("Loi Khong Xac Dinh: " + response);
    }
    carts.value = await response.json();
    console.log("cart fetchCartUser: ", carts.value);
  };

  return {
    carts,
    fetchCartUser,
  };
};
// ADD CART
export const fetchAddCartProduct = () => {
  const isLoadingCart = ref(false);
  const fetchAddCart = async (idUser, idProduct, quantity) => {
    isLoadingCart.value = true;
    const response = await fetch(`${baseURL}/api/user/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idUser: idUser,
        idProduct: idProduct,
        quantity: quantity,
      }),
      credentials: "include",
    });
    if (response.ok) {
      const apiResponse = await response.json();
      console.log("Dữ liệu trả về sau khi thêm giỏ hàng: ", apiResponse);
    } else if (response.status === 401 || response.status === 403) {
      alert("Vui lòng đăng nhập");
    }
  };
  return {
    fetchAddCart,
    isLoadingCart,
  };
};
// UPDATE CART
