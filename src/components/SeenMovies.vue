<template>
  <div>
    <app-time-counter></app-time-counter>
    <h2>Series I have seen:</h2>
    <transition-group name="fade" class="seen-movie__grid" mode="out-in" tag="div">
      <div
        v-if="seenMovies.length > 0"
        v-for="movie in seenMovies"
        :key="movie.id"
        class="seen-movie__item"
      >
        <a href="/" class="seen-movie__delete" @click.prevent="deleteMovie(movie)">
          <i class="fas fa-times"></i>
        </a>
        <img :src="`https://image.tmdb.org/t/p/w342${movie.poster_path}`" class="seen-movie__image">
        <p class="seen-movie__title">{{ movie.name }}</p>
        <p
          class="seen-movie__info"
        >{{ movie.number_of_episodes }} episodes in {{ movie.number_of_seasons }} seasons</p>
      </div>
    </transition-group>
    <div v-if="seenMovies.length === 0">
      <p>You haven't added a serie yet.. Use the search function to add a serie.</p>
    </div>
  </div>
</template>

<script>
import TimeCounter from "./TimeCounter";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    appTimeCounter: TimeCounter
  },
  computed: {
    ...mapState({
      seenMovies: state => state.seenMovies
    })
  },
  methods: {
    ...mapActions(["deleteMovie"])
  }
};
</script>

