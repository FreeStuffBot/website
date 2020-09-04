<template>
	<div>
		<h1>FAQ</h1>
		<div class="divider"></div>
		<h2>How do you make money?</h2>
		<span>We... don't. Donate pls.</span>
		<div class="divider"></div>
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
