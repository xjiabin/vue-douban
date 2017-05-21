<template>
  <div class="nav">
    <ul>
      <!--<li>
        <a href="#"><img src="images/ni4.jpg" height="20"></span><span>首页</span></a>
      </li>-->

      <li>
        <router-link to="/"><span>首页</span></router-link>
      </li>
      <li style="position:relative;">
        <a href="#"><span>搜索</span></a>
      </li>
      <li>
        <a href="#"><span>我的</span></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      radio: '首页'
    }
  },
  methods: {
  }
}
</script>

<style type="text/css">

.nav {
    background: #009c39;
    padding: 10px 0 6px 0;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
}
.nav ul {
    height: 0px;
}
.nav ul li {
    float: left;
    width: 33.3%;
    text-align: center;
    list-style-type: none;
    margin: 0px;
    padding: 0px;
}
.nav ul li span {
    display: block;
    color: #fff;
    font-size: 14px;
    font-family: "微软雅黑";
    line-height: 22px;
}
a {
    color: #000;
    text-decoration: none;
}
* {
    padding: 0;
    margin: 0;
    list-style: none;
    font-weight: normal;
}

</style>
