<template>
  <div class="login" style="background-image: url('/images/auth-bg.jpg')">
    <div class="login-wrapper">
      <div class="logo">
        <img src="/images/vector/default-monochrome.svg" alt="">
      </div>
      <div class="login-form">
        <form action="">
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" class="from-control">
          </div>
          <div class="form-group">
            <label for="password">password</label>
            <input type="text" name="password" id="password" class="from-control">
          </div>
          <button class="btn btn-theme w-100">Sign In</button>
        </form>
        <div class="option text-center">
          Don't have an account? <router-link :to="{name: 'Register'}">Sign Up</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
