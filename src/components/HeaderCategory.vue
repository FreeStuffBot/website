<template>
	<li>
		<a :href="url">
			<span :style="color?`color:${color}`:''">
				{{ name }}
				<svg v-if="elements && elements.length" xmlns="http://www.w3.org/2000/svg" width="7" height="5"><g fill="none" fill-rule="evenodd"><path d="M0 0h7v5H0z"/><path d="M0 1l3.488 2.737L6.975 1" stroke="currentColor"/></g></svg>
			</span>
		</a>
		<ul v-if="elements && elements.length">
			<HeaderElement
				v-for="element in elements"
				:key="element.name"
				:name="element.name"
				:url="element.url"
			></HeaderElement>
		</ul>
	</li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import HeaderElement from "@/components/HeaderElement.vue";

@Component({
	components: {
		HeaderElement
	}
})
export default class HeaderCategory extends Vue {
	@Prop() private name!: string;
	@Prop() private elements!: { name: string; url: string }[];
	@Prop() private url!: string;
	@Prop() private theme!: string;
	@Prop() private color!: string;
}
</script>

<style scoped lang="scss">

li {
	font-size: 18px;
	-webkit-font-smoothing: subpixel-antialiased;
	display: inline-block;
	position: relative;
	transition: opacity .125s;
	will-change: opacity;
}

span {
	padding: 15px 15px;
	color: var(--text);
	font-family: $font-regular;
	font-weight: 300;
	font-size: 14pt;
	position: relative;
	text-decoration: none;
	transition: opacity 0.1s ease;
	will-change: opacity;
	opacity: .8;

	&:hover {
		opacity: 1;
	}

	* { color: currentColor; }
}

svg {
	position: relative;
	top: -3px;
	left: 2px;
	border: 0;
	font-family: inherit;
	font-size: 100%;
	font-style: inherit;
	font-weight: inherit;
	margin: 0;
	outline: 0;
	padding: 0;
	vertical-align: baseline;
}

ul {
	opacity: 0;
	transform: scale(0.9) translateY(-10px);
	visibility: hidden;
	background: var(--morelist);
	border-radius: 5pt;
	box-shadow: 0 2px 40px #00000017;
	font-size: 13px;
	left: 0;
	min-width: 130px;
	overflow: hidden;
	padding: 2px 0;
	position: absolute;
	top: 30px;
	z-index: 400;
	transform-origin: 50% 0;
	transition: opacity 0.125s, transform 0.125s, visibility 0.125s,
}

ul:hover, li:hover > ul {
	opacity: 1;
	transform: scale(1) translateY(0);
	visibility: visible;
}

</style>
