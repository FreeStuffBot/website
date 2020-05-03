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
			depth="95"
			@click="init3D()"
			style="pointer-events: unset; cursor: pointer;"
		/>
		<img
			class="deco decoitem"
			id="decoitem2"
			src="@/assets/img/deco-item-2.svg"
			draggable="false"
			depth="120"
		/>
		<img
			class="deco decoitem"
			id="decoitem3"
			src="@/assets/img/deco-item-3.svg"
			draggable="false"
			depth="92"
		/>
		<img
			class="deco decoitem"
			id="decoitem4"
			src="@/assets/img/deco-item-4.svg"
			draggable="false"
			depth="106"
		/>
		<img
			class="deco decoitem"
			id="decoitem5"
			src="@/assets/img/deco-item-5.svg"
			draggable="false"
			depth="100"
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

	private _3dinit = false;

	init3D() {
		if (this._3dinit) return;
		this._3dinit = true;

		let targetX = 0;
		let targetY = 0;
		let xAxis = 0;
		let yAxis = 0;
		document.addEventListener('mousemove', function(e) {
			const bounds = document.body.getBoundingClientRect();
			targetX = (bounds.left+(bounds.right-bounds.left)/2 - e.clientX);
			targetY = (bounds.top+(bounds.bottom-bounds.top)/2 - e.clientY);
		});

		setInterval(() => {
			xAxis += (targetX - xAxis) / 10;
			yAxis += (targetY - yAxis) / 10;
		
			for (const deco of document.getElementsByClassName('deco')) {
				const depth = parseInt(deco.getAttribute('depth') as string);
				if (!depth) continue;
				if (deco.classList.contains('arrow')) (deco as HTMLElement).style.setProperty('--trans', `translate(${xAxis / depth}%, ${yAxis / depth}%)`);
				else (deco as HTMLElement).style.setProperty('--trans', `translate(${xAxis / depth}%, ${yAxis / depth}%) rotate(${Math.floor(Date.now() * (depth % 2 == 0 ? 1 : -1)) / depth * 2}deg)`);
			}
			(document.getElementById('invite-button') as HTMLElement).style.setProperty('--trans', `translate(${xAxis / 60}px, ${yAxis / 60}px)`);
			(document.getElementById('about-button') as HTMLElement).style.setProperty('--trans', `translate(${xAxis / 100}px, ${yAxis / 100}px)`);
			document.getElementsByTagName('h1')[0].style.setProperty('--trans', `translate(${xAxis / 70}px, ${yAxis / 70}px)`);
			document.getElementsByTagName('h2')[0].style.setProperty('--trans', `translate(${xAxis / 100}px, ${yAxis / 100}px)`);
			(document.getElementById('imgdiscord') as HTMLElement).style.setProperty('--trans', `translate(${xAxis / 60}px, ${yAxis / 60}px)`);
			(document.getElementById('discordimgdetail') as HTMLElement).style.setProperty('--trans', `translate(${xAxis / 60}px, ${yAxis / 60}px)`);
			(document.getElementById('pricetagcont') as HTMLElement).style.setProperty('--transf', `translate(${xAxis / 70}px, ${yAxis / 70}px)`);
			(document.getElementById('imggame1') as HTMLElement).style.setProperty('--trans', `translate(${xAxis / 80}px, ${yAxis / 80}px)`);
			(document.getElementById('imggame2') as HTMLElement).style.setProperty('--trans', `translate(${xAxis / 110}px, ${yAxis / 110}px) scale(.9)`);
			(document.getElementById('imggame3') as HTMLElement).style.setProperty('--trans', `translate(${xAxis / 140}px, ${yAxis / 140}px) scale(.8)`);
		}, 20);
	}
}
</script>

<style lang="scss">
* {
	--background: #1f2023;
	--bright: #37393e;
	--brighter: #3e4046;
	--dark: #181a1c;

	--darkest: #0c0d0e;

	--text: #ffffff;
	--sub: #cccccc;
	--min: #777777;

	--theme-a: #73988a;
	--theme-b: #c5dcd4;

	--error: #f16248;
}

#content *, .deco {
	transform: var(--trans);
}

#app {
	background-color: var(--background);
	display: flex;
	justify-content: center;
	overflow-x: hidden;
}

#content {
	position: relative;
	width: 90%;
	max-width: 1300px;
}

#infobox:not([index]) {
	position: absolute;
	top: 25vh;
	left: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 20;

	h1, h2 { text-align: center; }
}

h1 {
	color: var(--text);
	font-family: $font-header;
	font-size: 50px;
	line-height: 45px;
	margin-bottom: 20px;
}

h2 {
	color: var(--sub);
	font-family: $font-regular;
	font-size: 26px;
	line-height: 26px;
	margin-bottom: 60px;
}

