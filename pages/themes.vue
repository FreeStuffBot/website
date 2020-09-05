<template>
	<div class="pageroot padtop">
		<h1 class="center">Themes</h1>
		<div class="wrapper">
			<div class="preview">
				<div class="inner">
					<img src="/assets/img/theme-1.png" alt="">
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
					<span class="flag1">Images</span>
					<span class="flag2">External Emotes</span>
					<span class="flag3">Embed messages</span>
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
					flags: [ true, true, true ]
				},
				{
					id: 3,
					img: '/assets/img/theme-3.png',
					name: 'No photos please!',
					flags: [ true, true, true ]
				},
				{
					id: 4,
					img: '/assets/img/theme-4.png',
					name: 'Keep it clean',
					flags: [ true, true, true ]
				},
				{
					id: 5,
					img: '/assets/img/theme-5.png',
					name: 'idk',
					flags: [ true, true, true ]
				},
				{
					id: 6,
					img: '/assets/img/theme-6.png',
					name: 'idk',
					flags: [ true, true, true ]
				},
				{
					id: 7,
					img: '/assets/img/theme-7.png',
					name: 'idk',
					flags: [ true, true, true ]
				},
				{
					id: 8,
					img: '/assets/img/theme-8.png',
					name: 'idk',
					flags: [ true, true, true ]
				},
				{
					id: 9,
					img: '/assets/img/theme-9.png',
					name: 'idk',
					flags: [ true, true, true ]
				},
				{
					id: 10,
					img: '/assets/img/theme-10.png',
					name: 'Details (for ArchiSteamFarm)',
					flags: [ true, true, true ]
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
		}
	}
}

h2 {
	margin: 100pt 0 50pt 0;
	font-size: 12pt;
	opacity: .8;
}
</style>
