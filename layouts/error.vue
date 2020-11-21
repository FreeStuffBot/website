<template>
	<div class="pageroot padtop">
		<h1 class="center">404 Not Found 😕</h1>
		<h2 sub class="center">I don't know what you were looking for...<br>
				but it's definitely not here.</h2>
		<!-- <div class="divider center"></div> -->
	</div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
	transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
})
</script>

<style scoped lang="scss">
</style>
