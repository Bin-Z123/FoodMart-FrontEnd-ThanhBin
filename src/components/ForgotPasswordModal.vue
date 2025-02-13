<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            Forgot Password
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form action="">
            <label class="form-label" for="">Email:</label>
            <div class="input-group">
              <input type="email" class="form-control" />
              <button type="button" class="btn btn-outline-secondary">
                Send
              </button>
            </div>

            <label class="form-label" for="">OTP:</label>
            <div class="input-group w-50">
              <input class="form-control" type="text" />
              <h5 class="mt-1 mx-2">2:30</h5>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <i class="text-warning">* Cung toi se gui otp sau khi ban gui email</i
          ><br />
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Next</button>
        </div>
      </div>
    </div>
  </div>
</template>
