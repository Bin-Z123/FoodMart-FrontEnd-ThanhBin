<template>
  <!-- CREATE -->
  <BaseModal id="productCreate">
    <template #header>
      <h5 class="modal-title">New Product</h5>
    </template>
    <template #body>
      <div>
        <h2>Tạo Sản Phẩm Mới</h2>
        <form @submit.prevent="handleSubmit" ref="productFormC">
          <div class="row">
            <!-- Cột trái: Form nhập liệu -->
            <div class="col-md-6">
              <!-- Tên sản phẩm -->
              <div class="mb-3">
                <label for="nameProduct" class="form-label">Tên Sản Phẩm</label>
                <input
                  v-model="formProduct.nameProduct"
                  type="text"
                  id="nameProduct"
                  class="form-control"
                  placeholder="Nhập tên sản phẩm"
                  required
                />
              </div>

              <!-- Giá sản phẩm -->
              <div class="mb-3">
                <label for="price" class="form-label">Giá</label>
                <input
                  v-model="formProduct.price"
                  type="number"
                  id="price"
                  class="form-control"
                  placeholder="Nhập giá sản phẩm"
                  required
                />
              </div>

              <!-- Hình ảnh: URL -->
              <div class="mb-3">
                <label for="image" class="form-label">Đường dẫn hình ảnh</label>
                <input
                  type="file"
                  accept="image/*"
                  @change="handleImageChange"
                  id="imageC"
                  class="form-control"
                  placeholder="Nhập URL hình ảnh"
                />
              </div>
              <input type="hidden" v-model="formProduct.image" />
              <!-- Số lượng tồn kho -->
              <div class="mb-3">
                <label for="stockQuantity" class="form-label"
                  >Số lượng tồn kho</label
                >
                <input
                  v-model="formProduct.stockQuantity"
                  type="number"
                  id="stockQuantity"
                  class="form-control"
                  placeholder="Nhập số lượng tồn kho"
                  required
                />
              </div>
              <!-- Giảm giágiá -->
              <div class="mb-3">
                <label for="stockQuantity" class="form-label">Discount</label>
                <input
                  v-model="formProduct.discount"
                  type="number"
                  id="discount"
                  class="form-control"
                  placeholder="Giảm giá"
                  required
                />
              </div>

              <!-- Danh mục -->
              <div class="mb-3">
                <label for="category" class="form-label">Danh Mục</label>
                <select
                  id="category"
                  class="form-select"
                  v-model.number="formProduct.category.id"
                  required
                >
                  <option disabled value="3">-- Chọn danh mục --</option>
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Mota</label>
                <textarea
                  id="description"
                  class="form-control"
                  placeholder="Nhập mô tả sản phẩm"
                ></textarea>
              </div>
              <!-- Các trường ẩn hoặc mặc định -->
              <!-- status, discount, soldQuantity được đặt mặc định trong newProduct -->

              <button type="submit" class="btn btn-primary">
                Tạo sản phẩm
              </button>
              <button
                type="reset"
                @click="img = null"
                class="btn btn-secondary"
              >
                Reset
              </button>
            </div>

            <!-- Cột phải: Hiển thị preview hình ảnh -->
            <div
              class="col-md-6 d-flex justify-content-center align-items-center"
            >
              <div v-if="img">
                <img
                  :src="img"
                  alt="Preview hình ảnh sản phẩm"
                  class="img-fluid rounded"
                  style="max-height: 300px"
                />
              </div>
              <div v-else class="text-muted">
                Hình ảnh preview sẽ hiển thị ở đây
              </div>
            </div>
          </div>
        </form>
      </div>
    </template>
    <template #footer>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Đóng
      </button>
    </template>
  </BaseModal>

  <!-- EDIT -->
  <BaseModal id="productEdit">
    <template #header>
      <h5 class="modal-title">
        {{ localProduct.id }}.{{ localProduct.nameProduct }}
      </h5>
    </template>
    <template #body>
      <div>
        <form @submit.prevent="handleSubmitUpdate" ref="productFormU">
          <div class="row">
            <!-- Cột trái: Form nhập liệu -->
            <div class="col-md-6">
              <!-- Tên sản phẩm -->
              <div class="mb-3">
                <label for="nameProduct" class="form-label">Tên Sản Phẩm</label>
                <input
                  v-model="localProduct.nameProduct"
                  type="text"
                  id="nameProduct"
                  class="form-control"
                  placeholder="Nhập tên sản phẩm"
                  required
                />
              </div>

              <!-- Giá sản phẩm -->
              <div class="mb-3">
                <label for="price" class="form-label">Giá</label>
                <input
                  v-model="localProduct.price"
                  type="number"
                  id="price"
                  class="form-control"
                  placeholder="Nhập giá sản phẩm"
                  required
                />
              </div>

              <!-- Hình ảnh: URL -->
              <div class="mb-3">
                <label for="image" class="form-label">Đường dẫn hình ảnh</label>
                <input
                  type="file"
                  accept="image/*"
                  @change="handleImageChange"
                  id="imageU"
                  class="form-control"
                  placeholder="Nhập URL hình ảnh"
                />
              </div>
              <input type="hidden" v-model="localProduct.image" />

              <!-- Số lượng tồn kho -->
              <div class="mb-3">
                <label for="stockQuantity" class="form-label"
                  >Số lượng tồn kho</label
                >
                <input
                  v-model="localProduct.stockQuantity"
                  type="number"
                  id="stockQuantity"
                  class="form-control"
                  placeholder="Nhập số lượng tồn kho"
                  required
                />
              </div>
              <!-- Giảm giágiá -->
              <div class="mb-3">
                <label for="stockQuantity" class="form-label">Discount</label>
                <input
                  v-model="localProduct.discount"
                  type="number"
                  id="discount"
                  class="form-control"
                  placeholder="Giảm giá"
                  required
                />
              </div>

              <!-- Danh mục -->
              <div class="mb-3">
                <label for="category" class="form-label">Danh Mục</label>
                <select
                  id="category"
                  class="form-select"
                  v-model.number="localProduct.category_id"
                  required
                >
                  <option
                    v-for="category in categories"
                    :key="category.id"
                    :value="category.id"
                  >
                    {{ category.name }}
                  </option>
                </select>
              </div>
              <div class="mb-3">
                <label for="category" class="form-label">Status</label>
                <select
                  id="category"
                  class="form-select"
                  v-model.number="localProduct.status"
                  required
                >
                  <option :value="true">In Stock</option>
                  <option :value="false">Empty</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">Mota</label>
                <textarea
                  id="description"
                  class="form-control"
                  placeholder="Nhập mô tả sản phẩm"
                  v-model="localProduct.description"
                ></textarea>
              </div>
              <!-- Các trường ẩn hoặc mặc định -->
              <!-- status, discount, soldQuantity được đặt mặc định trong newProduct -->

              <button
                type="submit"
                class="btn btn-primary"
                :disabled="isLoading"
              >
                <span v-if="isLoading">
                  <div
                    class="spinner-border spinner-border-sm"
                    role="status"
                  ></div>
                  Update...
                </span>
                <span v-else>Update</span>
              </button>
              <button
                type="reset"
                @click="img = null"
                class="btn btn-secondary"
              >
                Reset
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="handDelete(localProduct.id)"
              >
                Delete Product With ID{{ localProduct.id }}
              </button>
            </div>

            <!-- Cột phải: Hiển thị preview hình ảnh -->
            <div
              class="col-md-6 d-flex justify-content-center align-items-center"
            >
              <div v-if="localProduct.image && !img">
                <img
                  :src="urlCloudImage + localProduct.image"
                  alt=" Hình ảnh từ csdl,cloud sẽ hiển thị ở đây"
                  class="img-fluid rounded"
                  style="max-height: 300px"
                />
              </div>
              <div v-if="img">
                <img
                  :src="img"
                  alt=" Hình ảnh được chọn sẽ hiển thị ở đây"
                  class="img-fluid rounded"
                  style="max-height: 300px"
                />
              </div>
              <!-- <div v-else class="text-muted">
                Hình ảnh preview sẽ hiển thị ở đây
              </div> -->
            </div>
          </div>
        </form>
      </div>
    </template>
    <template #footer>
      <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
        Đóng
      </button>
    </template>
  </BaseModal>
