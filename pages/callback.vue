<template>
  <div class="pageroot">
    <section>
    	<h1 class="center">Looking good!</h1>
      <h2 sub class="center">The&nbsp;bot should now appear on your&nbsp;server!</h2>

      <div class="panels one" v-if="permissionIssue">
        <div />
        <div class="panel">
          <div class="header">
            <div class="icon exclamation">
              <ExclamationIcon />
            </div>
            <span component class="title">WARNING!</span>
          </div>
          <span component class="desc">Looks like you haven't given the bot all the permissions it needs! <b>Please make sure the bot can at least read and send messages.</b> Some themes also require external emojis.</span>
        </div>
      </div>
      <div class="panels one">
        <div />
        <div class="panel">
          <div class="header">
            <span component class="title">QUICK SETUP:</span>
          </div>
          <span component class="desc"><b>Step one:</b> Tell the bot which channel it should send the games to:</span>
          <cmd command="@FreeStuff set channel #free-games" />
          <span component class="desc">with #free-games being a channel of your choice.</span>
          <span component class="desc"><b>Step two:</b> Try it out! You can at any time try if everything works correctly by using this command:</span>
          <cmd command="@FreeStuff test" />
          <span component class="desc">If you get a message in the channel you've set up in step one, congratulations, your job here is done! You will from now on get news about new free games in that channel!</span>
        </div>
        <img src="@/assets/img/dotgrid-5x5-gray.svg" alt="" draggable="false">
      </div>
      <div class="panels one">
        <div />
        <div class="panel">
          <div class="header">
            <span component class="title">FREE GAMES LIST</span>
          </div>
          <span component class="desc">If you don't want automated announcements and prefer to just check current free games here and there, you can always use this command to get a list:</span>
          <cmd command="@FreeStuff free" />
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
          <cmd command="@FreeStuff set stores" />
          <span component class="desc">Default: all stores enabled</span>
        </div>
        <div class="panel">
          <div class="header">
            <div class="icon poop">
              <PoopIcon />
            </div>
            <span component class="title">BAD QUALITY</span>
          </div>
          <span component class="desc">Sometimes really cheap made games are getting a 100% discount for more exposure. We flag those games as "trashy" so you can filter them out easily. Use this command to toggle the filter:</span>
          <cmd command="@FreeStuff set trash on/off" />
          <span component class="desc">Default: trash games are filtered out</span>
        </div>
        <div class="panel">
          <div class="header">
            <div class="icon dollar">
              <DollarIcon />
            </div>
            <span component class="title">MINIUM PRICE</span>
          </div>
          <span component class="desc">We know that some of you are only behind the big fish in the world of free games. That's why we allow you to set a minimum price a game had to have before the discount in order to be announced on your server.</span>
          <cmd command="@FreeStuff set minimum price $3" />
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
          <span component class="desc">English is not your primary language? Well by looking at the amount of typos on this website you could guess that it's not ours either. That's why translating the bot in as many languages as possible always had a huge priority for us. To get started using one of our many translations, type:</span>
          <cmd command="@FreeStuff set language" />
          <span component class="desc">Your language is not yet supported? <a href="https://freestuffbot.xyz/o/translate" target="_blank" rel="noreferrer">Hit us up!</a></span>
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
          <cmd command="@FreeStuff set mention @rolename" />
          <span component class="desc">Run the command without a role to disable mentions.</span>
        </div>
        <div class="panel">
          <div class="header">
            <div class="icon dollar">
              <DollarIcon />
            </div>
            <span component class="title">CURRENCY</span>
          </div>
          <span component class="desc">Euro? Dollar? Euro? Dollar? Euro? Dollar? When the bot announces a free game it will also show the original price the game had before it became free. To switch between USD and Euro use:</span>
          <cmd command="@FreeStuff set currency euro/dollar" />
          <span component class="desc">The default currency is determined by your server's region.</span>
        </div>
        <div class="panel">
          <div class="header">
            <div class="icon react">
              <ReactIcon />
            </div>
            <span component class="title">AUTO REACTION</span>
          </div>
          <span component class="desc">If you as a server owner would like to see more engagement from your server members, you can encourage reactions by letting the bot react with the :free: emoji to each of it's messages.</span>
          <cmd command="@FreeStuff set reaction on/off" />
          <span component class="desc">People are more likely to add their own reactions if they're not the first one to react.</span>
        </div>
      </div>
		</section>
    <section class="vert">
      <div class="divider dotted vertical"></div>
    	<h2 h1>Ever feel lost?</h2>
      <div class="pre-footer">
        <cmd command="@FreeStuff help" />
        <SparkIcon />
        <SparkIcon />
        <SparkIcon />
      </div>
		</section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
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
const ExclamationIcon =  require('~/assets/icons/exclamation.svg?inline')

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
    ExclamationIcon,
  },
  data() {
    return {
      permissionIssue: false,
      guildId: ''
    }
  },
  mounted() {
    const query = this.$route.query;
    if (query['permissions'] && (parseInt(query['permissions'] as string) & 265280) != 265280) {
      this.permissionIssue = true
    }
    if (query['guild_id']) {
      this.guildId = query['guild_id'] + ''
    }
  },
  transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
	head() {
		return {
			title: 'Welcome to FreeStuff!',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'Thank you for choosing FreeStuff as your number one source of free games! Here is a small overview on how to get started.'
				}
			]
		}
	}
})
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

  h1 { margin: 20pt 0 0pt 0 !important; }
  h2[sub] { margin: 0 0 80pt 0 !important; }
  h2:not([sub]) { margin: 40pt 0 20pt 0 !important; }

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
      &.exclamation {
        background-color: #db4f4a60;
        svg { color: #e68a73; transform: rotate(0deg); }
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

        b {
          color: $color-major;
          font-family: $font-major;
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
      left: -40%;
    }
    &:nth-of-type(2) {
      width: 15pt;
      color: #41CCA4;
      top: -15%;
      right: -30%;
    }
    &:nth-of-type(3) {
      width: 10pt;
      color: #8441CC;
      left: -20%;
      bottom: -60%;
    }
  }
}
</style>
