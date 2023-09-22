<template>
  <div class="login" style="background-image: url('/images/auth-bg.jpg')">
    <div class="login-wrapper">
      <div class="logo">
        <img src="/images/vector/default-monochrome.svg" alt="">
      </div>
      <div class="login-form">
        <form action="">
          <div class="form-group">
            <label for="name">Username</label>
            <input type="text" name="name" id="name" class="from-control">
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" class="from-control">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" name="email" id="email" class="from-control">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="from-control">
          </div>
          <div class="form-group">
            <label for="confirm_password">Confirm Password</label>
            <input type="password" name="confirm_password" id="confirm_password" class="from-control">
          </div>
          <button class="btn btn-theme w-100">Sign In</button>
        </form>
        <div class="option text-center">
          Don't have an account? <router-link :to="{name: 'Login'}">Sign In</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
