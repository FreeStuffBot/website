<template>
  <div class="pageroot">
    <section>
    	<h1>Guide</h1>

      <div class="panels one">
        <div />
        <div class="panel">
          <span component class="title">GETTING STARTED</span>
          <span component class="desc">First, <a href="https://freestuffbot.xyz/invite" target="_blank" rel="noreferrer">invite the bot to your server</a>. Once done, you only need to provide the bot with a channel to post free games to by typing:</span>
          <cmd command="@FreeStuff set channel #free-games" />
          <span component class="desc">with #free-games being a channel of your choice, of course. And that's already it. You're done here. Free games will now come flying in! Still sceptical? You can test if everything works by typing:</span>
          <cmd command="@FreeStuff test" />
          <span component class="desc">Or if you don't want announcements and just check current free games here and there, you can always use this command to get a list:</span>
          <cmd command="@FreeStuff free" />
        </div>
        <img src="@/assets/img/dotgrid-5x5-gray.svg" alt="" draggable="false">
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
          <nuxt-link to="/themes">Browse Themes</nuxt-link>
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
    <section>
    	<h2 h1>Other Commands</h2>
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
  },
  transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
	head() {
		return {
			title: 'About FreeStuff',
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

  h1, h2 {
    margin-bottom: 20pt;
  }

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
    @media (max-width: 1000px) { grid-template-columns: 1fr; }
  }
  &.three {
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 800px) { grid-template-columns: 1fr; }
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
</style>
