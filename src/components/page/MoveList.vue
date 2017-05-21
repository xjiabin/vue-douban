<template>
  <div class="move-list">
    <!--<span v-loading.fullscreen="isLoading" element-loading-text="拼命加载中"></span>-->

    <div v-for="items in DONE_MOVIES">
      <div class="more">
        <span class="move-type">{{items.title}}</span>
        <div class="more-move">
          <span>更多</span>
          <span class="el-icon-arrow-right"></span>
        </div>
      </div>
      <div class="in-theaters">
        <ul class="move">
          <li v-for="item in items.subjects" class="move-item" @click="moveDetails(item.id)">
            <div>
              <img :src="item.images.medium" class="move-img"></img>
              <p class="move-title">{{item.title}}</p>
              <span class="move-average" v-if="item.rating.average>0">评分：{{item.rating.average}}分</span>
              <span class="move-average" v-else>暂无评分</span>
            </div>
          </li>
        </ul>
      </div>

    </div>

    <!--<button @click="gettt">click</button>-->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
// import * as types from '../vuex/types'
import {API_TYPE} from '../../store/api'

export default {
  data () {
    return {
      isLoading: true
    }
  },
  created () {
    if (this.DONE_MOVIES.length === 0) {
      this.$store.dispatch('FETCH_MOVIES', {
        type: API_TYPE.movie.in_theaters,
        start: 0,
        count: 5
      })
      this.$store.dispatch('FETCH_MOVIES', {
        type: API_TYPE.movie.coming_soon,
        start: 0,
        count: 5
      })
      this.$store.dispatch('FETCH_MOVIES', {
        type: API_TYPE.movie.top250,
        start: 0,
        count: 5
      })
    }
  },
  computed: {
    ...mapGetters(['DONE_MOVIES', 'DONE_IS_LOADING'])
  },
  destroyed () {
    this.$store.commit('CLEAN_MOVIES')
  },
  // mounted () {
  //   fetchMovies(API_TYPE.movie.in_theaters).then((data) => {
  //     console.log(data)
  //     this.inTheaters = data
  //     this.inTheaters.type = API_TYPE.movie.in_theaters
  //     this.isShow = true
  //   })

  //   fetchMovies(API_TYPE.movie.coming_soon).then((data) => {
  //     console.log(data)
  //     this.comingSoon = data
  //     this.comingSoon.type = API_TYPE.movie.coming_soon
  //   })

  //   fetchMovies(API_TYPE.movie.top250).then((data) => {
  //     console.log(data)
  //     this.top250 = data
  //     this.top250.type = API_TYPE.movie.top250
  //   })
  // },
  methods: {
    gettt () {
      console.log(this.DONE_MOVIES)
    },
    moveDetails (id) {
      console.log(id)
      this.$router.push({
        name: 'move-details', params: { id: id }
      })
    },
    moreMove (type) {
      console.log(type)
      this.$router.push({
        name: 'more-move', params: { type: type }
      })
    }
  }
}
</script>

<style scoped>
  .move-list {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    margin-bottom: 60px;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .more {
    height: 26px;
    line-height: 26px;
    background: #EEF1F6;
    padding-left: 8px;
    border-radius: 4px;
  }
  .more-move {
    float: right;
    padding-right: 10px;
  }
  .in-theaters {
    margin: 0;
    padding: 0;
    display:block;  
    white-space:nowrap;  
    width:100%;
    height: 235px;
    overflow: auto;
  }
  .move {
    padding-left: 10px;
    list-style-type: none;
    margin: 0 auto;
  }
  .move-item {
    width: 100px;
    height: 210px;
    margin: 10px 10px 5px 0;
    display:inline-block; 
    vertical-align: top;
  }
  .move-title {
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    white-space:pre-wrap;  
  }
  .move-img {
    width: 100px;
    height: 140px;
  }
  .move-average {
    font-size: 6px;
    position:relative;
    width: 20px;
    left:0px;
  }
  /*.bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 24px;
  }*/
</style>
