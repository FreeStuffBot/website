<template>
	<div id="app" freestuff-app>
		<div id="content">
			<div id="infobox">
				<h1>404 Not Found 😕</h1>
				<h2>I don't know what you were looking for...<br>
						but it's definitely not here.</h2>
				<div class="divider"></div>
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
export default class App extends Vue {}
</script>

<style lang="scss">
// div[freestuff-app] {

// }
</style>
