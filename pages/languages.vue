<template>
  <div class="pageroot">
    <section>
    	<h1>Translations</h1>

      <div class="panels one">
        <div />
        <div class="panel">
          <div class="header">
            <span component class="title">GETTING STARTED</span>
          </div>
          <span component class="desc">First, <a href="https://freestuffbot.xyz/invite" target="_blank" rel="noreferrer">invite the bot to your server</a>. Once done, you only need to provide the bot with a channel to post free games to by typing:</span>
          <cmd command="@FreeStuff set channel #free-games" copyoverride="@FreeStuff set channel #" />
          <span component class="desc">with #free-games being a channel of your choice. And that's already it. You're done here. Free games will now come flying in! Still sceptical? You can test if everything works by typing:</span>
          <cmd command="@FreeStuff test" />
        </div>
        <img src="@/assets/img/dotgrid-5x5-gray.svg" alt="" draggable="false">
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
  transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
	head() {
		return {
			title: 'FreeStuff Bot Translations',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'View our available translations. The FreeStuff Bot brings you free games right into your Discord, Telegram, or Twitter feed!'
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
