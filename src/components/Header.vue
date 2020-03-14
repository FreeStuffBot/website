<template>
	<header :theme="theme" :monochrome="monochrome">
    <div class="header desktopHeader">
      <div class="headerInner">
        <div class="headerLogo"><a href="https://tude.ga/"><img :src="getLogo()"></a></div>
        <ul class="headerNav">
          <HeaderCategory
            v-for="category in data"
            :key="category.name"
            :name="category.name"
            :elements="category.elements"
            :url="category.url"
            :theme="theme"
          ></HeaderCategory>
        </ul>
        <button class="headerLogin">Login</button>
      </div>
    </div>
    <div class="header mobileHeader"><a href="https://tude.ga/">Tude</a></div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HeaderCategory from "@/components/HeaderCategory.vue";

@Component({
	components: {
		HeaderCategory
	}
})
export default class Header extends Vue {
	@Prop() private theme!: "light" | "dark";
	@Prop() private monochrome!: boolean;

	public data = [
		{
			name: "Club",
			url: "club",
			elements: [
				{ name: "Tude Club", url: "./club" },
				{ name: "Arcade", url: "./arcade" },
				{ name: "Events", url: "https://events.tude.ga/" },
				{ name: "Discord", url: "https://discord.gg/mJnQXet" }
			]
		},
		{
			name: "Products",
			url: "products",
			elements: [
				{ name: "Linjo", url: "https://play.google.com/store/apps/details?id=de.tude.lines" },
				{ name: "Free Stuff", url: "./freestuff" },
				{ name: "All Products", url: "./products" }
			]
		},
		{
			name: "More",
			url: "more",
			elements: [
				{ name: "About", url: "./about" },
				{ name: "Developers", url: "https://developers.tude.ga/" },
				{ name: "Contact", url: "mailto:tudeteam@gmail.com" },
				{ name: "Legal", url: "./legal" },
				{ name: "Even More", url: "./more" }
			]
		}
  ];
  
  getLogo() {
    switch(this.theme) {
      case 'light': return '/assets/img/logo_white.svg';
      default: return '/assets/img/logo_black.svg';
    }
  }
}
</script>

<style scoped lang="scss">
header,
header * {
	--hover: #f5f5f5;
	--text: #000000b9;
	--morelist: #ffffff;
	--morelist-text: #111111;
}
header[theme="light"],
header[theme="light"] * {
	--hover: #e4e4e4;
	--text: #e9e9e9b9;
	--morelist: #fafafa;
	--morelist-text: #111111;
}

header {
	background: transparent;
  position: absolute;
  top: 0;
  left: 0;
	z-index: 110;
	width: 100vw;
	border: 0;
	font-family: $color-header;
	font-size: 18px;
	font-style: inherit;
	font-weight: inherit;
	margin: 0;
	outline: 0;
	padding: 0;
	vertical-align: baseline;
  transition: opacity 0.1s ease-in;
  
  &[hide] {
    opacity: 0;
    pointer-events: none;
  }
}

.desktopHeader {
	visibility: visible;
}
@media (max-width: 848px) {
	.desktopHeader {
		visibility: hidden;
	}
}
.mobileHeader {
	visibility: hidden;
}
@media (max-width: 848px) {
	.mobileHeader {
		visibility: visible;
	}
}

.header {
	display: block;
	box-sizing: border-box;
	color: #fff;
	font-size: 14px;
	font-weight: 400;
	height: 72px;
	padding: 8px 0;
	position: absolute;
	user-select: none;
	width: 100%;
	z-index: 560;

	a { text-decoration: none !important; }
  * { font-family: $font-regular; }
}

.headerInner {
	align-items: center;
	flex-wrap: wrap;
	display: flex;
	height: 100%;
	justify-content: center;
	margin: 0 auto;
	// max-width: 1300px;
	padding: 5px 20px;
	position: relative;
}

.headerLogo {
	flex: 0 0 auto;
	margin-right: 12px;
	display: flex;

	img {
		height: 40px;
		opacity: 0.8;
	}
}

.headerNav {
	display: flex;
	align-items: center;
	flex: 1 0 auto;
	margin: 0;
	min-height: 56px;
	padding: 0;

	& > li {
		font-size: 18px;
		-webkit-font-smoothing: subpixel-antialiased;
		-webkit-transition: opacity 0.125s;
		display: inline-block;
		position: relative;
		transition: opacity 0.125s;
		will-change: opacity;
	}
}

.headerLogin {
	--color: #{$theme-a};
  --color-hover: #{$theme-a-hover};
  font-family: $font-major;
	font-size: 12pt;

	header[theme="light"] & {
		--color: #{$color-minor};
		--color-hover: #{$color-sub};
	}
	header[monochrome="true"] & {
		--color: #{$color-sub};
		--color-hover: #{$color-regular};
	}
	header[theme="light"][monochrome="true"] & {
		--color: #{$color-sub};
		--color-hover: #{$theme-b};
  }
}
</style>
