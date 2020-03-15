<template>
	<div id="app">
		<div id="content">
			<div id="infobox" index>
				<h1>The internet is full<br />of free games</h1>
				<h2>And with this Discord bot<br />you'll never miss any of them!</h2>
				<div id="buttons">
					<a
						id="invite-button"
						href="https://discordapp.com/oauth2/authorize?redirect_uri=https%3A%2F%2Ftude.ga%2Ffreestuff%2Fcallback&client_id=672822334641537041&permissions=445504&scope=bot&response_type=code"
						class="button"
						>Invite</a
					>
					<a id="about-button" href="./freestuff/about" class="button min"
						>About</a
					>
					<img
						class="deco arrow"
						id="decoarrow1"
						src="@/assets/img/freestuff/deco-arrow-1.svg"
						draggable="false"
						depth="80"
					/>
					<img
						class="deco arrow"
						id="decoarrow2"
						src="@/assets/img/freestuff/deco-arrow-2.svg"
						draggable="false"
						depth="90"
					/>
				</div>
			</div>
			<div id="gameslist">
				<div id="pricetagcont">
					<div id="pricetag">
						<div class="price">€24.99</div>
						<div class="free">FREE</div>
						<div class="strike"></div>
					</div>
				</div>
				<img
					id="imgdecoblob"
					src="@/assets/img/freestuff/deco-blob-1.svg"
					draggable="false"
				/>
				<img
					id="imggame3"
					src="@/assets/img/freestuff/game3.png"
					draggable="false"
				/>
				<img
					id="imggame2"
					src="@/assets/img/freestuff/game2.png"
					draggable="false"
				/>
				<img
					id="imggame1"
					src="@/assets/img/freestuff/game1.png"
					draggable="false"
				/>
				<img
					id="imgdiscord"
					src="@/assets/img/freestuff/discord-example.png"
					draggable="false"
				/>
				<div id="discordimgdetail">Message appearance is customizable</div>
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
}

.button {
	display: inline-block;
	padding: 12px 44px;
	margin: 0 10px 0 0;
	background-color: #7b7fe1;
	background-image: url("/assets/img/freestuff/button-img.png");
	background-position: 0 50%;
	background-size: cover;
	font-family: var(--font);
	font-weight: var(--font-weight-normal);
	font-size: 24px;
	user-select: none;
	color: var(--text);
	border-radius: 0.5vh;
	box-shadow: 0 0 15px #00000088;
	transition: 0.2s ease opacity, 0.2s ease background-position,
    0.2s ease box-shadow;
    
  &:hover {
    opacity: 0.7;
    background-position: -5px 50%;
    box-shadow: 0 1px 15px #00000088;
  }
}

.button.min {
	background: transparent;
	border: 2px solid var(--sub);
	color: var(--sub);
	padding: 10px 42px;
	opacity: 0.8;
  box-shadow: none;
  
  &:hover {
    opacity: 0.8;
    background: #ffffff11;
  }
}

#gameslist {
	position: absolute;
	top: 20vh;
	right: 0;
	z-index: 10;
}

#pricetagcont,
#gameslist > img {
	position: absolute;
	width: 320px;
	border-radius: 1vh;
	user-select: none;
}
#pricetagcont {
	transform: var(--transf);
}

#imggame1 {
	right: 100px;
	box-shadow: 0 0 15px #00000088;
}

#imggame2 {
	right: 30px;
	transform: var(--trans, scale(0.9));
	box-shadow: 0 0 10px #00000066;
}

#imggame3 {
	right: -10px;
	transform: var(--trans, scale(0.8));
	opacity: 0.5;
	box-shadow: 0 0 5px #00000044;
}

#imgdiscord {
	width: 400px !important;
	top: 210px;
	right: 260px;
	box-shadow: 0 0 15px #00000088;
}

#discordimgdetail {
	position: absolute;
	width: 400px !important;
	top: 600px;
	right: 260px;
	text-align: center;
	font-size: 14px;
	opacity: 0.3;
}

#imgdecoblob {
	width: 380px !important;
	top: 200px;
	right: 65px;
}

#pricetagcont {
	right: 100px;
	z-index: 100;
}
#pricetag {
	display: inline-flex;
	border-radius: 0.5vh;
	background: #00000088;
	backdrop-filter: blur(5px);
	margin: 15px;
	padding: 10px;
	font-size: 16px;
	font-family: var(--font);
}

#pricetag > .price {
	color: var(--text);
}

#pricetag > .free {
	margin-left: 10px;
	color: #ffc200;
	font-weight: var(--font-weight-bold);
}

#pricetag > .strike {
	background: #ffc200;
	display: inline-block;
	height: 3px;
	width: 64px;
	position: absolute;
	left: 5px;
	top: 50%;
	transform: translateY(-1.5px) rotate(-10deg);
}

</style>
