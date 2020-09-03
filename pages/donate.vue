<template>
	<div class="pageroot padtop">
		<h1 class="center">
			Consider donating?&nbsp;
			<span component d="8" v-html="twemoji('👀')"></span>
		</h1>
		<h2 sub class="center">
			That would be amazing!
		</h2>
		<div class="divier dotted vertical"></div>
		<h2>Where does the money go to?</h2>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import twemoji from 'twemoji'


export default Vue.extend({
  methods: {
    twemoji (emoji: string) {
      return twemoji.parse(emoji)
    }
  },
	transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
})
</script>

<style scoped lang="scss">
</style>
