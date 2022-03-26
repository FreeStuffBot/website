<!---
  HEY!
  If you're reading this before april 1st, congrats! But please keep this to yourself for now.
  Don't ruin the surprise for other people! :)
  If you just can't help it and need to share it with someone feel free to DM me (Maanex) on Discord :p
  But again, don't share this, don't talk about it until april 1st, much thanks, bye! <3
-->


<template>
  <div class="">
    <div
      class="cookies"
      @click.prevent="you_fool()"
      @click.right.prevent="you_fool()"
      @click.middle.prevent="you_fool()"
      @keydown.enter.prevent="you_fool()"
      @keydown.space.prevent="you_fool()"
      :hidden="cookiehidden"
    >
      <div class="background"></div>
      <div class="spacer"></div>
      <div class="wrapper" :data-preload="fakepreload">
        <div class="inner">
          <span class="title">Before you continue...</span>
          <div class="content">
            We are using cookies for advertising purposes as well as to enrich your experience on our websites. For more information about cookies and how we use cookies on our websites, please refer to the <a href="https://www.fromsoftware.jp/ww/policy_privacy.html">Privacy Policy</a>.
          </div>
          <div class="buttons" :fakeloaddone="fakeloaddone">
            <div class="primary">Accept all</div>
            <div class="secondary">Manage preferences</div>
          </div>
        </div>
      </div>
    </div>

    <div class="page" :nooverflow="!cookiehidden">
      <div class="title">Happy April Fools Day!</div>
      <div class="subtitle">No Elden Ring for you today, take this Rickroll instead!</div>
      <div class="vid-div">
        <div id="vid-blocker"></div>
        <iframe
          id="video-frame"
          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?&enablejsapi=1&autoplay=1&mute=1"
          frameborder="0"
          height="860"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <nuxt-link to="/" class="footer-lite">
        <div class="logo">
          <img src="@/assets/img/icon_trans.png" alt="FreeStuff" draggable="false">
          FreeStuff
        </div>
      </nuxt-link>
      <div class="bot-links">
        <nuxt-link to="/">About</nuxt-link>
        &bull;
        <a href="https://freestuffbot.xyz/invite">Invite Bot</a>
        &bull;
        <a href="https://freestuffbot.xyz/discord">Join our Discord</a>
      </div>
      <div class="legal-links">
        Find the official Elden Ring website at:<a href="https://www.eldenring.jp/">https://www.eldenring.jp/</a>
      </div>
      <div class="legal-links">
        This website is made for entertainment purposes only and is not affiliated with Elden Ring or it's creators.
      </div>
      <div class="legal-links">
        This is not an advertisement for Elden Ring. FreeStuff does not get paied for this. (Would be cool though...)
      </div>
    </div>

    <div v-if="!cookiehidden" class="footer">
      © 2020-2022 FreeStuff. FreeStuff is not endorsed by BANDAI NAMCO Entertainment Inc. or FromSoftware, Inc. and doesn’t reflect the views or opinions of anyone officially involved in producing or managing Elden Ring. Elden Ring is a registered trademark of FromSoftware, Bandai Namco Entertainment or one of it's affiliates. We claim no rigths to any intellectual property presented, all content belongs to their respective owners.
      <a href="https://www.eldenring.jp/">Visit the official Elden Ring website at https://www.eldenring.jp/</a>
      <a href="mailto:team@freestuffbot.xyz">Contact website administrator at team@freestuffbot.xyz</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import twemoji from 'twemoji'

const metaDescription = "\"FreeStuff is paying absurd amounts of money to make this game free for a day, we just couldn't say no to an offer of this magnitude.\", a spokesperson exclusively told BBC last monday."