h3 {
	border-radius: .4vh;
	background: var(--bright);
	display: inline-block;
	position: absolute;
	left: 10px;
	top: -10px;
	font-size: 20px;
	padding: 4px 7px;
	color: var(--text);
	font-family: $font-header;
	box-shadow: 0 1px 2px #00000099;
}

h4 {
	font-size: 16px;
	margin: 20px 0 5px 0;
	color: var(--text);
	font-family: $font-header;
}

.box {
	position: relative;
	width: 50%;
	background: var(--bright);
	border-radius: .5vh;
	padding: 20px;
	box-shadow: 0 2px 10px #00000066;
	margin-bottom: 40px;

	a {
		color: #da5e7d;
		border-bottom: 3px solid #da5e7d33;

		&:hover { border-bottom: 3px solid #da5e7d; }
	}
}
	
#content span {
	display: block;
	font-size: 12pt;
	color: var(--text);
	font-family: $font-regular;
}

code {
	background: #00000055;
	color: var(--text);
	padding: 5px 9px;
	margin: 5px 0;
	font-size: 12pt;
	display: block;
	font-family: monospace;
	border-radius: .3vh;

	&[inline] {
		display: inline-block;
	}
}

footer {
	margin-bottom: 40px;
	width: 100%;

	* {
		display: block;
		opacity: .2;
		font-size: 11pt;
		text-align: center;
		color: var(--text);
		font-family: $font-regular;
		text-decoration: none;

		&:hover { text-decoration: underline; opacity: .5; }
	}
}

.info {
	border-left: 3px solid #2aa9c9;
	background: #3f5155;
	margin-top: 20px;
	padding: 10px 0 10px 15px;
	border-radius: 0 .3vh .3vh 0;
	color: var(--text);
	font-family: $font-regular;
}

.divider {
	margin: 30px 0 60px 0;
	width: 50px;
	height: 2px;
	background: var(--sub);
	transform: translateX(-10px);
		
	&::after {
		content: '';
		position: relative;
		display: block;
		right: -60px;
		width: 10px;
		height: 2px;
		background: var(--sub);
	}
}

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
}

#decoline1 {
	bottom: 0;
	left: 0;
	width: 440px;
	transform: none;
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

/*
 *
 */

@media (max-width: 1200px) {
	
	* {
		transform: unset !important;
	}

	#infobox {
		width: 100%;
	}

	h1 {
		font-size: 30px;
		line-height: 30px;
		text-align: center;
	}

	h2 {
		font-size: 16px;
		line-height: 16px;
		text-align: center;
	}

	#decoarrow1 {
		position: absolute;
		width: 80px;
		left: 50%;
		top: 12px;
		transform: translateX(-250px);
	}

	#decoarrow2 {
		position: absolute;
		width: 60px;
		left: 42%;
		top: 65px;
	}

	#gameslist {
		top: 80vh !important;
		transform: scale(0.7);
		width: 100%;
		right: 50%;
  }
  
  #pricetagcont {
		right: unset;
    left: 2vw;
  }

	#imggame1 {
		right: unset;
    left: 2vw;
    width: 70vw !important;
	}

	#imggame2 {
    right: 8% !important;
    width: 70vw !important;
	}

	#imggame3 {
    right: 0 !important;
    width: 70vw !important;
	}

	#imgdiscord {
    right: 0 !important;
    margin: auto;
		width: 90vw !important;
		top: 300px;
		margin-bottom: 75px;
	}

	#discordimgdetail {
		position: absolute;
		width: 100% !important;
		top: 620px;
		right: 0 !important;
		text-align: center;
		font-size: 14px;
		opacity: 0.3;
	}

  .button {
    font-size: 20px;
	}
	
  #imgdiscord {
    right: 0vw !important;
    width: 90vw !important;
    top: 300px !important;
    margin-bottom: 50px;
  }

  #decoline1,
  #decoline2,
  #decoblob2 {
    display: none;
  }

  #mid {
    flex-direction: column;
  }

  #imgbox {
    width: 100% !important;
    min-height: 330px;
    margin-bottom: 30px !important;
    margin-top: 30px !important;
  }
  
  #buttonsbox {
    width: 100% !important;
  }

  #buttons {
    width: calc(100% + 5px);
    display: flex;
    justify-content: center;
    transform: translate(0px, 0px);
    flex-wrap: wrap;
		margin-bottom: 30px;

		a {
			margin-top: 10px;
			font-size: 18px;
		}
  }

  footer {
    display: none;
  }

  .box {
    width: 90% !important;
  }

  #tutorial {
    margin-bottom: 30px;
  }
	
	.deco {
		opacity: .2;
	}

	#buttons > .deco {
		opacity: 1;
	}
}
</style>
