<template>
  <div class="topnavbar">

    <div class="topnav">
      <div class="header2">
        <div class="sidebar-toggler" @click="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div></div>
      <div class="option-section">
        <div class="userlog">
          <img class="outsideClick" src="/images/d.png" @click="ProfileOption()" alt="">
          <div class="options profile-option outsideClick">
            <div class="optionHeader">
              <div class="header-wrap">
                <div class="image-wrap">
                  <div class="img">
                    <img src="/images/d.png" alt="">
                  </div>
                </div>
                <div class="info">
                  <div class="name" id="user-name">
                    John Smith
                  </div>
                  <div class="email">
                    john@smith.com
                  </div>
                </div>
              </div>
            </div>
            <div class="profile-body">
              <router-link to="/" class="dropdown-item "><span @click="ProfileOption()"><i
                  class="las la-user"></i>Profile</span></router-link>
              <a class="logout btn btn-sm">Logout</a>
              <a class="logout btn btn-sm d-none">
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2"
                     fill="none" stroke-linecap="round" stroke-linejoin="round"
                     class="css-i6dzq1 la-spin spin">
                  <line x1="12" y1="2" x2="12" y2="6"></line>
                  <line x1="12" y1="18" x2="12" y2="22"></line>
                  <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                  <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                  <line x1="2" y1="12" x2="6" y2="12"></line>
                  <line x1="18" y1="12" x2="22" y2="12"></line>
                  <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                  <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {}
  },
  computed: {},
  methods: {

      ProfileOption(){
          const profileOption = document.querySelector('.profile-option');
          if(profileOption.classList.contains('active')){
            profileOption.classList.remove('active');
          }else{
            profileOption.classList.add('active');
          }
      },
          toggleMenu: function () {
              // this.menuMini =  this.menuMini == false ? true : false;
              // $('.sidenav').toggleClass('mini');
              // $('.sidebar-toggler').toggleClass('active not-active');
              // $('.main_section').toggleClass('full');
              // if($('.sidenav').hasClass('active')){
              //     $('.sidenav').removeClass('active')
              // }else{
              //     $('.sidenav').addClass('active')
              // }
          },
  },
  mounted() {
  }
}
</script>
