<template>
	<div id="app">
		<div id="content">
			<div id="infobox">
				<h1>Ayy, it's working 🎉</h1>
				<h2>Just imagine this is the website <br>that offers the free game!</h2>
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

<style scoped lang="scss">

</style>
