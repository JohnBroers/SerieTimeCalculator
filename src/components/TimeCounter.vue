<template>
    <div class="time-counter">You have spend a total of <strong>{{ timeCounter.days }} day{{checkSingular(timeCounter.days)}}</strong>, <strong>{{timeCounter.hours}} hour{{checkSingular(timeCounter.hours)}}</strong> and <strong>{{ timeCounter.minutes}} minute{{checkSingular(timeCounter.minutes)}}</strong> watching series.. </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  	computed: {
		...mapState({
			totalLength: state => state.totalLength
		}),
		timeCounter() {
			let total = this.totalLength;

			const days = Math.floor(total / (60*24));
			total -= days * (60*24);

			const hours = Math.floor(total / 60);
			total -= hours * 60

			const minutes = total
			return { days, hours, minutes }
		}
	},
	methods: {
		checkSingular(number) {
			if(number !== 1) {
				return 's';
			}
		}
	}
}
</script>

