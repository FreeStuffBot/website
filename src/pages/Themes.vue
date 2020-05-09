<template>
	<div id="app">
		<div id="content">
			<h1>Themes</h1>
			<div id="mid">
				<div id="imgbox">
					<h3 style="color: #00f0a5">Preview</h3>
					<img :src="currImg" draggable="false" />
					<div id="info" v-if="info">
						<i class="fas fa-info-circle"></i>
						{{ info }}
					</div>
				</div>
				<div id="buttonsbox">
					<div id="buttons">
						<button
							v-for="theme of availableThemes"
							v-text="theme"
							:key="theme"
							@click="themeId = theme"
							:style="`--theme: hsl(${(theme * 77) % 360}, 80%, 70%)`"
							:active="themeId == theme"
						></button>
					</div>
					<div id="tutorial">
						<h3 style="color: #ffaa25">And now?</h3>
						<span>To change the theme use the following command in discord:</span>
						<code>@FreeStuff set theme {{ themeId || 1 }}</code>
					</div>
				</div>
			</div>
			<footer><a href="https://tude.ga/">Copyright &copy; 2020 Tude</a></footer>
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
	private themeId = 1;
	private availableThemes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
	private themeImages = [
		"/assets/img/theme-1.png",
		"/assets/img/theme-2.png",
		"/assets/img/theme-3.png",
		"/assets/img/theme-4.png",
		"/assets/img/theme-5.png",
		"/assets/img/theme-6.png",
		"/assets/img/theme-7.png",
		"/assets/img/theme-8.png",
		"/assets/img/theme-9.png"
	];
	private currImg = this.themeImages[this.themeId - 1];
	private info = "The image will be some official artwork or logo of the game";

	created() {
		this.$watch("themeId", (id: number) => {
			this.currImg = this.themeImages[id - 1];
			switch (id) {
				case 7:
					this.info = "This theme displayes a website embed, if available";
					break;
				case 8:
					this.info = "This theme will not display a website embed";
					break;
				default:
					this.info = "";
			}
		});
	}
}
</script>

<style lang="scss">
#content {
	position: relative;
	width: 90%;
	max-width: 1100px;
	z-index: 100;
	padding: 10vh 0 3vh 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	h1, h2 { text-align: center; }
}
#decoitem2, #decoitem3 { display: none; }

#mid {
	display: flex;
	justify-content: space-between;
	min-height: 400px;
}

#imgbox {
	width: 48%;
	background-color: $bg-bright;
	border-radius: 0.5vh;
	box-shadow: 0 2px 10px #00000066;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	min-height: 530px;
}

#imgbox > img {
	width: 95%;
}

#info {
	position: absolute;
	bottom: 20px;
	color: $color-sub;
	font-family: $font-regular;
	font-size: 14px;
}

#buttonsbox {
	width: 48%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

#buttons {
	width: calc(100% + 20px);
	display: flex;
	justify-content: left;
	transform: translate(-10px, -10px);
	flex-wrap: wrap;
	margin-bottom: 30px;
	
	button {
		padding: 20px 0;
		margin: 10px;
		width: 117px;
		color: var(--theme);
		font-family: $font-major;
		font-size: 36px;
		border-radius: 0.5vh;
		border: none;
		outline: none;
		cursor: pointer;
		background: $bg-bright;
		box-shadow: 0 2px 10px #00000066;
		transition: 0.2s ease all;

		&:hover {
			background: $bg-brighter;
			transform: translateY(-2px);
			box-shadow: 0 4px 14px #00000055;
		}

		&[active] {
			background: var(--theme);
			color: $bg-bright
		}
	}
}

#tutorial {
	background-color: $bg-bright;
	border-radius: 0.5vh;
	box-shadow: 0 2px 10px #00000066;
	padding: 40px 20px 20px 20px;
	position: relative;
}

/*
 *
 */

@media (max-width: 1200px) {

#buttons {
	justify-content: center;
	width: 100%;

	button {
		font-size: 26px;
		width: 80px;
		padding: 15px;
	}
}

}
</style>
