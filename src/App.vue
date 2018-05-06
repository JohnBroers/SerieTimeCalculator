<template>
	<div id="app">
		<app-navigation></app-navigation>
		<app-search-movie></app-search-movie>
		<app-seen-movies></app-seen-movies>
	</div>
</template>

<script>
import SearchMovie from './components/SearchMovies'
import Navigation from './components/Navigation'
import SeenMovies from './components/SeenMovies'

export default {
	name: 'app',
	components: {
		appSearchMovie: SearchMovie,
		appNavigation: Navigation,
		appSeenMovies: SeenMovies
	}
}
</script>