<template>
	<div id="app" :style="`--scroll: ${scroll}; --scrollPos: ${scrollPosRel}`" @scroll="handleScroll">
		<div id="content">
			<div id="landing">
				<div id="infobox" index>
					<h1>The internet is full<br />of free games</h1>
					<h2>And with this Discord bot<br />you'll never miss any of them!</h2>
					<div id="buttons">
						<a id="invite-button" class="button" href="https://discord.com/oauth2/authorize?redirect_uri=https%3A%2F%2Ffreestuffbot.xyz%2Fcallback&client_id=672822334641537041&permissions=445504&scope=bot&response_type=code">Invite</a>
						<a id="about-button" class="button min" href="/about">About</a>
						<img class="deco arrow" id="decoarrow1" src="@/assets/img/deco-arrow-1.svg" draggable="false"/>
						<img class="deco arrow" id="decoarrow2" src="@/assets/img/deco-arrow-2.svg" draggable="false"/>
					</div>
				</div>
				<div id="gameslist">
					<img id="imgdecoblob" src="@/assets/img/deco-blob-1.svg" draggable="false" />
					<img id="imggame3" src="@/assets/img/game3.png" draggable="false" />
					<img id="imggame2" src="@/assets/img/game2.png" draggable="false" />
					<div id="imggame1">
						<div id="pricetagcont">
							<div id="pricetag">
								<div class="price">24.99€</div>
								<div class="free">FREE</div>
								<div class="strike"></div>
							</div>
						</div>
						<img src="@/assets/img/game1.png" draggable="false" />
					</div>
					<img id="imgdiscord" src="@/assets/img/discord-example.png" draggable="false" />
					<div id="discordimgdetail">Message appearance is customizable</div>
				</div>
			</div>
			<!-- <img id="imgdecoblob-2" src="@/assets/img/deco-blob-3.svg" draggable="false" /> -->

			<div id="details">
				<h5 data-trigger center>
					<span component>Customize as you like:</span>
				</h5>
				<svg class="h5deco" width="100%" height="100%" viewBox="0 0 119 45" version="1.1" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5;">
					<path d="M1.875,37.346l26.58,-26.58l31.843,31.843l40.734,-40.734l15.306,15.306" style="fill:none;stroke:#933c6d;stroke-width:3.75px;"/>
				</svg>
				<div class="featurepanels">
					<div class="panel">
						<img src="@/assets/img/landing-customize-themes.svg" alt="">
						<span component class="title">CHOOSE A NICE THEME</span>
						<span component class="desc">Select one of 9 themes to match the look and feel of your server or even create your own with FreeStuff Plus!</span>
					</div>
					<div class="panel">
						<img src="@/assets/img/landing-customize-filter.svg" alt="">
						<span component class="title">FILTER THE CONTENT</span>
						<span component class="desc">Don't want cheap games in your server? Only like certain stores? Tell the bot what you like and what you don't and it'll take care!</span>
					</div>
					<div class="panel">
						<img src="@/assets/img/landing-customize-pings.svg" alt="">
						<span component class="title">GET NOTIFIED</span>
						<span component class="desc">Would you like to get pinged on new free games? Just provide the bot with a role to ping and you'll never be too late!</span>
					</div>
					<div class="panel">
						<img src="@/assets/img/landing-customize-themes.svg" alt="">
						<span component class="title">MORE TO COME</span>
						<span component class="desc">The bot receives updates and new features on a regular basis to ensure you the nicest and best possible experience!</span>
					</div>
				</div>
			</div>
		</div>

		<!-- More shit here to scroll down, some nice parallax on everything please -->

		<!--
			
		Customizea as you like:

		Choose a nice theme

		Apply content filter

		And that all for free! Just like the games!

		Want even more?

		Get freestuff plus:
		No ads, no branding, no limits.

		What we offer:

		- No ads
		- Remove branding text in embed
		- Create custom themes
		- Subscribe to huge discounts and not only recieve free games but also very good deals
		- Support the development, servers cost money

		Footer. Links to: privacy, tos, how it works, thank yous
		
		-->

		<Base />
	</div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Base from "@/pages/Base.vue";
import ScrollTrigger from '@terwanerik/scrolltrigger';


export default Vue.extend({
	components: {
		Base
	},
	data() {
		return {
			scrollPos: 0,
			scrollPosRel: 0,
			scroll: 0,
			timer: 0,
			trigger: null as ScrollTrigger | null,
		}
	},
	methods: {
		handleScroll(event: any) {
			const top = document.getElementById('app')?.scrollTop ?? 0;
			const delta = top - this.scrollPos;
			this.scroll = Math.min(this.scroll + delta * .9, 100);
			this.scrollPos = top;
			this.scrollPosRel = this.scrollPos / window.innerHeight;
		}
	},
	created() {
		this.timer = setInterval(() => {
			if (this.scroll != 0) this.scroll *= .9;
			if (Math.abs(this.scroll) < .1) this.scroll = 0;
		}, 10);
	},
	destroyed() {
		clearInterval(this.timer);
	},
  beforeDestroy() {
    this.trigger?.kill();
    this.trigger = null;
  },
	mounted() {
		const trigger = new ScrollTrigger({
			scroll: {
				element: document.getElementById('app') ?? document.body
			}
		});
		trigger.add('[data-trigger]');
	}
})

</script>

<style lang="scss">

*::-webkit-scrollbar { width: 14px; height: 0; }
*::-webkit-scrollbar-track { background-color: transparent; }
*::-webkit-scrollbar-thumb { background-color: $bg-bright; border-radius: 99px; border: 4px solid $backpage; }
*::-webkit-scrollbar-thumb:hover { background-color: $bg-brighter; }


