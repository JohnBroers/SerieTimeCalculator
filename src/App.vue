<template>
  <div id="app">
    <TheNavigation></TheNavigation>
    <SearchMovie></SearchMovie>
    <SeenMovies></SeenMovies>
  </div>
</template>

<script>
import SearchMovie from "./components/SearchMovies"
import TheNavigation from "./components/Navigation"
import SeenMovies from "./components/SeenMovies"

export default {
  name: "app",
  components: {
    SearchMovie,
    TheNavigation,
    SeenMovies
  },
  beforeCreate() {
		this.$store.commit('initialiseStore');
	}
};
</script>