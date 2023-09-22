<template>
    <div class="layout_body">
      <Sidenav />
      <div class="main_section">
        <Header />
        <div class="inner-section">
          <div class="route-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import Header from './shared/AdminHeader'
import Sidenav from './shared/AdminSidenav'
export default {
  components: {
    Header,
    Sidenav
  }
}
</script>
