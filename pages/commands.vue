<template>
  <div class="pageroot">
    <section>
    	<h1>Setup</h1>

      <div class="panels one">
        <div />
        <div class="panel noicon">
          <span component class="title">GETTING STARTED</span>
          <span component class="desc">First, <a href="https://freestuffbot.xyz/invite" target="_blank" rel="noreferrer">invite the bot to your server</a>. Once done, you only need to provide the bot with a channel to post free games to by typing</span>
          <cmd command="@FreeStuff set channel #free-games" />
          <span component class="desc desc2">with #free-games being a channel of your choice, of course. And that's already it. You're done here. Still sceptical? You can test if everything works by typing</span>
          <cmd command="@FreeStuff test" class="cmd2" />
        </div>
        <img src="@/assets/img/dotgrid-5x5-gray.svg" alt="" draggable="false">
      </div>
		</section>
    <section>
    	<h2 h1>Filter Options</h2>

      <div class="panels">
        <div class="panel">
          <div class="icon bullhorn">
            <BullhornIcon />
          </div>
          <span component class="title">NEVER MISS A SINGLE FREEBIE</span>
          <span component class="desc">Provide the bot with a channel to use and it will send a message there each time a new game gets free. Yes, it really only takes one command to set it up!</span>
          <cmd command="@FreeStuff set channel #free-games" />
        </div>
        <div class="panel">
          <div class="icon list">
            <ListIcon />
          </div>
          <span component class="title">LIST ALL CURRENT FREE GAMES</span>
          <span component class="desc">Getting paranoid that you missed a discount? The bot also has a very convenient and easy to use way of listing all current freebies. Try it out for yourself:</span>
          <cmd command="@FreeStuff free" />
        </div>
      </div>
		</section>
    <section>
    	<h2 h1>Appearance</h2>
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

export default Vue.extend({
  components: {
    cmd,
    BullhornIcon,
    ListIcon
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
  grid-template-columns: 1fr 1fr;
  column-gap: 1vw;
  row-gap: 5vw;
  position: relative;

  @media (max-width: 1000px) { grid-template-columns: 1fr; }

  &.one { grid-template-columns: 1fr 2fr 1fr; }
  &.four { grid-template-columns: 1fr 1fr 1fr 1fr; }

  .panel {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto auto auto;
    grid-template-areas: "icon title" "icon desc" "icon cmd" "icon desc2" "icon cmd2";
    column-gap: 20px;
    background-color: $bg-bright;
    border-radius: $component-border-radius;
    box-shadow: 0 0 5px $backpage;
    padding: $component-margin*2;
    z-index: 2;

    &.noicon {
      grid-template-columns: 1fr !important;
      column-gap: 20px !important;
      grid-template-areas: "title" "desc" "cmd" "desc2" "cmd2" !important;
    }

    @media (max-width: 570px) { grid-template-areas: "icon title" "icon desc" "cmd cmd" "desc2 desc2" "cmd2 cmd2"; }
    @media (max-width: 380px) { grid-template-areas: "title icon" "desc desc" "cmd cmd" "desc2 desc2" "cmd2 cmd2"; }

    .desc2 { grid-area: desc2 !important; }
    .cmd2 { grid-area: cmd2 !important; }

    .icon {
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 9999px;
      grid-area: icon;
      
      &.bullhorn {
        background-color: #c4a33960;
        svg {
          color: #ebe37a;
          transform: rotate(-10deg);
        }
      }
      
      &.list {
        background-color: #39a4c460;
        svg {
          color: #7adaeb;
          transform: rotate(-3deg);
        }
      }

      svg { width: 40px; }
    }

    span {
      display: block;
      text-align: left;

      &.title {
        font-family: $font-header;
        font-size: 15pt;
        color: $color-header;
        grid-area: title;
      }

      &.desc {
        font-family: $font-regular;
        font-size: 11pt;
        color: $color-sub;
        flex-grow: 1;
        margin: $component-margin 0;
        grid-area: desc;
      }
    }

    .chat-command-wrapper { grid-area: cmd; }
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
