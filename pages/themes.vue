<template>
	<div class="pageroot padtop">
		<h1 class="center">Themes</h1>
		<div class="wrapper">
			<div class="preview">
				<div class="inner">
					<img :src="themes[selected-1].img" alt="Theme Preview">
				</div>
				<div class="instructions">
					<h3>And now?</h3>
					<span>To make the bot use this theme, use the following command:</span>
					<cmd :command="`@FreeStuff set theme ${selected}`" />
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
						src="@/assets/icons/discordembed.svg"
						alt="Embed"
						:on="theme.flags[1]"
						:content="theme.flags[1]
							? 'This theme will use embeds!<br><i style=&quot;font-size: .8em; opacity: .8&quot;>Make sure the bot has the required permissions</i>'
							: 'This theme will not use embeds!'"
						v-tippy
					>
				</div>
			</div>
		</div>
		<span class="prefooter center" v-html="`Found what you were looking for?&nbsp;${twemoji('👀')}<br>If not, let us know!`" />
		<!-- <span class="prefooter center">If not, <a href="/discord" target="_blank">let us know!</a></span> -->
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import twemoji from 'twemoji'
import cmd from '~/components/ChatCommand.vue'

const themes = [
	{
		id: 1,
		img: '/assets/img/theme-1.webp',
		name: 'Default Theme',
		flags: [ true, true ]
	},
	{
		id: 2,
		img: '/assets/img/theme-2.webp',
		name: 'No photos please!',
		flags: [ false, true ]
	},
	{
		id: 3,
		img: '/assets/img/theme-3.webp',
		name: 'More info!',
		flags: [ true, true ]
	},
	{
		id: 4,
		img: '/assets/img/theme-4.webp',
		name: 'More info less images!',
		flags: [ false, true ]
	},
	{
		id: 5,
		img: '/assets/img/theme-5.webp',
		name: 'Keep it very simple',
		flags: [ false, true ]
	},
	{
		id: 6,
		img: '/assets/img/theme-6.webp',
		name: 'Images are cool!',
		flags: [ true, true ]
	},
	{
		id: 7,
		img: '/assets/img/theme-7.webp',
		name: 'Minimalist with embeds',
		flags: [ false, true ]
	},
	{
		id: 8,
		img: '/assets/img/theme-8.webp',
		name: 'Minimalist without embeds',
		flags: [ false, false ]
	},
	{
		id: 9,
		img: '/assets/img/theme-9.webp',
		name: 'Text only!',
		flags: [ false, false ]
	},
	{
		id: 10,
		img: '/assets/img/theme-10.webp',
		name: 'Advanced (for ArchiSteamFarm)',
		flags: [ false, true ]
	}
]

export default Vue.extend({
	components: {
		cmd
	},
	data () {
		return {
			selected: 1,
			themes
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
	},
	head() {
		return {
			title: 'FreeStuffBot Themes',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: `View all ${themes.length} available themes for the FreeStuff Discord Bot-`
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'discord, free, games, bot, customizeable, stuff, freestuff, freestuffbot, themes'
				}
			]
		}
	}
})
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

.wrapper {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	column-gap: 20pt;
	row-gap: 10pt;
	margin-top: 50pt;

	@media (max-width: 1000px) { grid-template-columns: 1fr; }

	.preview {
		.inner {
			// position: sticky;
			// top: 10%;
			display: block;
			background-color: #363940;
			padding: 20pt;
			border-radius: $component-border-radius;

			@media (max-width: 600px) { padding: 10pt; }

			img {
				width: 100%;
				max-width: 471px;
			}
		}

		.instructions {
			background-color: $bg-bright;
			border-radius: $component-border-radius;
			margin-top: 10pt;
			padding: 20pt;

			h3 { margin-top: 0 !important; }
		}
	}

	.controls {
		.button {
			$unit: 50pt;
			--color: hsl(var(--hue), 50%, 60%);

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

			span { margin-bottom: 0 !important; margin-right: 10pt; }

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
				text-overflow: ellipsis;

				@media (max-width: 600px) {
					font-size: 12pt;
					margin-left: $unit / 10;
					overflow: hidden;
				}
			}

			img {
				width: $unit / 5 * 2;
				height: $unit / 5 * 2;
				padding: $unit/10*3;
				margin-left: -$unit/10*3;
				opacity: .15;
				transition: filter .2s ease;

				&[on] { opacity: .8; }

				@media (max-width: 600px) { display: none; }
			}
		}
	}
}

.prefooter {
	margin: 100pt 0 50pt 0;
	font-size: 12pt;
	opacity: .8;
}
</style>
