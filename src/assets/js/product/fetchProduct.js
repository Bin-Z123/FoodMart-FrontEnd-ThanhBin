import { ref } from "vue";
export const fetchProductData = () => {
  const urlCloudImage =
    "https://res.cloudinary.com/ddo8dn17e/image/upload/e_background_removal/";

  //Khai báo list product để nhận response từ product
  const products = ref([]);
  const fetchProductsData = async () => {
    try {
      // Chờ response từ backendbackend
      const response = await fetch("http://localhost:9999/api/product", {
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
