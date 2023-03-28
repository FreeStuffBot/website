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
      <div class="popup">
        <div class="inner">
          <span class="title">Before you continue...</span>
          <div class="content" v-html="cookiecontent"></div>
          <div class="buttons" :fakeloaddone="fakeloaddone">
            <div class="primary">Accept all</div>
            <div class="secondary">Manage cookies</div>
          </div>
        </div>
        <svg viewport="0 0 20 20" width="15pt" height="15pt">
          <g><path d="M0,0l20,20l0,-20l-20,0Z" fill="black" /></g>
        </svg>
        <div class="filler" />
      </div>
    </div>

    <div class="page" :nooverflow="!cookiehidden">
      <div class="title">You're too late!</div>
      <div class="subtitle">This was an april fools joke, no Cyberpunk for you ;)</div>
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
        <a href="https://freestuffbot.xyz/invite">Invite</a>
        &bull;
        <a href="https://freestuffbot.xyz/discord">Discord</a>
      </div>
    </div>

    <div v-if="!cookiehidden" class="footer">
      © 2020-2021 FreeStuff. FreeStuff isn’t endorsed by CD Project Red and doesn’t reflect the views or opinions of anyone officially involved in producing or managing Cyberpunk. Cyberpunk is a registered trademark of CD Project Red or one of it's affiliates. We claim no rigths to any intellectual property presented, all content belongs to their respective owners. <a href="mailto:team@freestuffbot.xyz">Contact website administrator at team@freestuffbot.xyz</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import twemoji from 'twemoji'

const metaDescription = "\"we figured since no-one is buying the game anymore, we might as well just give it away for free\", a spokesperson exclusively told the FreeStuff team last saturday."

export default Vue.extend({
  data () {
    return {
      cookiecontent: '',
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
      v.cookiecontent = 'We are using cookies for advertising purposes as well as to enrich your experience on our websites. For more information about cookies and how we use cookies on our websites, please refer to the <a href="https://regulations.cdprojektred.com/privacy_policy" class="cyberpunk--a">Privacy Policy</a>.'
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
			title: 'Cyberpunk exclusive -100% off deal (24h)',
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
          content: 'Cyberpunk -100% off promotion'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Cyberpunk -100% off promotion'
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: 'Cyberpunk -100% off promotion'
        },
        {
          hid: 'title',
          property: 'title',
          content: 'Cyberpunk -100% off promotion'
        },
        {
          hid: 'application-name',
          property: 'application-name',
          content: 'Cyberpunk -100% off promotion'
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
  display: grid;
  place-items: center;

  &[hidden] { display: none }

  .background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    background-image: url('/assets/img/cyberpunk-backpage.png');
    background-size: cover;
    background-position: 50% 0;
    filter: blur(10px);
    transform: scale(1.05);
    opacity: .4;
    z-index: -1;
  }

  .popup {
    max-width: 550px;
    display: grid;
    grid-template: auto 15pt / 15pt 1fr;
    grid-template-areas: "inner inner" "svg filler";
  }

  svg {
    grid-area: svg;
    width: 15pt;
    height: 15pt;
  }

  .filler {
    grid-area: filler;
    background: #000;
  }

  .inner {
    background: #000;
    padding: 40pt 40pt 25pt 40pt;
    grid-area: inner;
    box-shadow: -1pt 0 0 5pt inset #000
              , -3pt 0 0 5pt inset #02d7f288;
  }

  .title {
    font-family: $font-header;
    color: #fd0130;
    font-size: 18pt;
    text-transform: uppercase;
  }

  .content {
    font-family: $font-regular;
    color: #ffffffee;
    font-size: 12pt;
  }

  .buttons {
    display: flex;
    justify-content: flex-start;
    margin-top: 15pt;

    &[fakeloaddone] * {
      font-size: 12pt !important;
    }

    * {
      background: black;
      margin-right: 5pt;
      font-family: $font-header;
      font-size: 0pt;
      padding: 12pt 27pt;
      cursor: pointer;
      transition: background-color .1s ease-out
                , color .1s ease-out;
    }

    .secondary {
      box-shadow: 0 0 0 1px inset #ffffffbb;
      color: #ffffffbb;

      &:hover {
        color: black;
        background-color: #ffffffbb !important;
      }
    }

    .primary {
      background-color: #fd0130;
      color: black;
      position: relative;

      &:hover {
        background-color: #02d7f2 !important;
        &::after { border-top: 12px solid #02d7f2; }
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -12px;
        left: 0;
        width: 12px;
        height: 12px;
        border-left: 12px solid #000;
        border-top: 12px solid #fd0130;
        transition: all .1s ease-out;
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
  margin-bottom: 20pt;

  a {
    color: $color-sub;
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

@media screen and (max-width: 600px) {
  .cookies .popup {
    max-width: 90vw;
    
    .inner { box-shadow: none; }

    .buttons {
      flex-direction: column-reverse;

      * { margin-top: 10pt; }
    }
  }
}

@media screen and (max-width: 380px) {
  .cookies {
    place-items: unset;

    .popup { max-width: 100vw; }
  }
}

@media screen and (max-width: 500px) {
  .page {
    .subtitle { flex-grow: 1; }
    .vid-div { flex-grow: 1; }
  }
}

</style>
<style>
a.cyberpunk--a {
  color: lightskyblue !important;
}
</style>
