<template>
  <div class="vue-tempalte">
    <!-- Navigation header -->
    <nav
      class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top"
    >
      <div class="container">
        <router-link to="/home">
          <a
            class="navbar-brand float-left"
          >
            合作金庫
          </a>
        </router-link>
        <!-- <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
        </ul> -->
      </div>
    </nav>

    <!-- Main -->
    <router-view />
    <!-- footer -->
    <BaseFooter/>
  </div>
  
</template>

<script>
// import BaseHeader from './components/BaseHeader'
import BaseFooter from './components/BaseFooter'
import router from './router';
export default {

  components: {
    // BaseHeader,
    BaseFooter,
    router
},

}
</script>