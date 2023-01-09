<template>
  <div id="app">
    <!-- Navigation header -->
    <BaseHeader/>
    <!-- Main -->
    <div class="test_body">
      <router-view />
    </div>
    <!-- footer -->
    <BaseFooter/>
  </div>
  
</template>

<script>
// import BaseHeader from './components/BaseHeader'
import BaseFooter from './components/BaseFooter'
import BaseHeader from './components/BaseHeader'

import router from './router';
export default {

  components: {
    BaseHeader,
    BaseFooter,
    router
},

}
</script>


<style>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 98vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>