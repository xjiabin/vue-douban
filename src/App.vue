<template>
  <div id="app">
    <!--<header>豆瓣电影</header>-->
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>

import VFooter from './components/Footer'

export default {
  name: 'app',
  components: {
    VFooter
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
header{
  background: #E5E6E8;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}
.view {
  margin-bottom: 65px;
}
</style>
