<template>
  <div class="markdown-page">
    <div v-html="content" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import Document from '@/resources/docs/giveaway-policy.md'

export default Vue.extend({
  computed: {
    content() {
      return Document
    }
  },
  transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
	head() {
		return {
			title: 'FreeStuff Giveaway Policy',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Policy for participating in any giveaway or similar promotional event hosted by FreeStuff.'
				}
			]
		}
	}
})
</script>

<style scoped lang="scss">
a { margin-top: 2em; display: inline-block; }
</style>