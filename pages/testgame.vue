<template>
  <div>
    <div id="infobox">
      <h1 v-html="`Ayy, it's working ${twemoji('🎉')}`"></h1>
      <h2>Just imagine this is the website <br>that offers the free game!</h2>
      <div class="divider"></div>
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
@import '~/assets/style/all.scss';

span {
  padding-bottom: 5px;
  color: $color-regular;

  a {
    color: #da5e7d;
    border-bottom: 3px solid #da5e7d33;

    &:hover { border-bottom: 3px solid #da5e7d; }
  }
}

h2 {
  color: $color-sub;
}
</style>
