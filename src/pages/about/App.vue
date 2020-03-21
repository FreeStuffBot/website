<template>
	<div id="app">
		<Header pagename="About"/>

		<section class="content-header">
			<img class="bg" src="@/assets/img/about/header-bg.svg" draggable="false"/>
			<img class="logo" src="@/assets/img/about/header-logo.svg" draggable="false"/>
		</section>

		<section class="content-intro">
			<h2>More details soon.</h2>
			<h3>This website is still under construction!</h3>
		</section>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";

@Component({
	components: {
		Header
	}
})
export default class App extends Vue {}
</script>

<style scoped lang="scss">
#app img {
	user-select: none;
	pointer-events: none;
}

.content-header {
	height: 23vw;
	min-height: 30vh;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 10;
	
	.bg {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 100%;
		min-width: 1000px;
		z-index: 9;
	}

	.logo {
		height: 6vw;
		min-height: 70px;
		z-index: 12;
	}
}

.content-intro {
	width: 100%;
	padding-top: 10vh;

	h2 {
		width: 100%;
		text-align: center;
		font-family: $font-header;
		color: $color-header;
		font-size: 24pt;
	}	
	
	h3 {
		margin-top: 2vh;
		width: 100%;
		text-align: center;
		font-family: $font-regular;
		color: $color-minor;
		font-size: 14pt;
	}	
}
</style>

<style lang="scss">
html,
body,
#app {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
}
</style>
