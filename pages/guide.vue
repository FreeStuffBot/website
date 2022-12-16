<template>
  <div class="pageroot">
    <section>
    	<h1>Guide</h1>

      <div class="panels one">
        <div />
        <div class="panel">
          <div class="header">
            <span component class="title">GETTING STARTED</span>
          </div>
          <span component class="desc">First, <a href="https://freestuffbot.xyz/invite" target="_blank" rel="noreferrer">invite the bot to your server</a>. Once done, you only need to provide the bot with a channel to post free games to by going to:</span>
          <cmd command="/settings → Change Channel" copyoverride="/settings" />
          <span component class="desc">And that's already it. You're done here. Free games will now come flying in! Still sceptical? You can test if everything works by going to:</span>
          <cmd command="/settings → More → Send Test Message" copyoverride="/settings" />
          <span component class="desc">Also in case you want the currently free games sent in the channel you've set it right now, the "Re-send Messages" button is for you!</span>
          <cmd command="/settings → More → Re-send Messages" copyoverride="/settings" />
        </div>
        <img src="@/assets/img/dotgrid-5x5-gray.svg" alt="" draggable="false">
      </div>
      <div class="panels one">
        <div />
        <div class="panel">
          <div class="header">
            <span component class="title">FREE GAMES LIST</span>
          </div>
          <span component class="desc">Regardless of whether or not you set the bot up like described above, you can always run this command to get a list of all games currently free:</span>
          <cmd command="/free" />
        </div>
      </div>
		</section>
    <section>
    	<h2 h1>Filter Options</h2>

      <div class="panels three">
        <div class="panel">
          <div class="header">
            <div class="icon steamshield">
              <SteamShieldIcon />
            </div>
            <span component class="title">STORES</span>
          </div>
          <span component class="desc">While some people might wanna get every single freebie out there, there are others who only want to recieve free games from one specify store or would like to not get deals from that one platform. If you're one of them, get started using:</span>
          <cmd command="/settings → Filter Settings" copyoverride="/settings" />
          <span component class="desc">Default: most stores enabled</span>
        </div>
        <div class="panel">
          <div class="header">
            <div class="icon poop">
              <PoopIcon />
            </div>
            <span component class="title">BAD QUALITY</span>
          </div>
          <span component class="desc">Sometimes really cheap made games are getting a 100% discount for more exposure. We flag those games as "trashy" so you can filter them out easily. Use this command to toggle the filter:</span>
          <cmd command="/settings → Filter Settings" copyoverride="/settings" />
          <span component class="desc">Default: trash games are filtered out</span>
        </div>
        <div class="panel">
          <div class="header">
            <div class="icon dollar">
              <DollarIcon />
            </div>
            <span component class="title">MINIMUM PRICE</span>
          </div>
          <span component class="desc">We know that some of you are only behind the big fish in the world of free games. That's why we allow you to set a minimum price a game had to have before the discount in order to be announced on your server.</span>
          <cmd command="/settings → Filter Settings" copyoverride="/settings" />
          <span component class="desc">Default: €3/$3</span>
        </div>
      </div>
		</section>
    <section>
    	<h2 h1>Appearance</h2>

      <div class="panels two">
        <div class="panel">
          <div class="header">
            <div class="icon brush">
              <BrushIcon />
            </div>
            <span component class="title">THEMES</span>
          </div>
          <span component class="desc no-grow">Themes allow you to change the appearance of the bot's messages. We have a large variety of themes available to match the look and feel of your server. To view all available themes and how to apply them, click the button below:</span>
          <nuxt-link to="/themes" btn>Browse Themes</nuxt-link>
          <div style="flex-grow: 1" />
        </div>
        <div class="panel">
          <div class="header">
            <div class="icon translate">
              <TranslateIcon />
            </div>
            <span component class="title">LANGUAGE</span>
          </div>
          <span component class="desc" v-html="`English is not your primary language? No worries, we got a good amount of translations to choose from. Run the command below to get started:`" />
          <cmd command="/settings → Language" copyoverride="/settings" />
        </div>
      </div>
      <div class="panels three">
        <div class="panel">
          <div class="header">
            <div class="icon atsign">
              <AtsignIcon />
            </div>
            <span component class="title">ROLE MENTION</span>
          </div>
          <span component class="desc">While this setting doesn't directly impact the appearance of the annoucements it easily one of the most useful settings. To never miss out you can provide the bot with a role to ping for each freebie by typing:</span>
          <cmd command="/settings → Mention a role" copyoverride="/settings" />
          <span component class="desc">The bot does not ping anyone by default.</span>
        </div>
        <div class="panel">
          <div class="header">
            <div class="icon dollar">
              <DollarIcon />
            </div>
            <span component class="title">CURRENCY</span>
          </div>
          <span component class="desc">Euro? Dollar? Euro? Dollar? Euro? Dollar? When the bot announces a free game it will also show the original price the game had before it became free. To switch between USD and Euro use:</span>
          <cmd command="/settings → Display Settings" copyoverride="/settings" />
          <span component class="desc">Some currencies might not be 100% accurate.</span>
        </div>
        <div class="panel">
          <div class="header">
            <div class="icon react">
              <ReactIcon />
            </div>
            <span component class="title">AUTO REACTION</span>
          </div>
          <span component class="desc">If you as a server owner would like to see more engagement from your server members, you can encourage reactions by letting the bot react with the :free: emoji to each of it's announcement messages.</span>
          <cmd command="Currently disabled :(" copyoverride="never gonna give you up" />
          <span component class="desc">Encourage people to react and engage.</span>
        </div>
      </div>
		</section>
    <section class="vert">
      <div class="divider dotted vertical"></div>
    	<h2 h1>Ever feel lost?</h2>
      <div class="pre-footer">
        <cmd command="/help" />
        <SparkIcon />
        <SparkIcon />
        <SparkIcon />
      </div>
		</section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import twemoji from 'twemoji'
