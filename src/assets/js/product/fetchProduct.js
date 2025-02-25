import { ref } from "vue";
// Hàm fetchProductData sẽ gửi request lên backend để lấy dữ liệu product
const urlCloudImage = process.env.VUE_APP_CLOUD_IMG_URL; //Lấy url của cloud image từ file .env
const baseURL = process.env.VUE_APP_BASE_URL; //Lấy url của backend từ file .env
export const fetchProductData = () => {
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
      // console.log(products.value);
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
//CREATE PRODUCT
export const fetchProductCreate = () => {
  async function createProduct(product, file) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );
    console.log(JSON.stringify(product));
    try {
      const response = await fetch(`${baseURL}/api/admin/product`, {
        method: "POST",
        body: formData,
        credentials: "include",
      });
      if (!response.ok) {
        console.log("Loi Khong Xac Dinh: " + response);
      }
      const apiResponse = await response.json();
      console.log("Kết quả trả về sau khi tạo sp: ", apiResponse);
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  }
  return {
    createProduct,
  };
};
// UPDATE Product
export const fetchProductUpdate = () => {
  const isLoading = ref(false);
  const updateProduct = async (idProduct, product, file) => {
    isLoading.value = true;
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "product",
      new Blob([JSON.stringify(product)], { type: "application/json" })
    );
    try {
      const response = await fetch(
        `${baseURL}/api/admin/product/${idProduct}`,
        {
          method: "PUT",
          body: formData,
          credentials: "include",
        }
      );
      if (!response.ok) {
        console.log("Loi Khong Xac Dinh: " + response);
      }
      const apiResponse = await response.json();
      console.log("Dữ liệu trả về sau khi update sp: ", apiResponse);
      return apiResponse;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  return {
    updateProduct,
    isLoading,
  };
};

// DELETE Product
export const fetchProductDelete = () => {
  const deleteProduct = async (idProduct) => {
    try {
      const response = await fetch(
        `${baseURL}/api/admin/product/${idProduct}`,
        {
          method: "DELETE",
          credentials: "include",
        }
      );
      if (!response.ok) {
        console.log("Loi Khong Xac Dinh: " + response);
      }
      const apiResponse = await response.json();
      console.log("Dữ liệu trả về sau khi xoa sp: ", apiResponse);
      return apiResponse;
    } catch (error) {
      console.log(error);
    }
  };
  return {
    deleteProduct,
  };
};
