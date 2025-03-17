import { ref } from "vue";
// Hàm fetchProductData sẽ gửi request lên backend để lấy dữ liệu product
//const urlCloudImage = process.env.VUE_APP_CLOUD_IMG_URL; //Lấy url của cloud image từ file .env
const baseURL = process.env.VUE_APP_BASE_URL; //Lấy url của backend từ file .env

//PROFILE
export const fetchUserData = () => {
  const user = ref([]);
  const isLogin = ref(false);
  const fetchUserProfile = async () => {
    try {
      const response = await fetch(`${baseURL}/api/user/profile`, {
        method: "GET",
        credentials: "include",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        user.value = data.result;
        console.log("User: ", user.value);
        isLogin.value = true;
      } else if (response.status === 401 || response.status === 403) {
        isLogin.value = false;
      } else {
        isLogin.value = false;
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    user,
    isLogin,
    fetchUserProfile,
  };
};
// ADDRESS
export const fetchUserAddress = () => {
  const addresses = ref([]);
  const fetchUserAddresses = async (userID) => {
    try {
      const response = await fetch(`${baseURL}/api/user/address/${userID}`, {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        addresses.value = data.result;
      } else if (response.status === 401 || response.status === 403) {
        alert("Vui lòng đăng nhập");
        window.location.href = "/signin";
      } else {
        alert("Lỗi không xác định");
      }
    } catch (error) {
      console.error("Er Adress", error);
    }
  };
  return {
    addresses,
    fetchUserAddresses,
  };
};
// CREATE ADDRESS
export const fetchUserAddressCreate = () => {
  const isLoadingAddress = ref(false);
  const fetchAddressCreate = async (address) => {
    isLoadingAddress.value = true;
    try {
      const response = await fetch(`${baseURL}/api/user/address`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(address),
        credentials: "include",
      });
      if (response.ok) {
        alert("Thêm địa chỉ mới thành công");
        const data = response.json;
        console.log("Dữ liệu trả về khi thêm address: ", data);
      } else if (response.status === 401 || response.status === 403) {
        alert("Vui Lòng Đăng Nhập");
      } else {
        alert("Lỗi không xác định");
      }
    } catch (error) {
      console.error(error);
    } finally {
      isLoadingAddress.value = false;
    }
  };
  return {
    isLoadingAddress,
    fetchAddressCreate,
  };
};
//ALL USER
export const fetchAllUser = () => {
  const users = ref([]);
  const fetchAllUsers = async () => {
    try {
      const response = await fetch(`${baseURL}/api/user`, {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json();
        users.value = data;
      } else if (response.status === 401 || response.status === 403) {
        alert("Vui Lòng Đăng Nhập");
      } else {
        alert("Lỗi không xác định");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return {
    users,
    fetchAllUsers,
  };
};