import cmd from '~/components/ChatCommand.vue'
const BullhornIcon =  require('~/assets/icons/bullhorn.svg?inline')
const ListIcon =  require('~/assets/icons/list.svg?inline')
const PoopIcon =  require('~/assets/icons/poop.svg?inline')
const SteamShieldIcon =  require('~/assets/icons/steamshield.svg?inline')
const DollarIcon =  require('~/assets/icons/dollar.svg?inline')
const TranslateIcon =  require('~/assets/icons/translate.svg?inline')
const ReactIcon =  require('~/assets/icons/react.svg?inline')
const AtsignIcon =  require('~/assets/icons/atsign.svg?inline')
const BrushIcon =  require('~/assets/icons/brush.svg?inline')
const SparkIcon =  require('~/assets/icons/spark.svg?inline')

export default Vue.extend({
  components: {
    cmd,
    BullhornIcon,
    ListIcon,
    PoopIcon,
    SteamShieldIcon,
    DollarIcon,
    TranslateIcon,
    ReactIcon,
    AtsignIcon,
    BrushIcon,
    SparkIcon,
  },
  data() {
    return {
      languageCta: ''
    }
  },
  async mounted() {
    if (true /* TODO remove for dynamic language upsell */) return
    if (!process.client) return

    try {
      const navigator = window['navigator'] || null
      if (!navigator || /^en\b/.test(navigator.language)) {
        const { data } = await axios.get('https://ipapi.co/json/')
        const langs = data.languages?.split(',') ?? [ data.country_code ]
        for (const lang of langs) {
          const text = await langDisplayText(lang, this.$store.state.data.flagEmojis)
          if (!text) continue
          this.languageCta = text
          return
        }
      } else {
        this.languageCta = await langDisplayText(navigator.language, this.$store.state.data.flagEmojis) || this.languageCta
      }
    } catch (err) {}
  },
  fetchOnServer: false,
  transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
	head() {
		return {
			title: 'FreeStuff Bot Guide',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Who says no to free games? We sure don\'t! And for you to never miss out either, we created a discord bot to always keep you up to date!'
				}
			]
		}
	}
})

let languages = [] as any[]
async function langs() {
  if (languages.length)
    return languages

  const { data } = await axios.get('https://management.freestuffbot.xyz/pubdata/e02d7127-9804-4d72-91a5-d3a3ae1e23bd')
  if (data)
    languages = data
  return languages
}

async function langDisplayText(langcode: string, flagEmojis: any): Promise<string> {
  if (/^en\b/.test(langcode)) return ''
  const lang = await getBestFit(langcode)
  if (!lang) return ''
  const name = lang.lang_name_en.toLowerCase()
  const aORan = /^[aeiou]/.test(name) ? 'an' : 'a'
  const nameCap = name.toUpperCase()[0] + name.substr(1)
  const flag = twemoji.parse(flagEmojis[lang.lang_flag_emoji.split(':')[1]])
  return `We even have ${aORan} ${nameCap} ${flag} one!`
}

async function getBestFit(langcode: string): Promise<any> {
  const candidates = [] as any[]
  await langs()

  for (const c of languages) {
    if (c._id.includes(langcode))
      candidates.push(c)
  }
  if (candidates.length)
    return getMostPopular(candidates)

  for (const c of languages) {
    if (c.lang_flag_emoji.includes(langcode.split('-')[0].split('_')[0]))
      candidates.push(c)
  }
  if (candidates.length)
    return getMostPopular(candidates)

  for (const c of languages) {
    if (c.lang_name_en.includes(langcode.split('-')[0].split('_')[0]))
      candidates.push(c)
  }
  if (candidates.length)
    return getMostPopular(candidates)

  return null
}

