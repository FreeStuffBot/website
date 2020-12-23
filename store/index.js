export const state = () => ({
  donors: [
    {
      name: 'Bartosz Król',
      emoji: '🤍'
    },
    {
      name: 'Hadi',
      emoji: Math.random() > .5 ? '🍆' : '🍑'
    },
    {
      name: 'TacTwo',
      emoji: '🧙‍♂️'
    },
    {
      name: 'Andreas',
      emoji: '🦦'
    },
    {
      name: 'mand',
      emoji: '🐢'
    }
  ],
  faqs: [
    {
      title: 'Why does the bot not respond to my messages?',
      answer: `Sounds like a permission issue! By default you should have given the bot all of the permissions it need when you added it to the server. Since the bot doesn't respond though, the channel you're trying to use it in may have overwritten those permissions. In simpler words: <b>try using the bot in a different channel</b>; if a normal user can type there, the bot should be able to do so too. If that doesn't solve it, you only got one option now: Go full out Discord-Admin-Mode. <b>Doublecheck every permission setting you can find</b>, both for the bot's roles and the channel. If you were not the one to set up the permissions in your server, maybe even consider asking them for help. Crazy idea, I know.`
    },
    {
      title: 'Why do the bots messages look different than on that other Discord server?',
      answer: `The bot has a large variety of customisation options available that change the appearance of the bot's messages. Make sure to check out the available <a href="/themes">Themes</a> and other <a href="/guide">Options</a>!`
    },
    {
      title: "The bot didn't announce a game that's currently free!",
      answer: `This can have a multitude of reasons. Let's run them through real quick:<br>&bull; We don't know about it yet. Go <a href="/discord" target="_blank">join our Discord Server</a> to let us know!<br>&bull; The game is always free, not 100% off. In that case we will not announce it.<br>&bull; The game got filtered out and didn't reach your server. If you've seen it announced on a different server but your's got left behind, please take a look at our <a href="/guide">filter options</a> and adjust them to your likings!`
    },
    {
      title: "Why is language xyz not supported?",
      answer: `That's because we haven't found a translator for that language yet! If you would like to translate it into your language, <a href="/o/translating" target="_blank">hit us up</a> and get your name on the team page :)`
    },
    {
      title: "I have a question that's not answered above, where can I ask?",
      answer: `We have a Discord server for exactly that! (and much more) <a href="/discord" target="_blank">Click here to join!</a>`
    }
  ]
})
