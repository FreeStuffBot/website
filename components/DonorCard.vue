<template>
  <div class="donor">
    <div class="iconbg" v-html="twemoji(data.emoji)"></div>
    <div class="icon donoriconnoscope" v-html="twemoji(data.emoji)"></div>
    <span v-text="data.name"></span>
  </div>  
</template>

<script lang="ts">
import Vue from 'vue'
import twemoji from 'twemoji'


export default Vue.extend({
  props: {
    data: {
      default: { name: 'Unknown', emoij: '🐢' }
    }
  },
  methods: {
    twemoji (emoji: string) {
      return twemoji.parse(emoji)
    }
  }
})
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

.donor {
  background-color: $bg-bright;
  padding: 5pt;
  width: 130pt;
  display: flex;
  align-items: center;
  border-radius: $component-border-radius;
  position: relative;
  font-size: 16pt;
  overflow: hidden;

  div {
    user-select: none;
  }

  .iconbg {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: scale(10);
    filter: blur(7px);
  }

  .icon {
    position: relative;
    z-index: 2;
    width: 32pt;
    height: 32pt;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: $component-border-radius / 2;
    background-color: #00000033;
    margin-right: 5pt;
  }

  span {
    position: relative;
    z-index: 2;
    font-size: 12pt !important;
    font-family: $font-major !important;
    color: #ffffffdd !important;
    margin-bottom: 0 !important;
  }
}
</style>
