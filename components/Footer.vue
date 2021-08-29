<template>
  <footer>
    <div class="footerInner">
      <div class="upper">
        <div class="left">
          <div class="content">
            <span>Featured Donor:</span>
            <no-ssr>
              <nuxt-link
                to="/donate"
                @click="$ga.event({ eventAction: 'navigate', eventCategory: 'footer', eventLabel: 'home' })"
              >
                <DonorCard :data="featuredDonor" />
              </nuxt-link>
              <a
                class="coffee"
                href="/o/ko-fi"
                target="_blank"
                rel="noopener noreferrer"
                @click="$ga.event({ eventAction: 'donate', eventCategory: 'footer', eventLabel: 'ko-fi' })"
              >
                <img src="~/assets/img/buy-me-a-ko-fi.png" alt="Buy me a Coffee">
              </a>
              <span class="subtext" v-text="genSubtext()"></span>
            </no-ssr>
          </div>
          <div class="vertdiv"></div>
        </div>
        <div>
          <span>Platform</span>
          <nuxt-link to="/guide">Guide</nuxt-link>
          <nuxt-link to="/themes">Themes</nuxt-link>
          <nuxt-link to="/">For Discord</nuxt-link>
          <a href="/telegram" rel="noreferrer" target="_blank">For Telegram</a>
          <!-- <nuxt-link to="/twitter">Twitter Bot <span class="new-badge">NEW</span></nuxt-link>
          <nuxt-link to="/rss">RSS Feed <span class="new-badge">NEW</span></nuxt-link> -->
          <a href="https://docs.freestuffbot.xyz/" rel="noreferrer" target="_blank">API</a>
        </div>
        <div>
          <span>Support</span>
          <!-- <nuxt-link to="/support">Support Center</nuxt-link> -->
          <nuxt-link to="/support/faq">FAQ</nuxt-link>
          <a href="/discord" rel="noreferrer">Support Server</a>
          <a href="mailto:team@freestuffbot.xyz" rel="noreferrer">Contact</a>
        </div>
        <div>
          <span>Resources</span>
          <nuxt-link to="/team">Team</nuxt-link>
          <!-- <nuxt-link to="/press">Press</nuxt-link> -->
          <a href="/o/source" rel="noreferrer" target="_blank">Open Source</a>
          <!-- <a href="/o/trello" rel="noreferrer" target="_blank">Roadmap</a> -->
          <a href="/o/translating" rel="noreferrer" target="_blank">Help Translating</a>
          <nuxt-link to="/donate">Donate ✨</nuxt-link>
          <!-- <a href="https://freestuff.statuspage.io/" rel="noreferrer" target="_blank">Status</a> -->
        </div>
        <div>
          <span>Legal Mumbo Jumbo</span>
          <nuxt-link to="/privacy">Privacy Policy</nuxt-link>
          <nuxt-link to="/terms">Terms of Service</nuxt-link>
          <nuxt-link to="/licenses">Licenses</nuxt-link>
          <a v-if="Math.random() < .01" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" rel="noreferrer" target="_blank">Free Bitcoin</a>
        </div>
      </div>
      <div class="lower">
        <nuxt-link to="/" class="brand">
          <img src="@/assets/img/icon_round.png" alt="FreeStuff Logo">
          <span class="name">FreeStuff</span>
        </nuxt-link>
        <span class="copyright">Copyright &copy; 2021 FreeStuff Services. All rights reserved. <a href="https://maanex.me/imprint?utm_campain=project&utm_source=freestuff&utm_medium=footer" rel="noopener">Impressum</a></span>
        <a
          href="/start"
          class="footerButton"
          @click="$ga.event({ eventAction: 'start', eventCategory: 'footer', eventLabel: 'discord' })"
        >
          Get Started
        </a>
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
      // const texts = [
      //   'Thanks <3',
      //   'Thank you',
      //   'Thank you <3',
      //   'Thank youuuu!!',
      //   'Thank you!',
      //   'You\'re the best!',
      //   'Thanks a lot!',
      //   'You are amazing!',
      //   'Thanks!',
      //   'Thx :)',
      //   'thx thx thx <3',
      //   '<3',
      // ]
      const texts = [
        'Thanks <3',
        'Thank you',
        'Thank you <3',
        'Thank you!',
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
    width: 90%;
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

        .coffee {
          padding-top: 5pt;

          img {
            width: 186px;
          }
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
      background-color: #131516;
      border-radius: 999pt;
      display: grid;
      grid-template-columns: 1fr auto 1fr;

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
        margin-top: calc(20px - 5pt);

        a {
          color: $color-minor;
          text-decoration: none;

          &:hover {
            color: $color-regular;
            text-decoration: underline;
          }
        }
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
        text-align: center;
        border-radius: 99px;
        cursor: pointer;

        &:hover {
          background-image: linear-gradient(30deg, #9e35a1, #6b6eb9);
        }
      }
    }
  }

  @media (max-width: 1100px) {
    .upper {
      grid-template-columns: repeat(4, minmax(0, 1fr)) !important;

      .left {
        display: none !important;
      } 
    }
  }

  @media (max-width: 800px) {
    padding-bottom: 0 !important;

    .lower {
      border-radius: 0 !important;
      grid-template-columns: 1fr !important;
      width: calc(100vw - 30pt) !important;
      transform: translateX(-5vw) !important;

      &>*:not(.copyright) { display: none !important; }
      .copyright { margin-bottom: calc(20px - 5pt); }
    }
  }

  @media (max-width: 700px) {
    .upper {
      grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
      row-gap: 20pt !important;
    }
  }
}
</style>
