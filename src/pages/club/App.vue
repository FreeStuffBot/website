<template>
	<div id="app">
		<Header pagename="Tude Club"/>

		<h2>Check back later.</h2>
		<h3>This is all still under construction!</h3>
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
#app {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 10;

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
	background-color: $backpage;
}
</style>
