import * as types from '../types'
import {fetchMovies, fetchMoveDetails, fetchMoviesCelebrity} from '../api'

const state = {
  movies: [],
  moviesType: [],
  moviesDetails: {
    value: 0,
    average: ''
  },
  isLoading: true,
  isShow: false,
  moviesCelebrity: {}
}

const actions = {
  [types.FETCH_MOVIES] (context, payload) {
    // console.log(context)
    fetchMovies(payload.type, payload.start, payload.count).then(data => {
      return context.commit(types.TOGGLE_MOVIES, data)
    })
  },
  [types.FETCH_MOVIES_DETAILS] (context, payload) {
    fetchMoveDetails(payload.id).then(data => {
      return context.commit(types.TOGGLE_MOVIES_DETAILS, data)
    })
  },
  [types.FETCH_MOVIES_CELEBRITY] (context, payload) {
    fetchMoviesCelebrity(payload.id).then(data => {
      console.log(payload.id)
      return context.commit(types.TOGGLE_MOVIES_CELEBRITY, data)
    })
  }
}

const mutations = {
  [types.TOGGLE_MOVIES] (state, data) {
    state.movies.push(data)
    state.isLoading = false
    // state.movies = data
  },

  [types.TOGGLE_MOVIES_DETAILS] (state, data) {
    state.moviesDetails = data
    state.isShow = true
    state.moviesDetails.value = data.rating.stars / 10
    state.moviesDetails.average = data.rating.average + ''
  },

  [types.TOGGLE_MOVIES_CELEBRITY] (state, data) {
    state.moviesCelebrity = data
  },

  [types.CLEAN_MOVIES] (state) {
    if (state.movies.length > 3) {
      state.movies.splice(2, state.movies.length)
    }
  },
  [types.CLEAN_MOVIESDETAILS] (state) {
    state.moviesDetails = ''
  }
}

const getters = {
  [types.DONE_MOVIES]: state => {
    return state.movies
  },

  [types.DONE_MOVIES_DETAILS]: state => {
    return state.moviesDetails
  },

  [types.DONE_MOVIES_CELEBRITY]: state => {
    return state.moviesCelebrity
  },

  [types.DONE_IS_LOADING]: state => {
    return state.isLoading
  },

  [types.DONE_IS_SHOW]: state => {
    return state.isShow
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
