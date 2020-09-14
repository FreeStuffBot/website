<template>
	<div class="pageroot padtop">
		<h1 class="center">Themes</h1>
		<div class="wrapper">
			<div class="preview">
				<div class="inner">
					<img :src="themes[selected-1].img" alt="">
				</div>
			</div>
			<div class="controls">
				<div
					class="button"
					v-for="theme of themes"
					:key="theme.id"
					:style="`--hue: ${(theme.id * 100) % 360}`"
					:selected="selected == theme.id"
					@click="selected = theme.id"
				>
					<span class="number" v-text="theme.id"></span>
					<span class="name" v-text="theme.name"></span>
					<img
						src="@/assets/icons/photo.svg"
						alt="Photo"
						:on="theme.flags[0]"
						:content="theme.flags[0]
							? 'This theme will show<br>external images!'
							: 'This theme will not<br>show external images!'"
						v-tippy
					>
					<img
						src="@/assets/icons/emote.svg"
						alt="Emote"
						:on="theme.flags[1]"
						:content="theme.flags[1]
							? 'This theme will show<br>external emotes!<br><i style=&quot;font-size: .8em; opacity: .8&quot;>Make sure it has the required permissions</i>'
							: 'This theme will not<br>show external emotes!'"
						v-tippy
					>
					<img
						src="@/assets/icons/discordembed.svg"
						alt="Embed"
						:on="theme.flags[2]"
						:content="theme.flags[2]
							? 'This theme will use embeds!<br><i style=&quot;font-size: .8em; opacity: .8&quot;>Make sure it has the required permissions</i>'
							: 'This theme will not use embeds!'"
						v-tippy
					>
				</div>
			</div>
		</div>
		<h2 sub class="center" v-html="`Found what you were looking for?&nbsp;${twemoji('👀')}`" />
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import twemoji from 'twemoji'

export default Vue.extend({
	data () {
		return {
			selected: 1,
			themes: [
				{
					id: 1,
					img: '/assets/img/theme-1.png',
					name: 'Default Theme',
					flags: [ true, true, true ]
				},
				{
					id: 2,
					img: '/assets/img/theme-2.png',
					name: 'Button = bad',
					flags: [ true, false, true ]
				},
				{
					id: 3,
					img: '/assets/img/theme-3.png',
					name: 'No photos please!',
					flags: [ false, true, true ]
				},
				{
					id: 4,
					img: '/assets/img/theme-4.png',
					name: 'Keep it simple',
					flags: [ false, false, true ]
				},
				{
					id: 5,
					img: '/assets/img/theme-5.png',
					name: 'Keep it very simple',
					flags: [ false, false, true ]
				},
				{
					id: 6,
					img: '/assets/img/theme-6.png',
					name: 'Images are cool!',
					flags: [ true, false, true ]
				},
				{
					id: 7,
					img: '/assets/img/theme-7.png',
					name: 'Minimalist with embeds',
					flags: [ false, false, true ]
				},
				{
					id: 8,
					img: '/assets/img/theme-8.png',
					name: 'Minimalist without embeds',
					flags: [ false, false, false ]
				},
				{
					id: 9,
					img: '/assets/img/theme-9.png',
					name: 'Text only!',
					flags: [ false, false, false ]
				},
				{
					id: 10,
					img: '/assets/img/theme-10.png',
					name: 'Details (for ArchiSteamFarm)',
					flags: [ false, false, true ]
				}
			]
		}
	},
  methods: {
    twemoji (emoji: string) {
      return twemoji.parse(emoji)
    }
  },
  transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
})
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

.wrapper {
	width: 100%;
	display: grid;
	grid-template-columns: repeat(2, minmax(0, 1fr));
	column-gap: 20pt;
	margin-top: 50pt;

	.preview {
		.inner {	
			position: sticky;
			top: 15%;
		}
	}

	.controls {
		.button {
			$unit: 50pt;
			--color: hsl(var(--hue), 40%, 50%);

			position: relative;
			display: grid;
			grid-template-columns: auto 1fr auto auto auto;
			background-color: $bg-bright;
			border-radius: $component-border-radius;
			overflow: hidden;
			cursor: pointer;
			transition: background-color .2s ease;
			will-change: background-color;

			&:hover { background-color: $bg-brighter; }
			&:not(:last-child) { margin-bottom: 10pt; }
			&[selected] {
				background-color: var(--color);
				.number { color: $backpage; }
				.name { color: $backpage; }
				img { filter: invert(1) }
			}

			span { margin-bottom: 0 !important; }

			.number {
				width: $unit;
				height: $unit;
				border-right: 3px solid $backpage;
				line-height: $unit;
				text-align: center;
				font-size: 22pt;
				font-family: $font-header;
				color: var(--color);
				transition: color .2s ease;
			}

			.name {
				line-height: $unit;
				margin-left: $unit / 3;
				font-size: 14pt;
				font-family: $font-major;
				color: $color-sub;
				transition: color .2s ease;
				white-space: nowrap;
			}

			img {
				width: $unit / 5 * 2;
				height: $unit / 5 * 2;
				padding: $unit/10*3;
				margin-left: -$unit/10*3;
				opacity: .15;
				transition: filter .2s ease;

				&[on] { opacity: .8; }
			}
		}
	}
}

h2 {
	margin: 100pt 0 50pt 0;
	font-size: 12pt;
	opacity: .8;
}
</style>
