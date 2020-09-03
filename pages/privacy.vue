<template>
  <div class="markdown-page">
    <div v-html="content" />
    <a href="/download/docs/privacy.pdf">Print Version</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import Document from '@/resources/docs/privacy.md'

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
  }
})
</script>

<style scoped lang="scss">
a { margin-top: 2em; display: inline-block; }
</style>