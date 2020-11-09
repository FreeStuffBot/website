<template>
	<div class="padtop plaintext pageanchor--donate">
		<h1 class="center">
			Consider donating?
		</h1>
		<h2 sub class="center">
			That&nbsp;would be&nbsp;amazing!
		</h2>
		<div class="divider dotted vertical"></div>
		<h2 class="center overflow-visible" v-html="`Where&nbsp;does&nbsp;my money&nbsp;go&nbsp;to?&nbsp;${twemoji('🤔')}`"></h2>
		<span class="slim">tl;dr &mdash; We have bills to pay!</span>
		<span class="slim">We're currently paying 10€/mo for two servers in order to host the bot and everything else that's required for the bot to function. We would like to get these costs covered first. If we get to a point where we'll actually have money over at the end of the month, we'll be using it for the following:</span>
		<span class="slim">&bull; Paying for previous months</span>
		<span class="slim">&bull; Putting some money aside, in case we're not reaching our monthly goal at some point in the future</span>
		<span class="slim">&bull; Re-Investing into the bot. That means better and more stable servers.</span>
		<span class="slim">We're not paying anyone! Everyone at the team works unsalaried and just out of own passion. Your money won't end up in someones' wallet in order to buy Fortnite skins. That's just not happening.</span>
		<div class="divider dotted vertical"></div>
		<h2 class="center overflow-visible" v-html="`And&nbsp;what&nbsp;do I&nbsp;get out&nbsp;of&nbsp;this?&nbsp;${twemoji('🤔')}`"></h2>
		<span class="slim">Uhhhh... not much. This is a donation nevertheless, not a purchase. We got some tiny rewards though, just as a little thank-you :)</span>
		<span class="slim">&bull; Donator role with access to a secret channel on <a href="/discord" rel="noreferrer" target="_blank">our Discord server</a></span>
		<span class="slim">&bull; Your name on the <nuxt-link to="/team">team page</nuxt-link></span>
		<span class="slim">&bull; A chance to have your name there at the bottom. Scoll down a bit. See that name? You could be there too! We always select a random donator. It doesn't matter how much you donated or how long it was ago.</span>
		<div class="divider dotted vertical"></div>
		<h2 class="center overflow-visible" v-html="`Convinced?&nbsp;${twemoji('✨')}`"></h2>
		<span class="slim">Even if it's just as little as $1 &mdash; every cent helps!</span>
		<span class="slim"><a href="/o/patreon" rel="noreferrer" target="_blank">Donate via Patreon</a></span>
		<span class="slim"><a href="/o/ko-fi" rel="noreferrer" target="_blank">Donate via Ko-fi</a></span>
		<span class="slim"><a href="/discord" rel="noreferrer" target="_blank">Contact</a></span>
	</div>
</template>

<script lang="ts">
import Vue from 'vue'
import twemoji from 'twemoji'


export default Vue.extend({
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
			title: 'FreeStuffBot Donating',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'As an open source project, we fully rely on donations to pay for running costs such as servers and infrastructure.'
				}
			]
		}
	}
})
</script>

<style scoped lang="scss">
h2 {
	margin-top: 0 !important;
}
</style>
<style lang="scss">
.pageanchor--donate {

	img.emoji {
		width: 1.2em;
		height: 1.2em;
		transform: translateY(-.1em);
	}

	@media (max-width: 500px) {
		img.emoji { display: none !important; }
	}

}
</style>

