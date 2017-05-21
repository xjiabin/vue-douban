<template>
  <div class="celebrity">
    <!--<el-button type="text" icon="arrow-left" @click="goBack">返回</el-button>-->
		<div class="celebrity-name">
		  <span class="name">{{DONE_MOVIES_CELEBRITY.name}}</span>
		</div>

		<div class="celebrity-inof">
		  <div class="celebrity-left">
		    <img :src="DONE_MOVIES_CELEBRITY.avatars.medium" class="img">
		  </div>
	    <div class="celebrity-right">
	      <h3 class="name2">{{DONE_MOVIES_CELEBRITY.name}}</h3>
	      <h4 class="name-en">英文名：{{DONE_MOVIES_CELEBRITY.name_en}}</h4>
	      <ul>
	        <li>{{DONE_MOVIES_CELEBRITY.born_place}}</li>
	      </ul>
	    </div>
	  </div>

    <div class="cont" id="movies">
      <section>
        <span class="works">作品</span>
      </section>
      <section class="ii return_name" v-for="work in DONE_MOVIES_CELEBRITY.works">
        <img class="delay" width="60" :src="work.subject.images.small">
        <div class="r">
          <p class="subject-title">{{work.subject.title}}</p>
          <span class="genre">
            <span v-for="genre in work.subject.genres">{{genre}}&nbsp;&nbsp;</span>
          </span>
          <p class="rank">
            评分：<span>{{work.subject.rating.average}}分</span>
          </p>
        </div>
      </section>
      <section class="more">
        <span class="all">浏览全部作品
          <span class="arr_more">
            <span class="arr_right"></span>
          </span>
        </span>
      </section>
    </div>
    <!--<button @click="gettt">click</button>-->
	</div>
</template>

<script>
// import {fetchMoviesCelebrity} from '../../store/api'
import {mapGetters} from 'vuex'

export default {
  data () {
    return {
      celebrityId: ''
    }
  },
  // mounted () {
  //   this.celebrityId = this.$route.params.id
  //   fetchMoviesCelebrity(this.celebrityId).then((response) => {
  //     console.log(response)
  //   })
  // },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    gettt () {
      console.log(this.DONE_MOVIES_CELEBRITY)
    }
  },
  created () {
    this.$store.dispatch('FETCH_MOVIES_CELEBRITY', {
      id: this.$route.params.id
    })
  },
  computed: {
    ...mapGetters(['DONE_MOVIES_CELEBRITY'])
  }
}
</script>

<style scoped>
  body {
    padding: 0;
    margin: 0;
  }
  .celebrity {
    margin-bottom: 60px;
    background: #F4F4F4;
  }
  .celebrity-name{
    width: 100%;
    height: 35px;
    line-height: 30px;
    background: #000;
    text-align: center;
  }
  .name{
    color: #fff;
    font-size: 16px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
  }
  .celebrity-inof {
    width: 100%;
    height: 145px;
  }
  .celebrity-left{
    float: left;
    width: 30%;
    height: 145px;
    line-height: 145px;
    text-align: center;
  }
  .img {
    width: 92px;
    height: 131px;
    margin-top: 10px;
    vertical-align:middle;
  }
  .celebrity-right {
    width: 70%;
    height: 145px;
    float: right;
  }
  .name2{
    display: block;
    font-size: 1.35em;
    font-weight: bold;
    margin-bottom: 0;
    color: rgb(76, 76, 76);
  }
  .name-en {
    display: block;
    font-size: 1.0em;
    font-weight: bold;
    margin-top: 5px;
    color: rgb(76, 76, 76);
  }
  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    font-size: 16px;
    line-height: 18px;
    list-style: none;
    color: rgb(76, 76, 76);
  }
  .cont {
    margin-top: 20px;
  }
  section {
    background: #EBEBEB;
    display: block;
    margin-bottom: 2px;
    padding: 10px;
    font-size: 14px;
    overflow: hidden;
  }
  .ii img {
    float: left;
    margin-right: 10px;
  }
  .r {
    overflow: hidden;
    padding-top: 8px;
  }
  p {
    display: block;
    margin: 0;
    padding: 0;
  }
  .subject-title {
    margin-bottom: 10px;
    font-size: 16px;
  }
  .genre {
    color: #aaa;
  }
  .rank {
    margin-top: 15px;
  }
  .all {
    display: block;
    padding: 15px 10px;
    color: #3879C0;
    text-decoration: none;
  }
  .arr_right {
    display: inline-block;
    height: 8px;
    width: 8px;
    border-right: 4px solid #d7d7d7;
    border-bottom: 4px solid #d7d7d7;
    background: transparent;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    margin-top: 5px;
    float: right;
}

</style>
