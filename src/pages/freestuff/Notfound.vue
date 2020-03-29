<template>
	<div id="app" freestuff-app>
		<div id="content">
			<div id="infobox">
				<h1>Game not found 😕</h1>
				<h2>The game you were looking for was not found!<br>
						Maybe just google it or something...</h2>
				<div class="divider"></div>
			</div>
		</div>

    <Base />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Base from "@/pages/freestuff/Base.vue";

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
