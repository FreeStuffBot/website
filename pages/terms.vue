<template>
  <div class="markdown-page">
    <div v-html="content" />
    <!-- <a href="/download/docs/terms.pdf">Print Version</a> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import Document from '@/resources/docs/terms.md'

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
			title: 'FreeStuff Terms of Service',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'By using any of the FreeStuff Services, you agree to out terms and conditions.'
				}
			]
		}
	}
})
</script>

<style scoped lang="scss">
a { margin-top: 2em; display: inline-block; }
</style>