
import axios from 'axios'

export const API_TYPE = {
  movie: {
    in_theaters: 'in_theaters',
    coming_soon: 'coming_soon',
    top250: 'top250'
  }
}

export function fetch (url, start, count) {
  var baseUrl = ''
  if (start && count) {
    baseUrl = '/api/movie/'.concat(url + '?start=' + start + '&count=' + count)
  } else {
    baseUrl = '/api/movie/'.concat(url)
  }
  console.log(baseUrl)
  return new Promise((resolve, reject) => {
    axios.get(baseUrl).then((response) => {
      resolve(response.data)
    })
  })
}

export function fetchMovies (_type, _start, _count) {
  return fetch(_type, _start, _count)
}

export function fetchMoreMovies (_type) {
  return fetch(_type)
}

export function fetchMoveDetails (_id) {
  var id = 'subject/'.concat(_id)
  return fetch(id)
}

// export function fecthSearchMovieByTag (_tag) {
//   var tag = 'search?tag='.concat(_tag)
//   return fetch(tag)
// }

export function fetchSearchMoviesByName (_name) {
  var name = 'search?q='.concat(_name)
  return fetch(name)
}

export function fetchMoviesCelebrity (_id) {
  var celebrityId = 'celebrity/'.concat(_id)
  return fetch(celebrityId)
}

export function fetchMoviesCelebrityPhotos (_id) {
  var celebrityId = 'celebrity/'.concat(_id).concat('/photos')
  return fetch(celebrityId)
}
