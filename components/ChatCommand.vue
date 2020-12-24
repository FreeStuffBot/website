<template>
  <div class="chat-command-wrapper">
    <code
      v-text="command"
      content="Click to copy"
      v-tippy="{ placement : 'left', delay: [0, 0] }"
      :copied="copied"
      @click="copy"
    />
    <label
      :for="'chat-command-' + uuid"
      class="clipboard-hide"
      aria-hidden="true"
    >
      copy to clipboard
    </label>
    <input
      :id="'chat-command-' + uuid"
      class="clipboard-hide"
      v-model="copytext"
      aria-hidden="true"
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const r = () => 'abcdefghijklmnopqrstuvwxyz'.split('')[Math.floor(Math.random() * 26)];

export default Vue.extend({
  props: {
    command: String,
    copyoverride: String
  },
  data() {
    return {
      uuid: '',
      copied: false,
      copytext: ''
    }
  },
  created() {
    this.uuid = r() + r() + r() + r() + r()
    this.copytext = this.copyoverride || this.command
  },
  watch: {
    copytext() {
      this.copytext = this.copyoverride || this.command
    }
  },
  methods: {
    copy() {
      const el = document.getElementById('chat-command-' + this.uuid) as any;
      el.select();
      el.setSelectionRange(0, 99999);
      document.execCommand('copy');
      this.copied = true;
      setTimeout(() => Vue.nextTick(() => this.copied = false), 30);

      // @ts-ignore
      this.$ga.event({ eventAction: 'copy', eventCategory: 'command', eventLabel: this.copytext })
    }
  }
})
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

div {
  position: relative;
}

code {
  padding: 10pt 15pt;
  cursor: pointer;
  margin-bottom: 0;
  transition: background-color 1s ease .5s;
  outline: none;
  color: $color-major !important;

  &[copied] {
    background-color: $success-major;
    transition: background-color 0s linear;
  }
}

.clipboard-hide {
  height: 0;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  box-shadow: none;
  position: absolute;
  pointer-events: none;
  opacity: 0;
}
</style>
