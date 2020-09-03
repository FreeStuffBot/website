<template>
  <footer>
    <div class="footerInner">
      <div class="upper">
        <div class="left">
          <div class="content">
            <span>Featured Donor:</span>
            <nuxt-link to="/donate">
              <DonorCard :data="featuredDonor" />
            </nuxt-link>
            <span class="subtext" v-text="genSubtext()"></span>
          </div>
          <div class="vertdiv"></div>
        </div>
        <div>
          <span>Discord Bot</span>
          <nuxt-link to="/about">About</nuxt-link>
          <nuxt-link to="/start">Getting Started</nuxt-link>
          <nuxt-link to="/tutorial">Tutorial</nuxt-link>
          <nuxt-link to="/themes">Themes</nuxt-link>
        </div>
        <div>
          <span>Support</span>
          <nuxt-link to="/faq">FAQ</nuxt-link>
          <nuxt-link to="/troubleshooting">Troubleshooting</nuxt-link>
          <a href="/discord">Support Server</a>
          <a href="mailto:team@freestuffbot.xyz">Contact</a>
        </div>
        <div>
          <span>Resources</span>
          <nuxt-link to="/press">Press</nuxt-link>
          <nuxt-link to="/team">Team</nuxt-link>
          <a href="/o/source" target="_blank">Open Source</a>
          <a href="/o/trello" target="_blank">Roadmap</a>
          <nuxt-link to="/donate">Donate</nuxt-link>
          <a href="/o/translating" target="_blank">Help Translating</a>
          <a href="https://freestuff.statuspage.io/" target="_blank">Status</a>
        </div>
        <div>
          <span>Legal Mumbo Jumbo</span>
          <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
          <nuxt-link to="/terms">Terms of Service</nuxt-link>
          <nuxt-link to="/licenses">Licenses</nuxt-link>
          <a v-if="Math.random() < .01" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Free Bitcoin</a>
        </div>
      </div>
      <div class="lower">
        <nuxt-link to="/" class="brand">
          <img src="@/assets/img/icon_round.png">
          <span class="name">FreeStuff</span>
        </nuxt-link>
        <span class="copyright">Copyright &copy; 2020 FreeStuff Services. All rights reserved.</span>
        <nuxt-link to="/start" class="footerButton">Get Started</nuxt-link>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import HeaderCategory from './HeaderCategory.vue'
import DonorCard from './DonorCard.vue'

export default Vue.extend({
  data () {
    return {
      featuredDonor: this.$store.state.donors[Math.floor(Math.random() * this.$store.state.donors.length)]
    }
  },
  methods: {
    genSubtext () {
      const texts = [
        'Thanks <3',
        'Thank you',
        'Thank you <3',
        'Thank youuuu!!',
        'Thank you!',
        'You\'re the best!',
        'Thanks a lot!',
        'You are amazing!',
        'Thanks!',
        'Thx :)',
        'thx thx thx <3',
        '<3',
      ]
      return texts[Math.floor(Math.random() * texts.length)]
    }
  }
})
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

footer {
  background: $bg-dark;
  display: block;
  z-index: 110;
  width: 100%;
  border: 0;
  font-family: $font-header;
  font-size: 18px;
  font-style: inherit;
  font-weight: inherit;
  padding: 50pt 0;
  margin-top: 50pt;

	.footerInner {
    max-width: 1300px;
    margin: auto;

    .upper {
      width: 100%;
      display: grid;
      grid-template-columns: minmax(0, 1.4fr) repeat(4, minmax(0, 1fr));
      column-gap: 10pt;

      .left {
        display: flex;

        .content {
          display: inline-block;
          padding-right: 10pt;
        }

        .vertdiv {
          width: 2px;
          height: 80%;
          background-color: #3c3c3c;
          margin: auto;
        }

        a {
          text-decoration: none !important;

          .donor {
            box-shadow: 0 0 0 #00000000;
            transform: translateY(0);
            transition: box-shadow .2s ease
                      , transform .2s ease;
            
            &:hover {
              box-shadow: 0 2px 10px #00000044;
              transform: translateY(-1px);
            }
          }
        }

        span {
          display: block;
          width: 140pt;
          text-align: center;
        }

        .subtext {
          font-family: $font-minor;
          color: $color-minor;
          font-size: 11pt;
        }
      }

      a {
        display: block;
        color: $color-sub;
        font-family: $font-regular;
        font-size: 12pt;
        text-decoration: none;
        margin-bottom: 5pt;

        &:hover {
          color: $color-header;
          text-decoration: underline;
        }
      }

      span {
        color: $color-header;
        font-family: $font-header;
        font-size: 14pt;
        display: block;
        margin-bottom: 10pt;
      }
    }

    .lower {
      margin-top: 50pt;
      padding: 15pt;
      background: #00000033;
      border-radius: 999pt;
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));

      .brand {
        display: flex;
        align-items: center;
        height: 40px;
        text-decoration: none !important;

        img {
          height: 40px;
          margin-right: 12px;
        }

        .name {
          font-family: $font-header;
          color: $color-header;
          font-size: 18pt;
          position: relative;
          margin: 0 !important;
        }
      }

      .copyright {
        display: block;
        text-align: center;
        font-family: $font-minor;
        color: $color-minor;
        font-size: 10pt;
        line-height: 10pt;
        opacity: .3;
        margin-top: calc(20px - 5pt);
      }

      .footerButton {
        display: inline-block;
        font-family: $font-major;
        font-size: 11pt;
        margin-left: auto;
        color: $color-header;
        background-image: linear-gradient(30deg, #ba38be, #7b7fe1);
        box-shadow: 0 0 15px #00000088;
        padding: 8pt 20pt;
        border-radius: 99px;
        cursor: pointer;

        &:hover {
          background-image: linear-gradient(30deg, #9e35a1, #6b6eb9);
        }
      }
    }
  }
}
</style>
