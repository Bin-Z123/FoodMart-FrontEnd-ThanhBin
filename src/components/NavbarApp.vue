<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary px-5">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
          <router-link class="nav-link" to="/order">Order</router-link>
          <router-link class="nav-link" to="/admin/dashboard"
            >Admin</router-link
          >
        </div>
      </div>
    </div>
  </nav>
</template>
