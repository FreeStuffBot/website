<template>
	<div id="app" :contentstate="contentstate">
    <Header/>

		<div style="opacity: 0; pointer-events: none; position: absolute;">
			<img
				v-for="content of allcontent"
				:key="content.img"
				:src="`/assets/img/${content.img}`"
			/>
		</div>

		<div id="text" :class="content.class">
			<h1 v-html="content.title.split('\n').join('<br>')"></h1>
			<h2 v-html="content.desc.split('\n').join('<br>')"></h2>
			<a
				button
				:href="content.link"
				:style="
					`--color: ${content.color}; --color-hover: ${contentcolorhover()}`
				"
				>More</a
			>
			<img
				id="backtext-splatter"
				src="@/assets/img/index/backtext_splatter.svg"
				draggable="false"
			/>
		</div>

		<div id="pagesel">
			<div
				v-for="a of contentamount"
				:active="a - 1 == contentpage"
				:key="a"
        :style="`--color: ${allcontent[a-1].color}`"
				@click="changeContent(a - 1)"
			></div>
		</div>

		<img
			id="splashart"
			:src="`/assets/img/${content.img}`"
			draggable="false"
		/>
		<img
			id="bottom_wave"
			src="@/assets/img/index/bottom_wave.svg"
			draggable="false"
		/>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { shadeColor } from "@/util/ColorUtil";
import Header from "@/components/Header.vue";

@Component({
	components: {
		Header
	}
})
export default class App extends Vue {

	public allcontent = [
		{
			title: "linjo",
			desc: "out now",
			link: "https://play.google.com/store/apps/details?id=de.tude.lines",
			img: "splashart_linjo.svg",
			color: "#6289D9"
		},
		{
			title: "free\nstuff",
			desc: "discord bot",
			link: "./freestuff",
			img: "splashart_freestuff.svg",
			color: "#E59C30"
		},
		{
			title: "we are\ntude",
			desc: "about us",
			link: "/about",
			img: "splashart_aboutus.svg",
			color: "#6A8D80"
		},
		{
			title: "tude\nevents",
			desc: "season 2",
			link: "https://events.tude.ga/",
			img: "splashart_tudeevents.svg",
			color: "#E59C30"
		}
	];

	public content = this.allcontent[0];

	public contentamount = this.allcontent.length;

	public contentpage = 0;

	public contentstate = "";

	contentcolorhover() {
		return shadeColor(this.content.color, -30);
	}

	//

	public switchTimer = -1;

	changeContent(page = -1) {
		if (this.switchTimer) clearTimeout(this.switchTimer);
		this.switchTimer = setTimeout(this.changeContent, 10000);

		if (page == this.contentpage) return;

		if (page == -1) page = this.contentpage + 1;
		if (page >= this.allcontent.length) page = 0;
		this.contentpage = page;

		this.contentstate = "out";
		setTimeout(() => {
			this.content = this.allcontent[page];
			this.$nextTick(() => (this.contentstate = ""));
		}, 300);
  }

	created() {
		this.changeContent(0);
	}
}
</script>

<style lang="scss">
button > * {
	pointer-events: none;
}

html, body, #app {
	overflow: hidden;

  & > * { user-select: none; }
}

/* * */

#splashart {
	position: absolute;
	bottom: 0;
	left: 0;
	z-index: 100;
	width: 60vw;
	transform: translateY(1px);
	transition: all 0.2s ease-in;

  #app[contentstate="out"] & {
    bottom: -0.5vh;
    opacity: 0;
  }
}

#bottom_wave {
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 99;
}

#text {
	position: absolute;
	top: 25vh;
	right: 20vw;
	display: flex;
	flex-direction: column;
	justify-content: right;
	align-items: flex-end;
	z-index: 102;
	transition: all 0.2s ease-in;

  #app[contentstate="out"] & {
    right: 19.5vw;
    opacity: 0;
  }
}

h1 {
	text-transform: uppercase;
	font-family: $font-header;
  font-size: 15vh;
	text-align: right;
	line-height: 12vh;
  color: $color-major;

  .smallh1 & {
    font-size: 12vh;
    line-height: 10vh;
  }
}

h2 {
	text-transform: lowercase;
	font-family: $font-major;
	font-size: 6vh;
	text-align: right;
	line-height: 5.5vh;
  color: $color-major;
}

#text > a {
	margin: 4vh 0 0 0;
	width: 16vh;
	padding: 1vh 0;
}

#backtext-splatter {
	position: absolute;
	top: 0;
	right: 0;
	z-index: -1;
}

#pagesel {
	position: absolute;
	bottom: 0;
	right: 0;
	z-index: 101;
	padding: 2vw;
  display: flex;
  
  * {
    display: block;
    background: #00000033;
    width: 2.5vh;
    height: 1.3vh;
    margin-left: 1vh;
    border-radius: 999px;
    cursor: pointer;
    transition: 0.4s all cubic-bezier(0.77, 0, 0.175, 1);

    &[active] {
      width: 4.5vh;
      --color: #000000cc;
      background: var(--color);
    }
  }
}
</style>
