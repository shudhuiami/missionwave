<template>
    <div class="sidenav">
        <div class="header">
            <router-link :to="{ name: 'Dashboard' }" class="title">
                <img src="/images/vector/default-monochrome.svg" alt=""
                     style="width: 148px;height: 36px;object-fit: contain;">
            </router-link>
            <div class="sidebar-toggler" @click="toggleMenu()">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="body">
            <div class="mainOptions">
                <router-link @click="closeMenu" :to="{name: 'Dashboard'}">
                    <i class="las la-home"></i><span>Dashboard</span></router-link>
                <router-link @click="closeMenu" :to="{name: 'Task'}">
                  <i class="las la-tasks"></i><span>Task</span></router-link>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
        };
    },
    methods: {
      toggleMenu: function () {
        const sidenav = document.querySelector('.sidenav');
        const sidebarToggler = document.querySelector('.sidebar-toggler');
        const mainSection = document.querySelector('.main_section');
        if (sidenav.classList.contains('mini')) {
          sidenav.classList.remove('mini')
        } else {
          sidenav.classList.add('mini')
        }
        if (sidebarToggler.classList.contains('active.not-active')) {
          sidebarToggler.classList.remove('active.not-active')
        } else {
          sidebarToggler.classList.add('active.not-active')
        }

        if (sidenav.classList.contains('active')){
          sidenav.classList.remove('active')
        } else {
          sidenav.classList.add('active')
        }

        if (mainSection.classList.contains('full')) {
          mainSection.classList.remove('full')
        } else {
          mainSection.classList.add('full')
        }
      },
      closeMenu: function () {
        const sidenav = document.querySelector('.sidenav');
        const mainSection = document.querySelector('.main_section');
        if (window.screen.width < 1025) {
          sidenav.classList.remove('active')
          sidenav.classList.add('mini')
          mainSection.classList.add('full')
        }
      },
    },
};
</script>
