<template>
  <div class="padfullscreen plaintext">
    <div class="cookies" @click.prevent="you_fool()" :hidden="cookiehidden">
      <div class="dimmer"></div>
      <div class="inner">
        <span class="title">Before you continue...</span>
        <div class="content" v-html="cookiecontent"></div>
        <div class="buttons" :fakeloaddone="fakeloaddone">
          <div class="primary">Accept all</div>
          <div>Manage cookies</div>
        </div>
      </div>
    </div>

    <div class="page" :nooverflow="!cookiehidden">
      <div class="title">Minecraft 2 is not real...</div>
      <div class="subtitle">But Rick Astley is! Happy april fools day!</div>
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
    </div>

    TODO:
    - freestuff branding somewhere on it
    - make it all fit nicely n stuff right
    - make it look good on mobile
    - do not include any minecraft branding on the website, only gets you in trouble

    <div class="footer">
      © 2020-2021 FreeStuff. FreeStuff isn’t endorsed by Microsoft or Mojang Studios and doesn’t reflect the views or opinions of anyone officially involved in producing or managing Minecraft. Minecraft is a registered trademark of Mojang Studios or the Microsoft Corperation. We claim no rigths to any intellectual property presented, all content belongs to their respective owners. <a href="mailto:team@freestuffbot.xyz">Contact website administrator at team@freestuffbot.xyz</a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import twemoji from 'twemoji'

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
      v.cookiecontent = 'We are using cookies for advertising purposes as well as to enrich your experience on our websites. For more information about cookies and how we use cookies on our websites, please refer to the <a href="https://privacy.microsoft.com/en-us/privacystatement">Privacy Statement</a>.'
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
			title: 'Minecraft™ 2 launch deal: 100% off for 24h!',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: "The long anticipated sequel to the most popular video game ever is finally here! For the first 24 hours after launch you can claim a free copy of the game by connecting your Microsoft™ accou..."
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
  background-image: url('https://www.minecraft.net/content/dam/minecraft/backgrounds/bg-wool-dark.png');
  z-index: 10;
  display: grid;
  place-items: center;

  &[hidden] { display: none }

  .dimmer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 0;
    margin: 0;
    background: black;
    opacity: .4;
    z-index: -1;
  }

  .inner {
    background: #e5e5ff;
    padding: 30pt;
    max-width: 30vw;
  }

  .title {
    font-family: $font-major;
    color: black;
    font-size: 16pt;
  }

  .content {
    font-family: $font-regular;
    color: #000000ee;
    font-size: 12pt;

    a {
      color: blue
    }
  }

  .buttons {
    display: flex;
    justify-content: flex-start;
    margin-top: 15pt;

    &[fakeloaddone] * {
      font-size: 11pt !important;
    }

    * {
      background: #bbbbd0;
      margin-right: 5pt;
      color: black;
      font-family: $font-major;
      font-size: 0pt;
      padding: 7pt 18pt;
      cursor: pointer;
      transition: box-shadow .1s linear, filter .1s linear;

      &:hover {
        box-shadow: 0 0 5px #00000033;
        text-decoration: underline;
      }
    }

    .primary {
      background-color: #397cd4;
      color: #ffffff;

      &:hover {
        filter: brightness(1.1);
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
  color: #ffffff33;
}

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  margin: auto;
  height: fit-content;
  min-height: 100%;

  &[nooverflow] {
    overflow: hidden;
    width: 10vw;
    height: 10vh;
  }

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
    height: 50vw;
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

</style>