</template>
<script setup>
import BaseModal from "./BaseModal.vue";
import { ref, watch, defineProps, reactive, onMounted } from "vue";
import { fetchProductCreate } from "@/assets/js/product/fetchProduct";
import { fetchProductUpdate } from "@/assets/js/product/fetchProduct";
import { fetchProductDelete } from "@/assets/js/product/fetchProduct";
import { fetchCategoryData } from "@/assets/js/fetchCategoryData";
// import { fetchProductUpdate } from "@/assets/js/product/fetchProduct";
const { categories, fetchCategory } = fetchCategoryData();
const urlCloudImage = process.env.VUE_APP_CLOUD_IMG_URL;
const productFormC = ref(null);
const productFormU = ref(null);
const img = ref(null);
/*
  CREATE sản phẩm
*/
const { createProduct } = fetchProductCreate();
const emit = defineEmits(["productCreated"]);
const formProduct = reactive({
  category: {
    id: 3,
  },
});
const handleSubmit = async () => {
  const file = document.getElementById("imageC").files[0];
  if (file.size > 10 * 1024 * 1024) {
    alert("File quá lớn! Chỉ chấp nhận tối đa 10MB.");
    return;
  }
  const createdProduct = await createProduct(formProduct, file);
  console.log(
    "Form Product:",
    JSON.stringify(formProduct),
    file,
    createdProduct
  );
  if (createdProduct) {
    productFormC.value.reset();
    img.value = null;
    emit("productCreated");
    alert("Tạo sản phẩm thành công");
  }
};
// Xử lý load ảnh lên form
const handleImageChange = (e) => {
  const file = e.target.files[0];
  formProduct.image = file.name;
  localProduct.value.image = file.name;
  const reader = new FileReader();
  reader.onload = () => {
    img.value = reader.result;
  };
  reader.readAsDataURL(file);
};