export default Vue.extend({
  data () {
    return {
      fakepreload: false,
      fakeloaddone: false,
      cookiehidden: false,
      notloadTimeout: false
    }
  },
  methods: {
    twemoji (emoji: string) {
      return twemoji.parse(emoji)
    },
    you_fool() {
      // @ts-ignore
      if (!player || !player.seekTo) {
        if (this.notloadTimeout)
          this.cookiehidden = true
        return
      }
      this.cookiehidden = true
      // @ts-ignore
      player.seekTo(0)
      // @ts-ignore
      player.unMute()
    }
  },
  transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
  mounted() {
    setTimeout(v => {
      v.fakepreload = true
    }, 130, this)
    setTimeout(v => {
      v.fakeloaddone = true
    }, 310, this)
    setTimeout(v => {
      v.notloadTimeout = true
    }, 2000, this)

    let frame = document.querySelector('#video-frame')
    let firstScriptTag = document.querySelector('script')
    let tag = document.createElement('script')
    tag.id = 'iframe-demo'
    tag.src = 'https://www.youtube.com/iframe_api'
    frame?.setAttribute('height', Math.floor(frame.clientWidth * .6) + '')

    // @ts-ignore
    window.player = {}
    // @ts-ignore
    window.onYouTubeIframeAPIReady = () => {
      // @ts-ignore
      player = new YT.Player('video-frame')
    }

    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag)
  },
  layout: 'empty',
  fetchOnServer: false,
	head() {
		return {
			title: 'Elden Ring exclusive -100% off deal (24h)',
      link: [
        { hid: 'icon', rel: 'icon', type: 'image/png', href: '/' },
        { hid: 'icon16', rel: 'icon', type: 'image/png', href: '/', sizes: '16x16' },
        { hid: 'icon32', rel: 'icon', type: 'image/png', href: '/', sizes: '32x32' },
        { hid: 'icon96', rel: 'icon', type: 'image/png', href: '/', sizes: '96x96' },
        { hid: 'icon180', rel: 'icon', type: 'image/png', href: '/', sizes: '180x180' }
      ],
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: metaDescription
				},
				{
					hid: 'og:description',
					name: 'og:description',
					content: metaDescription
				},
				{
					hid: 'twitter:description',
					name: 'twitter:description',
					content: metaDescription
				},
        {
          hid: 'og:image',
          property: 'og:image',
          content: ''
        },
        {
          hid: 'image',
          property: 'image',
          content: ''
        },
        {
          hid: 'keywords',
          property: 'keywords',
          content: ''
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'Elden Ring -100% off promotion'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Elden Ring -100% off promotion'
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'Elden Ring -100% off promotion'
        },
        {
          hid: 'title',
          property: 'title',
          content: 'Elden Ring -100% off promotion'
        },
        {
          hid: 'application-name',
          property: 'application-name',
          content: 'Elden Ring -100% off promotion'
        }
			]
		}
	}
})
</script>

<style scoped lang="scss">
@import '~/assets/style/fonts.scss';
@import '~/assets/style/variables.scss';

.cookies {
  position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
  background: black;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &[hidden] { display: none }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    background-image: url('/assets/img/eldenring-backpage.jpg');
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .wrapper, .spacer {
    width: 450px;
  }

  .wrapper {
    background: #00000088;
    backdrop-filter: blur(2px);
    transition:
      opacity .5s ease-out,
      transform .5s ease-out;

    &:not([data-preload]) {
      opacity: 0;
      transform: translateY(-20px);
    }
  }

  .inner {
    padding: 50pt 40pt;
    margin: -10pt 10pt;
    border: 1px solid #e79f41;
    border-bottom-width: 5pt;
  }

  .title {
    font-family: $font-header;
    color: #e79f41;
    font-size: 18pt;
    text-transform: uppercase;
  }

  .content {
    font-family: $font-regular;
    color: #ffffffee;
    font-size: 12pt;

    a { color: lightskyblue !important; }
  }

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 15pt;
    gap: 10pt;

    &:not([fakeloaddone]) * {
      font-size: 0pt !important;
    }

    * {
      background: black;
      font-family: $font-header;
      font-size: 10pt;
      padding: 12pt 27pt;
      cursor: pointer;
      transition:
        background-color .1s ease-out,
        box-shadow .1s ease-out,
        color .1s ease-out;
    }

    .secondary {
      color: #ffffffbb;
      background-color: #00000099;
      box-shadow:
        0 0 0 0px #00000099 inset,
        0 0 0 0px #ffffff44 inset;

      &:hover {
        background-color: #000000 !important;
        box-shadow:
          0 0 0 4px #000000 inset,
          0 0 0 5px #ffffff44 inset;
      }
    }

    .primary {
      background-color: #e79f41;
      color: black;
      position: relative;
      box-shadow:
        0 0 0 0px #e79f41 inset,
        0 0 0 0px black inset;

      &:hover {
        background-color: #b88036 !important;
        box-shadow:
          0 0 0 4px #b88036 inset,
          0 0 0 5px black inset;
      }
    }
  }
}

