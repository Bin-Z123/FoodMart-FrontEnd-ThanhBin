<template>
  <BaseModal id="orderDetailUser">
    <template #header> Chi tiết đơn hàng </template>
    <template #body>
      <div>ID:{{ order.id }}</div>
    </template>
    <template #footer>
      <button class="btn btn-secondary" type="button" data-bs-dismiss="modal">
        Close
      </button>
    </template>
  </BaseModal>
</template>
<script setup>
import { ref, watch, defineProps } from "vue";
import BaseModal from "@/components/admin/BaseModal.vue";
const order = ref({});
const props = defineProps({
  selectOrderDetail: {
    type: Object,
    default: null,
  },
});

watch(
  () => props.selectOrderDetail,
  (newValue) => {
    if (newValue) {
      order.value = { ...newValue };
      console.log("Selected Order Detail: ", newValue);
    }
  },
  { immediate: true }
);
</script>
