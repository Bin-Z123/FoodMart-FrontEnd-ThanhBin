import { ref } from "vue";
export function fetchCategoryData() {
  const categories = ref([]);
  const baseURL = process.env.VUE_APP_BASE_URL;
  const fetchCategory = async () => {
    try {
      const response = await fetch(`${baseURL}/api/category`);
      if (!response.ok) {
        console.log("Loi Khong Xac Dinh: " + response);
      }
      categories.value = await response.json();
      console.log(categories.value);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    categories,
    fetchCategory,
  };
}
