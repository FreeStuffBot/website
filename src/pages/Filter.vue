<template>
	<div id="app">
		<div id="content">
			<h1>Content Filter</h1>
			<div>
				<div class="box">
					<h3 style="color: #ffaa25">Stores</h3>
					<span><br></span>
					<div class="toggle" @click="store.steam = !store.steam" :good="store.steam" style="--r: 3deg">
						<div class="switch" v-text="store.steam ? 'YES' : 'NO'"></div>
						<span>Steam</span>
					</div>
					<div class="toggle" @click="store.epic = !store.epic" :good="store.epic" style="--r: -4deg">
						<div class="switch" v-text="store.epic ? 'Yeah' : 'Nah'"></div>
						<span>Epic Games Store</span>
					</div>
					<div class="toggle" @click="store.gog = !store.gog" :good="store.gog" style="--r: 2deg">
						<div class="switch" v-text="store.gog ? 'Yup!' : 'Nope!'"></div>
						<span>GOG.com</span>
					</div>
					<div class="toggle" @click="store.humble = !store.humble" :good="store.humble" style="--r: 3deg">
						<div class="switch" v-text="store.humble ? 'Sure' : 'Nah'"></div>
						<span>Humble Bundle</span>
					</div>
					<div class="toggle" @click="store.origin = !store.origin" :good="store.origin" style="--r: -5deg">
						<div class="switch" v-text="store.origin ? 'Yes' : 'No'"></div>
						<span>Origin</span>
					</div>
					<div class="toggle" @click="store.uplay = !store.uplay" :good="store.uplay" style="--r: 1deg">
						<div class="switch" v-text="store.uplay ? 'Please!' : 'Eh...'"></div>
						<span>Uplay</span>
					</div>
					<div class="toggle" @click="store.twitch = !store.twitch" :good="store.twitch" style="--r: -3deg">
						<div class="switch" v-text="store.twitch ? 'YUP' : 'NOPE'"></div>
						<span>Twitch</span>
					</div>
					<div class="toggle" @click="store.itch = !store.itch" :good="store.itch" style="--r: 3deg">
						<div class="switch" v-text="store.itch ? 'Gimme!' : 'Don\'t'"></div>
						<span>Itch.io</span>
					</div>
					<div class="toggle" @click="store.other = !store.other" :good="store.other" style="--r: 0deg">
						<div class="switch" v-text="store.other ? 'YEAH' : 'NAH'"></div>
						<span>Other Stores</span>
					</div>
				</div>
				<div class="box">
					<h3 style="color: #00f0a5">Other Settings</h3>
					<h4>Minimum Price</h4>
					<span>The bot won't annouce games where the original price is lower than what you enter here. Currency is whatever you've set in your server.</span>
					<input type="number" min="0" max="100" step="0.05" placeholder="0.00" v-model="minprice">
				</div>
				<div class="box">
					<h3 style="color: #da5e7d">Apply Changes</h3>
					<h4>Done?</h4>
					<span>Now use this command to apply the changes in Discord:</span>
					<code>@FreeStuff set filter {{ cmdout }}</code>
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
	private stores = (1 << 9) - 1;
	private minprice = 0;
	private cmdout = this.stores + ' ' + this.minprice;
	private store = {
		steam: true,
		epic: true,
		gog: true,
		humble: true,
		origin: true,
		uplay: true,
		twitch: true,
		itch: true,
		other: true,
	};

	created() {
		this.$watch("minprice", (minprice: number) => {
			this.cmdout = this.stores + ' ' + minprice;
		});
		this.$watch("store", (store: any) => {
			this.stores = 0;
			if (store.steam) this.stores += 1 << 1;
			if (store.epic) this.stores += 1 << 2;
			if (store.gog) this.stores += 1 << 3;
			if (store.humble) this.stores += 1 << 4;
			if (store.origin) this.stores += 1 << 5;
			if (store.uplay) this.stores += 1 << 6;
			if (store.twitch) this.stores += 1 << 7;
			if (store.itch) this.stores += 1 << 8;
			if (store.other) this.stores += 1 << 0;
			
			this.cmdout = this.stores + ' ' + this.minprice;
		}, { deep: true });
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
	align-items: center;

	& > div {
		width: 100%;
		display: block;

		.box {
			margin-left: auto;
			margin-right: auto;
		}
	}
}
#decoitem2, #decoitem3 { display: none; }

input {
	display: block;
	outline: none;
	border: none;
	padding: 7px 10px;
	width: 15%;
	min-width: 30pt;
	border-radius: .3vh;
	margin: 5px 0;
	background: #00000055;
	color: $color-regular;
	font-size: 12pt;
}

.toggle {
	display: flex;
	align-items: center;
	user-select: none;
	padding: 5px 0;
	cursor: pointer;

	.switch {
		display: inline-block;
		font-family: $font-major;
		font-size: 14pt;
		width: 15%;
		text-align: right;
		padding-right: 1vh;
		transition: transform .2s $ease-out-back;
	}
	&:hover .switch { --trans: scale(1.2) rotate(var(--r)); }
	&:active .switch { --trans: scale(1) rotate(calc(var(--r) / 2)) !important; }
	&[good] .switch { color: #00f0a5; }
	&:not([good]) .switch { color: #da5e7d; }

	span {
		display: inline-block !important;
		transition: transform .1s ease-out;
	}
	&:hover span { --trans: translateX(5px); }
	&:not([good]) span { opacity: .6; }
}
</style>