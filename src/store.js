import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    query: '',
    seenMovies: [],
    totalLength: 0
  },
  mutations: {
    updateQuery (state, searchInput) {
      state.query = searchInput
    },
    addMovie (state, movie) {
      state.seenMovies.push(movie)
    },
    deletemovie (state, movieIndex) {
      state.seenMovies.splice(movieIndex, 1)
    },
    addTotalLength (state, serieLength) {
      state.totalLength += serieLength
    },
    reduceTotalLength (state, serieLength) {
      state.totalLength -= serieLength
    },
    clearQuery (state) {
      state.query = ''
    },
    initialiseStore (state) {
      if (localStorage.getItem('serieCounterData')) {
        this.replaceState(
          Object.assign(state, JSON.parse(localStorage.getItem('serieCounterData')))
        )
      }
    },
    clearStore (state) {
      state.query = ''
      state.seenMovies = []
      state.totalLength = 0
    }
  },
  actions: {
    updateQuery ({ commit }, searchInput) {
      commit('updateQuery', searchInput)
    },
    addSeenMovie ({ commit }, movie) {
      axios.get(`https://api.themoviedb.org/3/tv/${movie.id}?api_key=56506e6256a280dcd69573fa48f1f3fd`)
        .then(response => {
          const responseMovie = response.data
          if (!this.state.seenMovies.find(seenMovie => seenMovie.id === responseMovie.id)) {
            const serieLength = responseMovie.number_of_episodes * responseMovie.episode_run_time[0]
            commit('addMovie', responseMovie)
            if (serieLength >= 0) {
              commit('addTotalLength', serieLength)
            }
            commit('clearQuery')
          }
        })
        .catch(e => console.log(e))
    },
    deleteMovie ({ commit }, movie) {
      const serieLength = movie.number_of_episodes * movie.episode_run_time[0]
      const movieIndex = this.state.seenMovies.indexOf(movie)
      commit('deletemovie', movieIndex)
      commit('reduceTotalLength', serieLength)
    },
    clearStorage ({ commit }) {
      commit('clearStore')
    }
  }
})
