import { ref } from "vue";
export const fetchProductData = () => {
  const urlCloudImage = process.env.VUE_APP_CLOUD_IMG_URL; //Lấy url của cloud image từ file .env
  const baseURL = process.env.VUE_APP_BASE_URL; //Lấy url của backend từ file .env

  //Khai báo list product để nhận response từ product
  const products = ref([]);
  const fetchProductsData = async () => {
    try {
      // Chờ response từ backendbackend
      const response = await fetch(`${baseURL}/api/product`, {
        method: "GET",
      });
      // Nếu response không có thì in ra lỗilỗi
      if (!response.ok) {
        console.log("Loi Khong Xac Dinh: " + response);
      }
      // Nhận được response từ backend rồi đưa response vào List Product vừa khai báo ở trêntrên
      products.value = await response.json();
      console.log(products.value);
    } catch (error) {
      //Này là code lỗi sẽ báo ở đây
      console.log(error);
    }
  };

  return {
    products,
    urlCloudImage,
    fetchProductsData,
  };
};
