<template>
	<div id="app" freestuff-app>
		<div id="content">
			<div id="infobox">
				<h1>Ayy, it's working 🎉</h1>
				<h2>Just imagine this is the website <br>that offers the free game!</h2>
				<div class="divider"></div>
				<span style-a82bb1>Don't know what this is all about?</span>
				<span style-a82bb1><a href="/freestuff">Click here for more info</a></span>
			</div>
		</div>

    <Base />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Base from "@/pages/freestuff/Base.vue";
import Confetti from "@/lib/confetti.ts";

@Component({
	components: {
		Base
	}
})
export default class App extends Vue {
	created() {		
		const conf = new Confetti({
			maxCount: 30,
			speed: 1,
			frameInterval: 15,
			alpha: 1,
			gradient: false
		});
		conf.startConfetti();
		// setTimeout(() => {
		// 	conf.stopConfetti();
		// }, 1500);
	}
}
</script>

<style lang="scss">
div[freestuff-app] {
	span[style-a82bb1] {
		padding-bottom: 5px;
		color: $color-regular;

		a {
			color: #da5e7d;
			border-bottom: 3px solid #da5e7d33;

			&:hover { border-bottom: 3px solid #da5e7d; }
		}
	}
}
</style>
