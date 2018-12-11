<template>
  <div class="movie-search">
    <form class="movie-search__form">
      <label for="searchquery" class="movie-search__form__label">
        <i class="fas fa-search" />
      </label>
      <input
        id="searchquery"
        v-model="query"
        type="text"
        class="movie-search__form__input"
        name="searchquery"
        placeholder="Search for your serie..."
        autocomplete="off"
        @keyup="fetchSearchResults"
        @focusout="hideResults"
      >
    </form>

    <div v-show="resultsActive && query != ''" class="movie-search__grid">
      <div v-if="searchResults.length > 0">
        <p
          v-for="movie in searchResults"
          :key="movie.id"
          class="movie-search__item"
          @click="addSeenMovie(movie); resultsActive = false"
        >
          {{ movie.name }}
        </p>
      </div>
      <div v-if="searchResults.length === 0 && this.query != ''">
        <p>No results found for '{{ this.query }}'</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      searchResults: [],
      resultsActive: false
    }
  },
  computed: {
    query: {
      get() {
        return this.$store.state.query
      },
      set(value) {
        this.$store.commit('updateQuery', value)
      }
    }
  },
  methods: {
    ...mapActions(['addSeenMovie']),
    fetchSearchResults() {
      this.resultsActive = true;
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=56506e6256a280dcd69573fa48f1f3fd&query=${this.query}`)
        .then((response) => {
          this.searchResults = response.data.results.splice(0, 3)
        })
        .catch((e) => {
          console.error(e)
        })
    },
    hideResults() {
      setTimeout(() => {
        this.resultsActive = false
      }, 250)
    }
  }
};
</script>
