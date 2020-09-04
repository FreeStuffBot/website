<template>
  <div class="padfullscreen plaintext">
    <h1 class="center" v-html="`Ayy, it's working ${twemoji('🎉')}`"></h1>
    <h2 class="center" sub>Just imagine this is the website <br>that offers the free game!</h2>
    <div class="center">
      <div class="divider dash horizontal"></div>
      <span>Don't know what this is all about?</span>
      <span><a href="/">Click here for more info</a></span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Confetti from "@/assets/lib/confetti.ts"
import twemoji from 'twemoji'


export default Vue.extend({
  data () {
    return {
      conf: undefined as any
    }
  },
  mounted () {    
    this.conf = new Confetti({
      maxCount: 30,
      speed: 1,
      frameInterval: 15,
      alpha: 1,
      gradient: false
    });
    this.conf.startConfetti()
  },
  beforeDestroy () {
    this.conf?.stopConfetti()
  },
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
