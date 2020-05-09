<template>
	<div>
		<Header pagename="FreeStuff Bot" theme="light" />

		<img
			class="deco"
			id="decoblob2"
			src="@/assets/img/deco-blob-2.svg"
			draggable="false"
		/>
		<img
			class="deco"
			id="decoline1"
			src="@/assets/img/deco-line-1.svg"
			draggable="false"
		/>
		<img
			class="deco"
			id="decoline2"
			src="@/assets/img/deco-line-2.svg"
			draggable="false"
		/>
		<img
			class="deco decoitem"
			id="decoitem1"
			src="@/assets/img/deco-item-1.svg"
			draggable="false"
			@click="yellowsquare()"
			style="pointer-events: unset; cursor: pointer;"
		/>
		<img
			class="deco decoitem"
			id="decoitem2"
			src="@/assets/img/deco-item-2.svg"
			draggable="false"
		/>
		<img
			class="deco decoitem"
			id="decoitem3"
			src="@/assets/img/deco-item-3.svg"
			draggable="false"
		/>
		<img
			class="deco decoitem"
			id="decoitem4"
			src="@/assets/img/deco-item-4.svg"
			draggable="false"
		/>
		<img
			class="deco decoitem"
			id="decoitem5"
			src="@/assets/img/deco-item-5.svg"
			draggable="false"
		/>
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
export default class App extends Vue {

	yellowsquare() {
		console;
	}

}
</script>

<style lang="scss">
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
