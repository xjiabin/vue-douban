<template>
  <div class="TalionNav">
    <el-menu :default-active="activeIndex" class="menu" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1" class="menu-item">首页</el-menu-item>
      <el-menu-item index="2" class="menu-item">搜索</el-menu-item>
      <el-menu-item index="3" class="menu-item">我的</el-menu-item>
    </el-menu>
  </div>  
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (index) {
      if (index === '1') {
        this.$router.push('move-list')
      } else if (index === '2') {
        this.$router.push('search-move')
      } else if (index === '3') {
        this.$router.push('my')
      }
    }
  }
}
</script>

<style type="text/css">
  .TalionNav {
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
  }
  .menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center; 
    font-size: 16px;
  }
  .menu-item {
    width: 33.3%;
    height: 50px;
    text-align: center;
  }
</style>
