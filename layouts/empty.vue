<template>
  <div id="app" :style="`--scroll: ${scroll}; --scrollPos: ${scrollPosRel}`" @scroll="handleScroll">
    <Nuxt style="z-index: 10" class="pageroot"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

Vue.use(require('vue-tippy').default, {
  arrow: true,
  arrowType: 'round',
  animation: 'vertical',
  duration: 100,
  theme: 'black'
});
Vue.component("tippy", require('vue-tippy').TippyComponent);

export default Vue.extend({
  components: {
  },
	data() {
		return {
			scrollPos: 0,
			scrollPosRel: 0,
			scroll: 0,
			timer: 0 as any,
		}
	},
	methods: {
		handleScroll(event: any) {
			const top = document.getElementById('app')?.scrollTop ?? 0;
			const delta = top - this.scrollPos;
			this.scroll = Math.min(this.scroll + delta * .9, 100);
			this.scrollPos = top;
			this.scrollPosRel = this.scrollPos / window.innerHeight;
		}
	},
	created() {
		this.timer = setInterval(() => {
			if (this.scroll != 0) this.scroll *= .9;
			if (Math.abs(this.scroll) < .1) this.scroll = 0;
		}, 10);
	},
	destroyed() {
		clearInterval(this.timer);
	}
})
</script>

<style lang="scss">
</style>