function getMostPopular(langs: any[]): any {
  return langs.length === 1
    ? langs[0]
    : langs.sort((a, b) => a._ranking - b._ranking)[0]
}
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

.pageroot {
  margin-top: 15vh;
}

section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 30pt 0;

  &.vert {
    flex-direction: column;
    align-items: center;

    h2 { margin-top: 0 !important; }
  }

  h1 { margin: 20pt 0 20pt 0 !important; }
  h2 { margin: 40pt 0 20pt 0 !important; }

  a {
    color: #da5e7d;
    border-bottom: 3px solid #da5e7d33;

    &:hover { border-bottom: 3px solid #da5e7d; }
  }
}

.panels {
  display: grid;
  column-gap: 1vw;
  row-gap: 5vw;
  position: relative;
  margin-bottom: 1vw;

  &.one {
    grid-template-columns: 1fr 2fr 1fr;
    @media (max-width: 1000px) { grid-template-columns: 0 1fr 0; column-gap: 0; }
  }
  &.two {
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1000px) { grid-template-columns: 1fr; row-gap: 1vw }
  }
  &.three {
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 800px) { grid-template-columns: 1fr; row-gap: 1vw }
  }
  &.four {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    @media (max-width: 970px) { grid-template-columns: 1fr 1fr; row-gap: 1vw; }
    @media (max-width: 430px) { grid-template-columns: 1fr; }
  }

  .panel {
    display: flex;
    flex-direction: column;
    column-gap: 20px;
    background-color: $bg-bright;
    border-radius: $component-border-radius;
    box-shadow: 0 0 5px $backpage;
    padding: $component-margin*2;
    z-index: 2;

    .header {
      display: flex;
      justify-content: left;
      align-items: center;
    }

    .icon {
      width: 50px;
      height: 50px;
      flex-grow: 0;
      flex-shrink: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 9999px;
      margin-right: 15px;
      
      &.bullhorn {
        background-color: #c4a33960;
        svg { color: #ebe37a; transform: rotate(-10deg); }
      }
      &.list {
        background-color: #39a4c460;
        svg { color: #7adaeb; transform: rotate(-3deg); }
      }
      &.poop {
        background-color: #96632860;
        svg { color: #d4ae75; transform: rotate(0deg); }
      }
      &.steamshield {
        background-color: #806ec060;
        svg { color: #a5e6f8; transform: rotate(0deg); }
      }
      &.dollar {
        background-color: #3a9b6660;
        svg { color: #9cca60; transform: rotate(0deg); }
      }
      &.translate {
        background-color: #673a9b60;
        svg { color: #cc8fd1; transform: rotate(0deg); }
      }
      &.react {
        background-color: #5a637560;
        svg { color: #759bee; transform: rotate(0deg); }
      }
      &.atsign {
        background-color: #db4f4a60;
        svg { color: #e68a73; transform: rotate(0deg); }
      }
      &.brush {
        background-color: #c7a55a60;
        svg { color: #f5c952; transform: rotate(0deg); }
      }

      svg { width: 25px; }
    }

    span {
      display: block;
      text-align: left;

      &.title {
        font-family: $font-header;
        font-size: 15pt;
        color: $color-header;
      }

      &.desc {
        font-family: $font-regular;
        font-size: 11pt;
        color: $color-sub;
        flex-grow: 1;
        margin: $component-margin 0;

        &:last-child {
          margin: $component-margin 0 0 0;
          &:not(.no-grow) { flex-grow: 0; }
        }
      }
    }

    a[btn] {
      display: inline-block;
      width: fit-content;
      margin: 0;
      background-color: $primary-gold-trans;
      font-size: 12pt;
      font-family: $font-major;
      color: #000000ee;
      padding: 10pt 20pt;
      box-shadow: none;
      background-image: none !important;
      border-bottom: none;
      box-shadow: 0 0px 0px #00000000;
      transition: background-color .3s ease
                , box-shadow .3s ease;
      will-change: background-color, box-shadow;

      &:hover {
        background-color: $primary-gold;
        box-shadow: 0 2px 7px #00000033;
      }
    }
  }

  & > img {
    position: absolute;
    right: -37%;
    bottom: -70%;
    width: 220px;
    height: 220px;
    transform: translateZ(-2px) scale(1.2);
    z-index: -1;
    opacity: .2;
  }
}

.pre-footer {
  margin-bottom: 20pt;
  position: relative;

  svg {
    position: absolute;
   
    &:nth-of-type(1) {
      width: 20pt;
      color: #FFBF00;
      top: -40%;
      left: -60%;
    }
    &:nth-of-type(2) {
      width: 15pt;
      color: #41CCA4;
      top: -15%;
      right: -45%;
    }
    &:nth-of-type(3) {
      width: 10pt;
      color: #8441CC;
      left: -30%;
      bottom: -60%;
    }
  }
}
</style>