#decoarrow1 {
	position: absolute;
	width: 80px;
	left: -110px;
	top: 12px;
}

#decoarrow2 {
	position: absolute;
	width: 60px;
	left: 130px;
	top: 65px;
}

#buttons {
	position: relative;
}

#infobox {
	position: absolute;
	top: 25vh;
	left: 0;
	z-index: 20;

	h1 { transform: scale(.95) translate3d(4%, 15%, 5px) rotateX(calc(var(--scroll) * .004deg)); }
	h2 { transform: rotateX(calc(var(--scroll) * .004deg)); }
	img { transform: scale(1.1) translate3d(-80%, 10%, -10px) rotateX(calc(var(--scroll) * .004deg)); }
}

.button {
	display: inline-block;
	padding: 12px 44px;
	margin: 0 10px 0 0;
	background-color: #7b7fe1;
	background-image: url("/assets/img/button-img.png");
	background-position: 0 50%;
	background-size: cover;
	font-family: $font-regular;
	font-size: 24px;
	user-select: none;
	color: $color-regular;
	border-radius: 0.5vh;
	box-shadow: 0 0 15px #00000088;
	transition: 0.2s ease opacity
						, 0.2s ease background-position
						, 0.2s ease box-shadow;
	transform: rotateX(calc(var(--scroll) * .004deg));

	&:hover {
		opacity: 0.7;
		background-position: -5px 50%;
		box-shadow: 0 1px 15px #00000088;
	}

	&.min {
		background: transparent;
		border: 2px solid $color-sub;
		color: $color-sub;
		padding: 10px 42px;
		opacity: 0.8;
		box-shadow: none;

		&:hover {
			opacity: 0.8;
			background: #ffffff11;
		}
	}
}

#gameslist {
	position: absolute;
	top: 20vh;
	right: 0;
	z-index: 10;
	transform-style: preserve-3d;

	& > *, & > * > * {
		position: absolute;
		width: 320px;
		border-radius: 1vh;
		user-select: none;
	}
}

#imggame1 {
	position: absolute;
	right: 100px;
	height: 427px;
	box-shadow: 0 0 15px #00000088;
	transform: translateZ(0px) rotateX(calc(var(--scroll) * .005deg));

	& > * {
		position: absolute;
		top: 0;
		left: 0;
	}
}

#imggame2 {
	top: -20px;
	right: -60px;
	transform: scale(1.1) translateZ(-20px) rotateX(calc(var(--scroll) * .004deg));
	box-shadow: 0 0 10px #00000066;
}

#imggame3 {
	top: -30px;
	right: -200px;
	transform: scale(1.1) translateZ(-40px) rotateX(calc(var(--scroll) * .003deg));
	opacity: 0.5;
	box-shadow: 0 0 5px #00000044;
}

#imgdiscord {
	top: 170px;
	right: 310px;
	width: 400px;
	box-shadow: 0 0 15px #00000088;
	transform: scale(.7) translateZ(30px) rotateX(calc(var(--scroll) * .006deg));
}

#discordimgdetail {
	position: absolute;
	width: 400px !important;
	top: 495px;
	right: 310px;
	text-align: center;
	font-size: 14px;
	font-family: $font-regular;
	color: $color-sub;
	transform: scale(.7) translateZ(30px);
	opacity: calc(.4 - (var(--scrollPos) * 1.5));
}

#imgdecoblob {
	width: 380px !important;
	top: 300px;
	right: -300px;
	transform: translateZ(-100px) scale(2);
}

#pricetagcont {
	right: 100px;
	z-index: 100;

	#pricetag {
		display: inline-flex;
		border-radius: 0.5vh;
		background: #00000088;
		backdrop-filter: blur(5px);
		margin: 15px;
		padding: 10px;
		font-size: 16px;

		.price {
			color: $color-regular;
			font-family: $font-regular;
		}

		.free {
			margin-left: 10px;
			color: #ffc200;
			font-family: $font-header;
		}

		.strike {
			background: #ffc200;
			display: inline-block;
			height: 3px;
			width: 64px;
			position: absolute;
			left: 5px;
			top: 50%;
			transform: translateY(-1.5px) rotate(-10deg);
		}
	}
}

#decoline1 {
	transform: translate3d(-840%, 350%, -500px) scale(6);
}

#decoline2 {
	transform: translate3d(1510%, -50%, -200px) scale(3);
}

//

#app {
	perspective: 100px;
}

#landing {
	position: relative;
	z-index: 10;
	width: 100%;
	height: 100vh;
	min-height: calc(20vh + 650px);

	transform-style: preserve-3d;
}

#details {
	position: relative;
	z-index: 11;
	width: 100%;
	margin-top: 5vh;

	h5 {
		position: relative;
		z-index: 12;
	}

	height: 200vh; // TODO REMOVE
}

.h5deco {
	position: relative;
	height: 66pt;
	transform: translateY(-80%) translateZ(5px);
	z-index: 10;

	path {
		stroke-dasharray: 1000;
		stroke-dashoffset: calc(1000 - (var(--scrollPos) * 200));
	}
}

.featurepanels {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(100px,1fr));
	grid-column-gap: 1vw;
	grid-row-gap: 1vw;
	row-gap: 1vw;

	.panel {
		display: inline-block;
		background-color: $bg-bright;
		border-radius: $component-border-radius;
		transform: rotateX(calc(var(--scroll) * .004deg));

		span {
			display: block;
			text-align: center;

			&.title {
				margin: $component-margin 0;
				font-family: $font-header;
				font-size: 15pt;
				color: $color-header;
			}

			&.desc {
				margin: 0 $component-margin*2 $component-margin*2 $component-margin*2;
				font-family: $font-regular;
				font-size: 11pt;
				color: $color-sub;
			}
		}
	}
}
</style>
