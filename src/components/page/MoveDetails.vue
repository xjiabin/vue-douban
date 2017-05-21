<template>
  <div class="details">
    <el-button type="text" icon="arrow-left" @click="goBack">返回</el-button>
    <div v-if="DONE_IS_SHOW">
        <img :src="DONE_MOVIES_DETAILS.images.large" class="move-img"></img>
      <span class="move-title">{{ DONE_MOVIES_DETAILS.title }}</span>
      <span class="move-year">({{ DONE_MOVIES_DETAILS.year }})</span>
      <div>
        <div class="move-directors">
          <span class="directors">导演: </span>
          <span>{{DONE_MOVIES_DETAILS.directors[0].name}}</span>
        </div>
        <div class="move-casts">
          <span class="casts">主演: </span>
          <span v-for="cast in DONE_MOVIES_DETAILS.casts">
            <router-link :to="{name: 'celebrity', params:{ id: cast.id}}">
              {{ cast.name }}&nbsp;&nbsp;
            </router-link>
          </span>
        </div>
        <div class="move-genres">
          <span class="genres">类型: </span>
          <span v-for="genre in DONE_MOVIES_DETAILS.genres">{{ genre }} </span>
        </div>
        <div class="move-summary">
          <p class="move-summary-title">简介</p>
          <span>{{ DONE_MOVIES_DETAILS.summary }}</span>
        </div>
        <div class="move-rating">
          <p class="grade">豆瓣评分</p>
          <div v-if="DONE_MOVIES_DETAILS.rating.average>0">
            <el-rate
              v-model="value"
              disabled
              show-text
              text-color="#ff9900"
              :text-template="average">
            </el-rate>
            <span>{{DONE_MOVIES_DETAILS.ratings_count}}人评价</span>
          </div>
          <p v-else>暂无评分</p>
        </div>
        <div class="wish-watch">
          <el-button type="info" class="btn-watch">想看</el-button>
          <el-button type="info" class="btn-watch">看过</el-button>
        </div>
      </div>
    </div>
    <!--<button @click="gettt">click</button>-->
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
// import {fetchMoveDetails} from '../../store/api'
// import {API_TYPE} from '../../store/api'

export default {
  data () {
    return {

    }
  },
  mounted () {
  },
  created () {
    this.$store.dispatch('FETCH_MOVIES_DETAILS', {
      id: this.$route.params.id
    })
  },
  computed: {
    ...mapGetters(['DONE_MOVIES_DETAILS', 'DONE_IS_SHOW']),
    value () {
      return this.DONE_MOVIES_DETAILS.rating.stars / 10
    },
    average () {
      return this.DONE_MOVIES_DETAILS.rating.average + ''
    }
  },
  // watch: {
  //   value (newVal, oldVal) {
  //     this.value = newVal
  //   },
  //   average (newVal, oldVal) {
  //     this.average = newVal
  //   }
  // },
  destroyed () {
    this.$store.commit('CLEAN_MOVIESDETAILS')
  },
  methods: {
    gettt () {
      console.log(this.DONE_MOVIES_DETAILS)
      console.log(this.value)
      console.log(this.average)
      console.log(this.DONE_IS_SHOW)
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
  .details {
    font-size: 14px;
    color: #666D74;
    margin-bottom: 65px;
  }
  p {
    margin: 0;
    padding: 0;
  }
  .move-img {
   width: 100%;
   height: 100%;
 }
  .move-title {
   color: #494949;
   font-size: 20px;
   font-weight: 700;
 }
  .move-year {
   color: #888888;
   font-size: 20px;
   font-weight: 500;
 }
  .directors, .casts, .genres, .move-summary-title, .grade {
   font-size: 16px;
   color: #56604F;
 }
  .move-directors, .move-casts, .move-genres, .move-summary, .move-rating {
    margin-top: 10px;
 }
  .btn-watch {
   width: 60px;
   height: 30px;
   line-height: 10px;
 }
  a {
    color: #3879C0;
    text-decoration: none;
 }
</style>
