<template>
	<div id="app">
		<div id="content">
			<div id="infobox">
				<h1 v-if="!isCallback">Free Stuff <div class="bottag">BOT</div></h1>
				<h2 v-if="!isCallback">Get notifications about free games<br>right into your Discord server!</h2>
				<h1 v-if="isCallback">Looking good!</h1>
				<h2 v-if="isCallback">The bot should now appear<br>on your discord server!</h2>

				<div class="divider"></div>
				<div class="box" v-if="permissionIssue">
					<h3 style="color: #da5e7d">Warning!</h3>
					<h4>Looks like you haven't given the bot all the permissions it needs!</h4>
					<span>Please make sure the bot can read and send messages.</span>
					<span>Some themes also require external emojis.</span>
				</div>
				<div class="box" v-if="isCallback">
					<h3 style="color: #00f0a5" id="quick-setup">Quick Setup</h3>
					<h4>Step one:</h4>
					<span>Tell the bot in which channel it should send the annoucements using:</span>
					<code>@FreeStuff set channel #channel</code>
					<span>with #channel being a channel of your choice, of course.</span>
					<h4>Step two:</h4>
					<span>Try it out! You can at any time try if everything works correctly by using this command:</span>
					<code>@FreeStuff test</code>
					<span>If you get a message in the channel you've set up in step one, congratulations, your job here is done! You will from now on get news about new free games in that channel!</span>
					<br>
					<span>Scroll down a bit to see how you can customize the bot's message.</span>
					<div class="info">Ever feel lost? Type <code inline>@FreeStuff help</code> for help!</div>
				</div>
				<div class="box" v-if="isCallback">
					<h3 style="color: #00f0a5" id="quick-setup">Getting Started</h3>
					<h4>Step one:</h4>
					<span>Invite the bot to your server by <a href="https://discord.com/oauth2/authorize?redirect_uri=https%3A%2F%2Ffreestuffbot.xyz%2Fcallback&client_id=672822334641537041&permissions=445504&scope=bot&response_type=code">clicking here</a></span>
					<h4>Step two:</h4>
					<span>Tell the bot in which channel it should send the annoucements using:</span>
					<code>@FreeStuff set channel #channel</code>
					<span>with #channel being a channel of your choice, of course.</span>
					<h4>Step three:</h4>
					<span>Try it out! You can at any time try if everything works correctly by using this command:</span>
					<code>@FreeStuff test</code>
					<span>If you get a message in the channel you've set up in step one, congratulations, your job here is done! You will from now on get news about new free games in that channel!</span>
					<br>
					<span>Scroll down a bit to see how you can customize the bot's message.</span>
					<div class="info">Ever feel lost? Type <code inline>@FreeStuff help</code> for help!</div>
				</div>
				<div class="box">
					<h3 style="color: #ffaa25" id="customisation">Customisation</h3>
					<h4>Mention a role</h4>
					<span>The bot can mention a role whenever there's free stuff! Works nice with so-called self-roles other bots provide. If you want the bot to mention @everyone, check if it has the permissions to do so!</span>
					<code>@FreeStuff set mention @rolename</code>
					<h4>Apply themes</h4>
					<span>You can apply a theme that changes the look of the bot's messages:</span>
					<code>@FreeStuff set theme 1</code>
					<span>The 1 in this case stands for the theme 1. A full list of all available themes can be found <a href="/themes">here</a></span>
					<h4>Change the currency</h4>
					<span>With some themes the bot also shows the original price. You can choose to show this price either in euros or us-dollars using:</span>
					<code>@FreeStuff set currency €</code>
					<span>You can also write euro / dollar if you don't have access to these symbols.</span>
					<h4>Minimum price</h4>
					<span>Since the bot announces games in every price range but some of you might for instance not be interested in already cheap games, you can specify which type of games you want to get informed about. To set a minimum original price for instance, use:</span>
					<code>@FreeStuff set minimum price 3€</code>
					<span>... and the bot will no longer announce games cheaper than 3€. This is the default value by the way, you don't need to do anything if 3€ sounds good to you! <!-- If you want to go further and only allow certain stores, <a href="/freestuff/filter">click here</a>--></span>
					<h4>Trashy games</h4>
					<span>Games with really bad ratings or overall bad quality are marked as trash and will by default not reach your server. If you want them anyways you can enable "trash games" using:</span>
					<code>@FreeStuff set trash on</code>
					<h4>Enable auto-reaction</h4>
					<span>The bot can automatically react with the :free: emoji to each of it's messages. You can toggle this using:</span>
					<code>@FreeStuff set reaction on/off</code>
				</div>
				<div class="box">
					<h3 style="color: #cccccc" id="more">More</h3>
					<h4>Where do you get the information from?</h4>
					<span>We have spies everywhere 😉</span>
					<span>For a more technical answer to the question <a href="https://docs.google.com/document/d/1C5aRG7gVryX25N_61WtHbMduJp61qQ5j2vkU0D2ND8g" target="_blank">click here</a></span>
					<span>If you do wanna send something in that we haven't found yet, feel free to contact us over on <a href="https://discord.gg/WrnKKF8">our discord server</a></span>
					<h4>Technical Details</h4>
					<span>The bot is written in TypeScript using Discord.js and a MongoDB database. Webscraping is done using the puppeteer library and several public apis. The dashboard is built with Vue.js using Nuxt.js for server side rendering.</span>
					<h4>The Team</h4>
					<span style="margin-bottom: 5px"><a href="https://twitter.com/maanex_/">Maanex</a>: Founder & Lead Developer</span>
					<span style="margin-bottom: 5px"><a href="https://twitter.com/badosz_/">Badosz</a>: Developer</span>
					<span style="margin-bottom: 5px"><a href="https://twitter.com/TheMagicalL/">TheMagicalL</a>: Content Moderator</span>
					<span style="margin-bottom: 5px"><a href="https://twitter.com/EasyTheBG/">EasyThe</a>: Content Moderator</span>
					<span style="margin-bottom: 5px"><a href="https://twitter.com/daarendotwav/">Daaren</a>: Tude Management</span>
					<span style="margin-bottom: 5px"><a href="https://twitter.com/max_zyxt/">Zyxt</a>: Tude Management</span>
					<h4>Bottom text.</h4>
					<span><a href="/legal/privacy">FreeStuff Privacy Policy</a> - <a href="/legal/terms">FreeStuff Terms of Service</a></span>
				</div>
				<footer><a href="https://tude.ga/">Copyright &copy; 2020 Tude</a></footer>
			</div>
		</div>

    <Base />
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Base from "@/pages/Base.vue";

@Component({
	components: {
		Base
	}
})
export default class App extends Vue {

	private isCallback = false;
	private permissionIssue = false;
	private guildId = '';

	created() {
		const url = new URL(location.href);
		if (url.href.includes('callback')) this.isCallback = true;
		if (url.searchParams.has('error')) {
			switch (url.searchParams.get('error')) {
				case 'access_denied':
				default:
					location.href = '/';
					break;
			}
		} else {
			if (url.searchParams.has('permissions') && (parseInt(url.searchParams.get('permissions') as string) & 265280) != 265280) {
				this.permissionIssue = true;
			}
			if (url.searchParams.has('guild_id')) {
				this.guildId = url.searchParams.get('guild_id') + '';
			}

		}
	}

}
</script>

<style lang="scss">
.bottag {
	display: inline-block;
	color: $color-regular;
	font-family: $font-regular;
	font-size: 30px;
	padding: 3px 20px;
	border-radius: 1vh;
	transform: translateY(-5pt) !important;
	background: #6574D4;
	margin-left: 10px;
}
</style>