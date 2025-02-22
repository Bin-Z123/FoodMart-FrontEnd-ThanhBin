import { ref } from "vue";
// Hàm fetchProductData sẽ gửi request lên backend để lấy dữ liệu product
const urlCloudImage = process.env.VUE_APP_CLOUD_IMG_URL; //Lấy url của cloud image từ file .env
const baseURL = process.env.VUE_APP_BASE_URL; //Lấy url của backend từ file .env