.footer {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 5pt;
  z-index: 15;
  pointer-events: none;
}

.footer, .footer a {
  font-family: $font-sub;
  font-size: 10pt;
  color: #ffffff55;
}

.page {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: auto;
  width: 90vw;
  height: fit-content;
  min-height: calc(100% - 60pt);
  padding: 30pt 0;

  &[nooverflow] {
    overflow: hidden;
    width: 10vw;
    height: 10vh;
  }
  
  & > * { flex-shrink: 0; }

  .title {
    font-family: $font-header;
    font-size: 32pt;
    color: #ffffff;
  }

  .subtitle {
    font-family: $font-major;
    font-size: 18pt;
    margin-top: 10pt;
    color: #ffffffbb;
  }

  .vid-div {
    margin: 20px 0px;
    position: relative;
    width: 90vw;
    max-width: 900px;
  }

  #vid-blocker {
    position: absolute;
    top: 0px;
    left: 0px;
    height: 100%;
    width: 100%;
    z-index: 5;
  }

  #video-frame {
    width: 100%;
  }
}

.footer-lite {
  .logo {
    display: flex;
    align-items: center;
    font-family: $font-header;
    color: $color-sub !important;
    font-size: 18pt;
    text-decoration: none;
    margin-top: 20pt;
    margin-bottom: 10pt;
    opacity: .8;

    img {
      width: 32pt;
      height: 32pt;
      border-radius: 99pt;
      margin-right: 10pt;
    }
  }
}

.bot-links {
  color: $color-minor;
  font-family: $font-regular;
  font-size: 12pt;
  margin-bottom: 40pt;

  a {
    color: $color-sub;
    padding: 5pt;

    &:hover {
      color: $color-regular;
      text-decoration: underline;
    }
  }
}

.legal-links {
  color: $color-minor;
  font-family: $font-regular;
  font-size: 10pt;
  margin-bottom: 5pt;
  opacity: .4;

  a {
    color: $color-minor;
    padding: 5pt;

    &:hover {
      color: $color-regular;
      text-decoration: underline;
    }
  }
}

.pageroot {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  max-width: unset !important;
  padding: 0;
  margin: 0;
  background-color: #000;
  overflow-x: hidden;

  &::-webkit-scrollbar { visibility: hidden; }
}

@media screen and (max-width: 900px) {
  .cookies .background { filter: blur(9px); }
  .cookies .wrapper .inner { backdrop-filter: none; }
  .cookies .spacer { display: none; }
}

@media screen and (max-width: 450px) {
  .cookies { place-items: unset; }

  .cookies .background { filter: blur(12px) brightness(.4); }

  .cookies .wrapper {
    margin-top: 5vw;
    max-width: 90vw;
    height: min-content;

    .inner {
      padding: 20pt;
      margin: 0;
      border-bottom-width: 1px;
    }

    .buttons {
      flex-direction: column-reverse;

      .secondary {
        background-color: #000000dd;
      }
    }
  }
}

@media screen and (max-width: 500px) {
  .page {
    .subtitle { flex-grow: 1; }
    .vid-div { flex-grow: 1; }
  }
}

@media screen and (max-width: 380px) {
}

*::-webkit-scrollbar { width: 0; height: 0; }
*::-webkit-scrollbar-track { background-color: transparent; }
*::-webkit-scrollbar-thumb { background-color: transparent; border-radius: none; border: none; }
*::-webkit-scrollbar-thumb:hover { background-color: transparent; }

</style>
