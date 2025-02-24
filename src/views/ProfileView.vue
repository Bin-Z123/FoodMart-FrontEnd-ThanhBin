<template>
  <HeaderApp />
  <div class="container">
    <!-- Phần background -->
    <div class="profile-header"></div>

    <!-- Avatar giao nhau giữa background & phần thông tin -->
    <div class="avatar-container">
      <img :src="banana" alt="User Avatar" class="avatar" />
      <div class="justify-content-center change-avatar">
        <button class="btn rounded-pill">
          <i class="fa-solid fa-image"></i><br />
          Change Avatar
        </button>
      </div>
    </div>

    <!-- Phần thông tin -->
    <div class="profile-body p-4 mt-0 row">
      <div class="col-lg-5 mt-2">
        <div class="d-flex align-items-center">
          <h2>{{ user.fullname }}</h2>
          <span><i>(binbolao100)</i></span>
        </div>

        <!-- <form action=""> -->
        <!-- ID -->
        <label class="form-label" for="">UID:</label> <br />
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            name="username"
            id="username"
            :value="user.id"
            disabled
          />
        </div>
        <!-- Fullname -->
        <label class="form-label" for="">Fullname:</label> <br />
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            name="fullname"
            id="fullname"
            v-model="fullname"
            :disabled="isDisabled"
          /><button @click="toggleInput" class="btn btn-light">
            <i class="fa-solid fa-pen"></i>
          </button>
        </div>
        <!-- Email -->
        <label class="form-label" for="">Email:</label> <br />
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            name="username"
            id="username"
            value="thanhvo201600@gmail.com"
            disabled
          />
        </div>
        <!-- Password -->
        <label class="form-label" for="">Password:</label> <br />
        <div class="input-group">
          <input
            class="form-control"
            type="password"
            name="password"
            id="password"
            value="********"
            :disabled="true"
          /><button class="btn btn-light">
            <i class="fa-solid fa-pen"></i>
          </button>
        </div>
        <!-- Role -->
        <label class="form-label" for="">Role:</label> <br />
        <div class="input-group">
          <input
            class="form-control"
            type="text"
            name="role"
            id="role"
            value="User"
            disabled
          />
        </div>

        <p>Sinh viên CNTT | Yêu thích lập trình</p>
        <button class="btn btn-primary">Lưu</button>
        <button
          type="button"
          class="btn btn-outline-secondary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Forgot Password
        </button>
        <!-- </form> -->
      </div>
      <div class="col-lg-1 border-end border-secondary"></div>
      <div class="col-lg-1"></div>
      <div class="col-lg-5 mt-2">
        <div class="d-flex align-items-center justify-content-between">
          <h2>Địa Chỉ</h2>
          <button class="btn btn-success" @click="onToggleAddress">
            + Add Address
          </button>
        </div>
        <!-- New Address -->
        <div
          v-if="isShowAddress"
          class="border-bottom border-secondary mb-3 pb-3"
        >
          <form>
            <label for="" class="form-label"> City: </label> <br />
            <input class="form-control" type="text" name="" id="" /> <br />
            <label for="" class="form-label"> District: </label> <br />
            <input class="form-control" type="text" name="" id="" /> <br />
            <label for="" class="form-label"> Street: </label> <br />
            <input class="form-control" type="text" name="" id="" /> <br />
            <label for="" class="form-label"> Phone: </label> <br />
            <input class="form-control" type="text" name="" id="" /> <br />
            <label for="" class="form-label"> Discription: </label> <br />
            <textarea class="form-control" name="" id=""></textarea><br />
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="reset" class="btn btn-light">Reset</button>
          </form>
        </div>
        <!-- List Address -->
        <ul class="list-group mt-1">
          <li class="list-group-item">
            <div class="d-flex justify-content-between">
              <h5>Address 1</h5>
              <div>
                <button class="btn btn-danger mx-1">
                  <i class="fa-solid fa-trash"></i></button
                ><button class="btn btn-warning">
                  <i class="fa-solid fa-pen"></i>
                </button>
              </div>
            </div>
            <p>City: HCM</p>
            <p>District: 1</p>
            <p>Street: 123 Nguyễn Thị Minh Khai</p>
            <p>Phone: 0123456789</p>
            <p>Discription: Gần chợ Bến Thành</p>
          </li>
          <li class="list-group-item">
            <div class="d-flex justify-content-between">
              <h5>Address 2</h5>
              <div>
                <button class="btn btn-danger mx-1">
                  <i class="fa-solid fa-trash"></i></button
                ><button class="btn btn-warning">
                  <i class="fa-solid fa-pen"></i>
                </button>
              </div>
            </div>
            <p>City: HCM</p>
            <p>District: 1</p>
            <p>Street: 123 Nguyễn Thị Minh Khai</p>
            <p>Phone: 0123456789</p>
            <p>Discription: Gần chợ Bến Thành</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import HeaderApp from "@/components/HeaderApp.vue";
import banana from "../assets/images/me.jpg";
import { ref } from "vue";
import { onMounted } from "vue";
import { fetchUserData } from "@/assets/js/user/fetchUser";

const fullname = ref("Võ Thanh Bin");
const isDisabled = ref(true);
const isShowAddress = ref(false);
const { user, fetchUserProfile } = fetchUserData();
onMounted(() => {
  fetchUserProfile();
});

const onToggleAddress = () => {
  isShowAddress.value = !isShowAddress.value;
};
const toggleInput = () => {
  isDisabled.value = !isDisabled.value;
};
</script>

<style scoped>
/* Background */
.profile-header {
  height: 200px;
  position: relative;
}

/* Avatar */
.avatar-container {
  position: absolute;
  left: 50%;
  top: 150px; /* Đẩy avatar xuống để nó giao nhau giữa 2 phần */
  transform: translateX(-50%);
}

.avatar {
  width: 190px;
  height: 190px;
  border-radius: 50%;
  border: 5px solid #fff; /* Viền trắng cho avatar */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Đổ bóng nhẹ */
}
.change-avatar {
  background-color: #ffffff00;
  position: relative;
  display: flex;
  top: -110px; /* Đẩy nút Change Avatar lên trên */
}
.change-avatar button {
  color: #ffffff00;
}
.change-avatar button:hover {
  color: #000000;
}

/* Phần thông tin */
.profile-body {
  background: #fff;
  padding-top: 80px; /* Đẩy nội dung xuống để tránh avatar che mất */
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.container {
  background: url("../assets/images/bg.png") center/cover;
}
</style>
