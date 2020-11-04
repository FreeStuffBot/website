<template>
  <div id="app" :style="`--scroll: ${scroll}; --scrollPos: ${scrollPosRel}`" @scroll="handleScroll">
    <div>
      <Header pagename="FreeStuff Bot" />

      <img
        id="decoblob2"
        class="deco"
        src="@/assets/img/deco-blob-2.svg"
        draggable="false"
        alt=""
        aria-hidden="true"
      >
    </div>

    <Nuxt style="z-index: 10" class="pageroot"/>

    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

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
    Header,
    Footer
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
@import '~/assets/style/all.scss';

.deco {
  position: fixed;
  z-index: 1;
  user-select: none;
  pointer-events: none;
}

#decoblob2 {
  top: 0;
  left: 0;
  width: 440px;
  transform: none;
  z-index: 0;
}

#decoline1 {
  bottom: 0;
  left: 0;
  width: 440px;
  transform: none;
  z-index: 0;
}

#decoline2 {
  top: 50%;
  right: 0;
  width: 115px;
  transform: translateY(-50%);
}

.decoitem {
  width: 40px;
}

#decoitem1 {
  bottom: 10%;
  left: 5%;
}

#decoitem2 {
  right: 15%;
  bottom: 25%;
}

#decoitem3 {
  top: 10%;
  left: 45%;
}

#decoitem4 {
  bottom: 4%;
  left: 12%;
}

#decoitem5 {
  top: 17%;
  right: 7%;
}
</style>
