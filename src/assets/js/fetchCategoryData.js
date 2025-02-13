import { ref } from "vue";
export function fetchCategoryData() {
  const categories = ref([]);

  const fetchCategory = async () => {
    try {
      const response = await fetch("http://localhost:9999/api/category");
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