/*
  EDIT sản phẩm
*/
// const { updateProduct } = fetchProductUpdate();
// localProduct dùng để hiển thị thông tin sản phẩm
const { updateProduct, isLoading } = fetchProductUpdate();
const localProduct = ref({});
const handleSubmitUpdate = async () => {
  const file = document.getElementById("imageU").files[0];
  const updatedProduct = await updateProduct(
    localProduct.value.id,
    localProduct.value,
    file
  );
  console.log("Form ProductU:", localProduct.value, file);
  if (updatedProduct) {
    console.log("Cập nhật sản phẩm thành công", localProduct.value);
    productFormU.value.reset();
    img.value = null;
    emit("productCreated");
    alert("Cập nhật sản phẩm thành công");
  }
};

// DELETE
const { deleteProduct } = fetchProductDelete();
const handDelete = async (idProduct) => {
  const deletedProduct = await deleteProduct(idProduct);
  if (deletedProduct) {
    emit("productCreated");
    alert("Xoa san pham thanh cong");
  }
};
// Nhận prop từ component cha
const props = defineProps({
  selectedProduct: {
    type: Object,
    default: null,
  },
});
// Sử dụng watch để cập nhật localProduct mỗi khi prop thay đổi
watch(
  () => props.selectedProduct,
  (newProduct) => {
    if (newProduct) {
      localProduct.value = { ...newProduct };
    }
  },
  { immediate: true }
);
onMounted(() => {
  fetchCategory();
});
</script>
