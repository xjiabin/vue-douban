# vue-douban

> 使用vue-router+vuex+axios实现简易豆瓣电影APP

参考资料:
  1.vuex中文文档: https://vuex.vuejs.org/zh-cn/
  2.Vuex基础：教程与释义: http://www.jianshu.com/p/10fd4a872af5
  3.vue2.x-douban: https://github.com/superman66/vue2.x-douban
  4.Axios 中文说明: http://www.kancloud.cn/yunye/axios/234845
  ........



实现过程遇到的问题：
  1.一开始没有使用vuex来管理这个Demo的状态, 导致每次切换界面axios都要重新请求一次数据
  2.使用vuex时, 不清楚vuex的原理如何, 是如何使用的
  3.axios请求数据数据的时候需要配置请求头



解决方法：
  1.使用vuex来统一管理状态
  2.多多多看别人写的Demo, 然后自己写一些测试练习
  3.vue提供了代理, 可以在config/index.js下的proxyTable中配置如下代码:
      '/api': {
        target: 'https://api.douban.com/v2',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }


实现：
  1.首页电影列表
  2.查看电影详情信息
  3.查看影人信息
  4.实现了搜索功能


待实现：
  1.更多。。。
  


感想：
  算是我学vue以来第一个Demo, 虽然简单, 不过感觉还行
  过程踩了一些坑, 遇到了很多问题, 但基本都是别人踩过的,遇到过的,其他的自己耐心点还是可以解决的
  
  最后给自己一个小小的目标奖励: 
    再做几个Demo巩固所学的知识......


======================
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
