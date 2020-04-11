<template>
	<div id="app">
		<div id="content">
			<div id="infobox">
				<iframe allow="autoplay" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0"></iframe>

				<span>Happy april fools day!</span>
				<br>
				<footer>This page is not affiliated with Valve or Steam.<br>
								And Half Life Alyx is not free, unfortunately.</footer>
			</div>
		</div>

    <Base />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Base from "@/pages/Base.vue";

@Component({
	components: {
		Base
	}
})
export default class App extends Vue {
}
</script>

<style scoped lang="scss">
iframe {
	height: 50vh;
	width: 88.8vh;
	margin-bottom: 5vh;
}
</style>