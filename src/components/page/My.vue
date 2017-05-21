<template>
  <div class="my">
    <img src="../../assets/logo.png">
    <el-col :span="24">
      <div class="grid-content bg-purple-light">
        <span>以vue-router axois搭建的小Demo</span><br>
        <span>
          使用感谢豆瓣提供的
          <router-link to="https://developers.douban.com/wiki/?title=movie_v2">豆瓣电影接口</router-link>
        </span>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .my{
    overflow: hidden;
    text-align: center;
  }
  .bg-purple-light {
    background: #F9FAFC;
  }
  .grid-content {
    border-radius: 6px;
    min-height: 50px;
    text-align: center;
  }
  a{
    text-decoration: none;
  }
</style>
