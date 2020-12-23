<template>
	<div class="padtop">
		<h1 class="center">
			Frequently Asked Questions
		</h1>
		<Faqs />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import Faqs from '~/components/Faqs.vue'

export default Vue.extend({
  components: {
    Faqs
  },
	transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
	head() {
		return {
			title: 'FreeStuffBot FAQ',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Frequently asked questions about the FreeStuff bot. And answers to them of course.'
				}
			]
		}
	}
})
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

h1 {
  margin-bottom: $component-margin * 2;
}

.padtop {
  width: 90%;
  max-width: $content-width / 3 * 2;
  margin: auto;
}
</style>
