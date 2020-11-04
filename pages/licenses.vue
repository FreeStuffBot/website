<template>
  <div class="markdown-page">
    <div v-html="content" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import Document from '@/resources/docs/licenses.md'

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
			title: 'FreeStuff OSS Licenses',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'We use a wide range of open source libraries and tools in order to build, provide and maintain our services.'
				}
			]
		}
	}
})
</script>

<style scoped lang="scss">
a { margin-top: 2em; display: inline-block; }
</style>