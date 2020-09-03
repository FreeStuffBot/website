<template>
  <div>
    <div id="infobox">
      <h1>Troubleshooting</h1>
      <h2>FreeStuff Bot</h2>

      <div class="divider"></div>
      <div class="box">
        <h3 style="color: #7fcf42">Table of contents</h3>
        <h4>Please click on whatever describes your issue the best.</h4>
        <span>If you don't find anything that helps here, you can visit us on our Discord server for support. <a href="https://discord.gg/WrnKKF8">Click here to join</a></span>
        <br>
        <br>
        <span><a href="#noresponse">The bot does not respond to my messages</a></span>
        <br>
        <span><a href="#nopermission">The bot only says that it doesn't have permissions</a></span>
      </div>
      <div class="box">
        <h3 id="noresponse" style="color: #cccccc">Bot does not respond</h3>
        <h4>99% of the time is this a permission issue.</h4>
        <span>The other 1% you can't do anything about it except to wait a bit and try it again later. Try the steps below though before telling yourself that your case is one of the 1%!</span>
        <h4>Checking bot's permissions</h4>
        <span>The very minimum permissions the bot should have are Read as well as Send Messages. When adding the bot to your server you most likely have already given the bot these permissions. Since the bot does not respond though, the channel you're trying to use the bot in might have overwritten these permissions. You got two options now:</span>
        <h4>Simple: Try a different channel</h4>
        <span>Permissions can be confusing, especially with multiple roles and every channel having it's own overrides, etc. The easy way out is to try using a channel everyone can talk in, something like #general. If others can talk here, the bot probably can as well. If this doesn't solve the issue, you'll have to go full Discord-Admin-Mode:</span>
        <h4>Not necessarily simple: Updating permissions</h4>
        <span>Double check the channel's permission overrides and the bots roles. If you were not the one to set up all the permissions in your server, might even consider talking to them for help. I know, crazy idea.</span>
        <h4>And if it all fails,</h4>
        <span>you can join our Discord for one to one human help though we probably can't do anything else than tell you what you've already read above. You might also just be very unlucky and the bot currently has issues, sorry for the inconvenience if that's the case. Just relax a bit and try it again at a later point in time. You've lived multiple years without this bot now, you can wait another hour or two!</span>
      </div>
      <div class="box">
        <h3 id="nopermission" style="color: #cccccc">Bot says: No permission</h3>
        <h4>That means the bot doesn't have permission</h4>
        <span>This text is yet to be written, hold on!</span>
      </div>
      <footer><a href="https://tude.ga/">Copyright &copy; 2020 Tude</a></footer>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
})
</script>

<style scoped lang="scss">
</style>