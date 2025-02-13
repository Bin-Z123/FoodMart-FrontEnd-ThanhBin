<template>
  <div
    class="offcanvas offcanvas-end"
    tabindex="-1"
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
    data-bs-scroll="true"
    role="dialog"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title text-warning" id="offcanvasExampleLabel">
        Your Cart
        <button class="btn btn-warning rounded-pill text-white">3</button>
      </h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <ul class="list-group mb-3">
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">
              Product name Product name Product name Product name Product name
            </h6>
            <div class="d-flex align-item-center">
              <div class="input-group product-qty mt-1">
                <span class="input-group-btn">
                  <button type="button" class="btn btn-danger btn-number">
                    <i class="fa-solid fa-minus fa-lg"></i>
                  </button>
                </span>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  class="form-control input-number"
                  value="1"
                />
                <span class="input-group-btn">
                  <button type="button" class="btn btn-success btn-number">
                    <i class="fa-solid fa-plus fa-lg"></i>
                  </button>
                </span>
              </div>
              <span class="mt-2"
                ><span class="text-white">.</span> <span> x </span>5000
                <span>₫</span></span
              >
            </div>
          </div>
          <span
            class="text-body-secondary align-items-center justify-content-center price"
            style="margin: auto"
          >
            100000<span>₫</span></span
          >
        </li>
        <li class="list-group-item d-flex justify-content-between lh-sm">
          <div>
            <h6 class="my-0">Product name Product name Product name</h6>
            <div class="d-flex align-item-center">
              <div class="input-group product-qty mt-1">
                <span class="input-group-btn">
                  <button type="button" class="btn btn-danger btn-number">
                    <i class="fa-solid fa-minus fa-lg"></i>
                  </button>
                </span>
                <input
                  type="text"
                  name="quantity"
                  id="quantity"
                  class="form-control input-number"
                  value="1"
                />
                <span class="input-group-btn">
                  <button type="button" class="btn btn-success btn-number">
                    <i class="fa-solid fa-plus fa-lg"></i>
                  </button>
                </span>
              </div>
              <span class="mt-2"
                ><span class="text-white">.</span> <span> x </span>5000
                <span>₫</span></span
              >
            </div>
          </div>
          <span
            class="text-body-secondary align-items-center justify-content-center price"
            style="margin: auto"
          >
            100000<span>₫</span></span
          >
        </li>
        <li class="list-group-item d-flex justify-content-between">
          <span class="price" style="font-size: 18px">Total (VND)</span>
          <strong>200000<span>₫</span></strong>
        </li>
      </ul>
      <button
        class="w-100 btn btn-warning btn-lg text-white"
        type="submit"
        cursorshover="true"
      >
        Continue to checkout
      </button>
    </div>
  </div>
</template>
<style scoped>
/* input group */
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}

.product-qty {
  width: 85px;
}
.btn-number {
  width: 26px;
  height: 26px;
  line-height: 1;
  text-align: center;
  background: #ffffff;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  color: #222;
  padding: 0;
}
#quantity {
  height: auto;
  width: 28px;
  border: none;
  margin: 0;
  padding: 0;
  text-align: center;
}
h6 {
  font-weight: 600;
}
.justify-content-between {
  justify-content: space-between !important;
}
.price {
  color: #878787;
}
</style>
