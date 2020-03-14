<template>
	<div id="app">
		<Header :monochrome="true"/>

		<div id="text">
			<h1>404</h1>
			<h2>error: not found</h2>
			<a button wide href="/" style="--color: #000000; --color-hover: #333333">Back</a>
		</div>
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

<style lang="scss">
#app > * {
	user-select: none;
}

#app {
	background-image: url('/assets/img/404background.png');
	background-size: cover;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
}

#text {
	position: absolute;
	top: 25vh;
	left: 12vw;
	display: flex;
	flex-direction: column;
	justify-content: right;
	align-items: flex-start;
	z-index: 102;
	transition: all 0.2s ease-in;
}

h1 {
	text-transform: uppercase;
	font-family: $font-header;
	font-size: 16vh;
	text-align: right;
	line-height: 9vh;
	color: $color-header;
}

h2 {
	text-transform: lowercase;
	font-family: $font-major;
	font-size: 4vh;
	text-align: right;
	margin-top: 2vh;
	color: $color-minor;
}
</style>
