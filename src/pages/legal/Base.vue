<template>
	<div id="app">
		<Header pagename="Legal" theme="dark" />
		<div id="titlebox">
			<h1>
				<a href="/legal" v-html="title + (category ? (' &bull; ' + category) : '')"></a>
			</h1>
		</div>

		<div id="content" v-html="content"></div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import Header from "@/components/Header.vue";

@Component({
	components: {
		Header
	}
})
export default class App extends Vue {
	@Prop() public title!: string;
	@Prop() public category!: string;
	@Prop() public content!: string;

	created() {
		if (!this.content) {
			this.content = `
				<h2>Error</h2>
				<p>This document is temporarily not available.</p>
				<p>In the meanwhile, please address any queries to: <a href="mailto:tudeteam@gmail.com">tudeteam@gmail.com</a></p>
			`;
		}	
	}
}
</script>

<style scoped lang="scss">

$content-width: 800px;

/* */

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

#app {
	display: flex;
	justify-content: center;
	overflow-x: hidden;
}

#titlebox {
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 200px;
	z-index: 5;
	background: $background-b;
	display: flex;
	justify-content: center;
}

h1 {
	font-weight: 400;
	font-size: 40px;
	line-height: 50px;
	padding: 100px 5px 20px 0;
	display: block;
	
	&, * {
		color: $color-major;
		font-family: $font-major;
		font-size: 4vh;
		white-space: nowrap;
	}
}

#content {
	position: relative;
	width: 90%;
	max-width: $content-width;
	padding: 240px 200px 0 0;
	margin-right: -200px;
	z-index: 2;
}
</style>

<style lang="scss">
#content {
	* {
		color: $color-regular;
		font-family: $font-regular;
		font-size: 12pt;
	}

	h2 {
		font-weight: 600;
		font-size: 26px;
		text-transform: uppercase;
		padding: 30px 0 20px 0;
		
		&, * {
			color: $color-major;
			font-family: $font-major;
			font-size: 18pt;
		}
	}

	h3 {
		font-weight: 300;
		font-size: 20pt;
		margin: 10px 0 5px 0;
		
		&, * {
			color: $color-major;
			font-family: $font-major;
			font-size: 16pt;
		}
	}

	a {
		display: inline-block;
		font-weight: 400;
		font-size: inherit;
		padding: 0 0 5px 0;
		color: #2a63b9;
		text-decoration: underline;
		padding: 2px 4px;
		border-radius: 3px;

		&:hover {
			background: #2a63b922;
		}
	}
}
</style>
