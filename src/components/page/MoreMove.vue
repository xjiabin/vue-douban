<template>
  <div class="more">
    <div class="v-header">
      <el-button type="text" icon="arrow-left" @click="goBack" class="go-back">返回</el-button>
          <span class="title">{{ movies.title }}</span>
    </div>
    <span v-loading.fullscreen="isShow" element-loading-text="拼命加载中"></span>
    <ul class="move">
      <li v-for="item in movies.subjects" class="move-item" @click="moveDetails(item.id)">
        <div>
          <img :src="item.images.small" class="move-img"></img>
          <p class="move-title">{{item.title}}</p>
          <p class="move-average" v-if="item.rating.average>0">评分: {{item.rating.average}}</p>
          <span class="move-average" v-else>暂无评分</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

import {fetchMoreMovies} from '../../store/api'

export default {
  data () {
    return {
      type: '',
      movies: {
        title: ''
      },
      isShow: true
    }
  },
  mounted () {
    this.type = this.$route.params.type
    fetchMoreMovies(this.type).then((response) => {
      console.log(response)
      this.movies = response
      this.movies.title = response.title
      this.isShow = false
    })
  },
  methods: {
    moveDetails (id) {
      console.log(id)
      this.$router.push({
        name: 'move-details', params: { id: id }
      })
    },
    goBack () {
      this.$router.replace({
        name: 'move-list'
      })
    }
  }
}
</script>

<style scoped>
  .more {
    margin-bottom: 60px;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .move {
    list-style-type: none;
    margin: 0 auto;
  }
  .move-item {
    float: left;
    /*text-align: center;*/
    width: 65px;
    height: 170px;
    margin: 10px 5px 0 5px;
  }
  .move-title {
    margin: 0;
    font-size: 8px;
    font-weight: 700;
  }
  .move-img {
    width: 65px;
    height: 100px;
  }
  .move-average {
    font-size: 6px;
    position:relative;
    left:0px;
  }
  .loading {
    text-align:center;
  }
  .v-header {
    height: 30px;
  }
  .title {
    font-size: 16px;
    font-weight: 600;
    width: 80%;
    text-align: center;
  }
  .go-back {
    width: 50px;
    text-align: left;
  }
</style>
