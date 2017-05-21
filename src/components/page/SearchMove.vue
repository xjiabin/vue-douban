<template>
  <div class="search-move">
    <div>
      <el-input
        placeholder="请输入电影名"
        icon="search"
        v-model="inputText"
        :on-icon-click="handleIconClick">
      </el-input>
    </div>
    <span v-loading.fullscreen="loading" element-loading-text="拼命搜索中"></span>

    <div v-if="isSearch" class="search-result">
      <span class="result-title">{{ movies.title }}</span><br>
      <div class="result-info" v-for="item in movies.subjects">
        <div class="info-left">
          <img :src="item.images.medium" class="move-img" @click="moveDetails(item.id)">
        </div>
        <div class="info-right">
          <ul class="list">
              <li class="list-item"><span class="move-title" @click="moveDetails(item.id)">{{item.title}}</span></li>
              <li class="list-item">
                <span class="move-casts">主演: </span>
                <span class="casts" v-for="cast in item.casts">{{ cast.name }}&nbsp;&nbsp;</span>
              </li>
              <li class="list-item">
                <span class="move-genres">类型: </span>
                <span class="genres" v-for="genre in item.genres">{{ genre }}&nbsp;&nbsp;</span>
              </li>
              <li class="list-item">
                <span class="move-rating" v-if="item.rating.average>0">评分: {{item.rating.average}}</span>
                <span class="move-rating" v-else>暂无评分</span>
              </li>
          </ul>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

import {fetchSearchMoviesByName} from '../../store/api'

export default {
  data () {
    return {
      inputText: '',
      key: '',
      data: [],
      movies: {
        title: ''
      },
      isSearch: false,
      loading: false
    }
  },
  watch: {
    // inputText (newVal, oldVal) {
    //   setTimeout(function () {
    //     console.log(newVal)
    //     this.key = newVal
    //     this.baseUrl = this.baseUrl + this.key
    //     console.log(this.baseUrl)
    //     this.baseUrl = ''
    //   }, 2000)
    // }
  },
  methods: {
    handleIconClick () {
      // this.loading = true
      var name = this.inputText
      console.log(name)
      fetchSearchMoviesByName(name).then((response) => {
        console.log(response)
        this.movies = response
        this.movies.title = response.title
        this.loading = false
        this.isSearch = true
      })
    },
    moveDetails (id) {
      console.log(id)
      this.$router.push({
        name: 'move-details', params: { id: id }
      })
    }
  }
}
</script>

<style scoped>
  .search-move {
    margin-bottom: 60px;
  }
  .result-info {
    width: 100%;
    height: 160px;
    margin: 10px 0 5px 0;
  }
  .result-title {
    font-size: 14px;
    font-weight: 500;
    color: #666;
    padding-left: 10px;
  }
  .info-left {
    float: left;
    width: 130px;
    height: 160px;
    line-height: 160px;
    text-align: center;
  }
  .move-img {
    width: 100px;
    height: 150px;
    vertical-align:middle;
  }
  .info-right {
    float: right; 
    width: 60%;
    padding: 0;
    margin: 0;
  }
  .list {
    padding: 0;
    list-style-type:none;
  }
  .list-item {
    margin-top: 10px;
  }
  .move-title {
    font-size: 18px;
    font-weight: 600;
  }
  .move-casts, .move-genres {
    font-size: 16px;
    font-weight: 500;
  }
  .casts, .genres {
    font-size: 14px;
    font-weight: 500;
    padding-right: 5px;
    color: #666;
  }
  .move-rating {
    font-size: 16px;
    font-weight: 500;
    color: #666;
  }
</style>
