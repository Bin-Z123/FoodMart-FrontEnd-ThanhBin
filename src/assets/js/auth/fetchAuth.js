const baseURL = process.env.VUE_APP_BASE_URL;
import { ref } from "vue";
export const fetchlogOut = () => {
  const isLoading = ref(false);
  const fetchLogout = async () => {
    isLoading.value = true;
    try {
      const response = await fetch(`${baseURL}/logout`, {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        console.log("Đăng xuất thành công");
        alert("Đăng xuất thành công");
        window.location.href = "/signin";
      }
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    fetchLogout,
    isLoading,
  };
};
// REGISTER
export const fetchRegisterUser = () => {
  const isLoading = ref(false);
  const fetchRegister = async (userRegister) => {
    isLoading.value = true;
    try {
      const response = await fetch(`${baseURL}/api/register/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userRegister),
      });
      if (response.ok) {
        alert("Đăng ký thành công");
        window.location.href = "/signin";
      } else {
        alert("Lỗi không xác định");
      }
    } catch (error) {
      console.log("Register: ", error);
    } finally {
      isLoading.value = false;
    }
  };
  return {
    fetchRegister,
    isLoading,
  };
};
