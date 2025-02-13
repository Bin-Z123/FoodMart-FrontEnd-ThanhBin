import { ref, computed, onMounted, onBeforeUnmount } from "vue";
export function layoutNavbarAdmin() {
  const isHidden = ref(window.innerWidth <= 992);

  const contentStyle = computed(() => ({
    marginLeft: !isHidden.value && window.innerWidth > 992 ? "260px" : "0",
    transition: "margin-left 0.3s ease-in-out",
  }));

  const toggleSidebar = () => {
    isHidden.value = !isHidden.value;
  };

  const checkScreenSize = () => {
    isHidden.value = window.innerWidth <= 992;
  };

  onMounted(() => {
    window.addEventListener("resize", checkScreenSize);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", checkScreenSize);
  });

  return {
    isHidden,
    contentStyle,
    toggleSidebar,
  };
}
