<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <!-- Header -->
          <slot name="header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          </slot>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <!-- Body -->
          <slot name="body">...</slot>
        </div>
        <div class="modal-footer">
          <!-- Footer -->
          <slot name="footer"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup></script>
<style scoped>
.modal-dialog {
  z-index: 3 !important;
}
</style>
