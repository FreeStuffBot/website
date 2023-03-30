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
      <div v-if="!fakepreload" class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <div class="wrapper" :data-preload="fakepreload">
        <span class="title">Before you continue...</span>
        <div class="content">
          We, our <a href="https://www.warnermediaprivacy.com/policycenter/b2c/affiliateslist/">Affiliates</a> and partners access and store data on your device to personalise, measure, and deliver content and ads, analyse use, and improve your experience.<br>
          <br>
          Click “Accept” to allow this, “Reject” to reject, or “Manage Preferences” to make more choices. For more information, see our <a href="https://policies.warnerbros.com/privacy/">Privacy Policy</a>
        </div>
        <div class="buttons" :fakeloaddone="fakeloaddone">
          <div class="btn">Manage Preferences</div>
          <div class="space" />
          <div class="btn">Reject</div>
          <div class="btn">Accept</div>
        </div>
      </div>
    </div>

    <div class="page" :nooverflow="!cookiehidden">
      <div class="title">Happy April Fools Day!</div>
      <div class="subtitle">No Hogwarts Legacy for you today, take this Rickroll instead!</div>
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
        Find the official Hogwarts Legacy website at:<a href="https://www.hogwartslegacy.com/">https://www.hogwartslegacy.com/</a>
      </div>
      <div class="legal-links">
        This website is made for entertainment purposes only and is not affiliated with Hogwarts Legacy or it's creators.
      </div>
      <div class="legal-links">
        This is not an advertisement for Hogwarts Legacy. FreeStuff does not get paied for this. (Would be cool though...)
      </div>
    </div>

    <div v-if="!cookiehidden" class="footer">
      © 2020-2023 FreeStuff. FreeStuff is not endorsed by Avalanche Software, WARNER BROS. GAMES, Wizarding World, Portkey Games or anyone else involved in producing or managing Hogwarts Legacy and doesn't reflect the views or opinions of the aforementioned. Hogwarts Legacy is a registered trademark of Warner Bros. Entertainment Inc. or one of it's affiliates. We claim no rigths to any intellectual property presented, all content belongs to their respective owners.
      <a href="https://www.hogwartslegacy.com/">Visit the official Hogwarts Legacy website at https://www.hogwartslegacy.com/</a>
      <a href="mailto:team@freestuffbot.xyz">Contact website administrator at team@freestuffbot.xyz</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import twemoji from 'twemoji'

const metaDescription = "\"When FreeStuff reached out to negotiate making Hogwarts Legacy completely free for a day we said no, like any sane person would do, but they did it anyway. [...] we have no idea how they pulled this off.\", a spokesperson exclusively told BBC last tuesday."

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
    }, 1000, this)

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
			title: 'Hogwarts Legacy exclusive -100% off deal (24h)',
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
          content: 'Hogwarts Legacy -100% off promotion'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Hogwarts Legacy -100% off promotion'
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'Hogwarts Legacy -100% off promotion'
        },
        {
          hid: 'title',
          property: 'title',
          content: 'Hogwarts Legacy -100% off promotion'
        },
        {
          hid: 'application-name',
          property: 'application-name',
          content: 'Hogwarts Legacy -100% off promotion'
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

  &[hidden] { display: none }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    background-image: url('/assets/img/hogwarts-backpage.webp');
    background-size: cover;
    background-position: center;
    z-index: -1;
  }

  .wrapper {
    position: absolute;
    top: 10vh;
    left: 50vw;
    background: #ffffff;
    width: 90%;
    max-width: 500pt;
    padding: 15pt;
    border-radius: 3px;
    transform: translate(-50%, 0);
    border: 1px solid black;
    outline: 1px solid white;
    transition:
      opacity .5s ease-out,
      transform .5s ease-out;

    &:not([data-preload]) {
      opacity: 0;
      transform: translate(-50%, -20px);
    }
  }

  .title {
    font-family: $font-major;
    color: #4168bd;
    font-size: 13pt;
    text-transform: uppercase;
  }

  .content {
    font-family: $font-regular;
    color: #444444;
    font-size: 9pt;

    a {
      color: #26538d !important;
      text-decoration: underline !important;
    }
  }

  .buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 15pt;
    gap: 10pt;

    &:not([fakeloaddone]) * {
      font-size: 0pt !important;
    }

    * {
      font-family: $font-major;
      font-size: 8pt;
      padding: 12pt 27pt;
      color: #ffffff;
      border-radius: 2px;
      transition: background-color .1s ease-out;
    }

    .btn {
      background: #26538d;
      cursor: pointer;

      &:hover {
        background: #4d83cb;
      }
    }

    .space {
      flex-grow: 1;
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

@media screen and (max-width: 550px) {
  .cookies { place-items: unset; }

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



.lds-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: .5;
  display: inline-block;
  position: relative;
  scale: .5;
  width: 80px;
  height: 80px;
}
.lds-spinner div {
  transform-origin: 40px 40px;
  animation: lds-spinner 1.2s linear infinite;
}
.lds-spinner div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: #fff;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}


</style>
