<template>
  <div class="pageroot">
    <section>
      <h1 class="center" id="coreteam">
        <span component d="0">The</span>
        <span component d="1">Core</span>
        <span component d="2">Team</span>
      </h1>
      <div
        class="member full"
        v-for="(member, i) of core"
        :d="i"
        :key="member.name"
      >
        <div class="img-wrapper">
          <img :src="member.image" :alt="member.name">
          <img v-if="member.imageHover" :src="member.imageHover" :alt="member.name" class="hover">
        </div>
        <a
          :href="member.url"
          rel="noreferrer noopener"
          v-text="member.name"
          :class="{long:member.name.length>14}"
          :style="`--color: ${member.color}; --txtcolor: ${member['txtcolor']||''}`"
          target="_blank"
          @click="$ga.event({ eventAction: 'navigate', eventCategory: 'team', eventLabel: 'member website ' + member.name.toLowerCase() })"
        />
        <span
          v-for="role of member.roles"
          :key="role"
          class="role"
          v-text="role"
        />
      </div>
    </section>
    <section fade-in>
      <h2 h1 class="center" id="contributors">Contributors</h2>
      <div
        class="member full"
        v-for="member of contributors"
        :key="member.name"
      >
        <div class="img-wrapper">
          <img :src="member.image" :alt="member.name">
          <img v-if="member['imageHover']" :src="member['imageHover']" :alt="member.name" class="hover">
        </div>
        <a
          :href="member.url"
          rel="noreferrer noopener"
          v-html="member.name.split('<').join('<&ZeroWidthSpace;')"
          :class="{long:member.name.length>14}"
          :style="`--color: ${member.color}; --txtcolor: ${member.txtcolor||''}`"
          target="_blank"
          @click="$ga.event({ eventAction: 'navigate', eventCategory: 'team', eventLabel: 'member website ' + member.name.toLowerCase() })"
        ></a>
        <span class="role" v-for="role of member.roles" :key="role" v-text="role"></span>
      </div>
    </section>
    <section fade-in>
      <h2 h1 class="center" id="donors">Donors</h2>
      <DonorCard v-for="donor of donors" :key="donor.name" :data="donor" />
    </section>
    <div fade-in class="divider dotted vertical"></div>
    <div fade-in class="popbox green medium">
      <h2>Want your name on this page?</h2>
      <img src="@/assets/img/dotgrid-5x5-gray.svg" alt="" class="bgdeco" draggable="false" aria-hidden="true">
      <div class="gallery" items="3">
        <a
          href="/o/translating"
          rel="noreferrer"
          target="_blank"
          @click="$ga.event({ eventAction: 'navigate', eventCategory: 'team', eventLabel: 'translating' })"
        >
          <img src="@/assets/icons/translation.svg" alt="Translation">
          <span>Help with Translating!</span>
          <span>Even if your language is already supported, sometimes a second translator doesn't hurt!</span>
        </a>
        <a
          href="/discord"
          rel="noreferrer"
          target="_blank"
          @click="$ga.event({ eventAction: 'navigate', eventCategory: 'team', eventLabel: 'discord' })"
        >
          <img src="@/assets/icons/laptopcode.svg" alt="Laptop">
          <span>Help out elsewhere!</span>
          <span>Like programming, bug-finding, providing support and whatever else needs to be done!</span>
        </a>
        <nuxt-link
          to="/donate"
          @click="$ga.event({ eventAction: 'navigate', eventCategory: 'team', eventLabel: 'donate' })"
        >
          <img src="@/assets/icons/dollarring.svg" alt="Donation">
          <span>Donate.</span>
          <span>Even the smallest amount helps this project stay alive! Thanks for every cent!</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DonorCard from '@/components/DonorCard.vue'

export default Vue.extend({
  data () {
    return {
      core: ([
        {
          name: 'Maanex',
          image: 'https://media.discordapp.net/attachments/748622589324165142/748622719578407062/happythonk.png?size=100',
          imageHover: 'https://media.discordapp.net/attachments/748622589324165142/748634095734489098/drunkmaanex.gif?size=100',
          url: 'https://maanex.me/?utm_campain=project&utm_source=freestuff&utm_medium=teampage',
          color: 'linear-gradient(0deg, #54787d 0%, #86A98B 100%)',
          roles: [
            'Lead Software Developer',
            'German Translation'
          ]
        },
        {
          name: 'EasyThe',
          image: 'https://media.discordapp.net/attachments/748622589324165142/748622666432380958/6q2TRvY2_400x400.png?size=100',
          imageHover: 'https://i.imgur.com/0GAUvVo.gif',
          url: 'https://twitter.com/EasyTheBG',
          color: 'linear-gradient(to right, #AA076B 0%, #61045F  51%, #AA076B  100%)',
          roles: [
            'Content Moderator',
            'Bulgarian Translation'
          ]
        },
        {
          name: 'Rami',
          image: 'https://media.discordapp.net/attachments/748622589324165142/748622636057362472/White.png?size=100',
          url: 'https://rami-sabbagh.github.io/',
          color: '#2ba0da',
          roles: [
            'Software Developer',
            'Arabic Translation'
          ]
        },
        {
          name: 'Andreas',
          image: 'https://media.discordapp.net/attachments/748622589324165142/795787715005513778/wtf_2.png',
          url: 'https://media.tenor.co/videos/08958f3c7ef31590646de8e84943cedb/mp4',
          color: '#004499',
          roles: [
            'Content Moderator',
            'Professional Rickroll Guy'
          ]
        },
        {
          name: 'TheMagicalL',
          image: 'https://media.discordapp.net/attachments/748622589324165142/750807887512600717/677c8152d471e830f6e561ff8a78be07.png',
          url: 'https://twitter.com/TheMagicalL1',
          color: '#7fb0d1',
          roles: [
            'Giveaways'
          ]
        },
        {
          name: 'Yupr',
          image: 'https://media.discordapp.net/attachments/748622589324165142/1021386782257979492/unknown.png',
          url: 'https://linktr.ee/qaiszak',
          color: '#ffad73',
          txtcolor: '#26211d',
          roles: [
            'Community Management'
          ]
        }
      ]).sort(()=>Math.random()-.5),
      contributors: ([
        {
          name: 'Bartosz Król',
          image: 'https://media.discordapp.net/attachments/748622589324165142/860116334620311572/transparent.png?width=200&height=200',
          url: 'http://badosz.com/',
          color: '#ffffff',
          txtcolor: '#333333',
          roles: [
            'Polish Translation',
            '"Mental Health Helper"'
          ]
        },
        {
          name: 'Pokimane',
          image: 'https://media.discordapp.net/attachments/748622589324165142/822105259107024896/unknown.png',
          url: '#',
          color: 'linear-gradient(20deg, #36d1dc, #5b86e5)',
          roles: [
            'Danish Translation'
          ]
        },
        {
          name: 'Elitewarrior&ZeroWidthSpace;009',
          image: 'https://media.discordapp.net/attachments/748622589324165142/748630829672038491/unknown.png',
          url: 'https://www.youtube.com/channel/UCpbEXEkXboiQ3UYlRfdw2JQ?view_as=subscriber',
          color: '#5d884f',
          roles: [
            'Chinese Translation'
          ]
        },
        {
          name: 'GlaiveÐ',
          image: 'https://media.discordapp.net/attachments/748622589324165142/750132899692544010/avatar.png',
          url: 'https://twitter.com/Glaived_Dev',
          color: '#6441A5',
          roles: [
            'French Translation'
          ]
        },
        {
          name: 'Yaymaha',
          image: 'https://media.discordapp.net/attachments/748622589324165142/750797323898191964/riBZM05i_400x400.png',
          url: 'https://twitter.com/yaymaha1',
          color: '#b3473e',
          roles: [
            'Portuguese Translation'
          ]
        },
        {
          name: 'relevant&ZeroWidthSpace;croissant',
          image: 'https://media.discordapp.net/attachments/748622589324165142/752586951906820096/yikes.png',
          url: 'https://www.plazovnik.si/',
          color: 'linear-gradient(87deg, rgb(68, 168, 206) 0%, rgb(27, 223, 203) 100%)',
          roles: [
            'Slovenian Translation'
          ]
        },
        {
          name: 'powerzanec',
          image: 'https://media.discordapp.net/attachments/748622589324165142/755474538594304050/logo_r.png',
          url: 'https://www.instagram.com/povazzanec/',
          color: 'linear-gradient(35deg, #c13d27 0%, #ceb22b 100%)',
          roles: [
            'Slovak Translation',
            'Czech Translation'
          ]
        },
        {
          name: 'Bae',
          image: 'https://cdn.discordapp.com/attachments/748622589324165142/777629532294610954/afd52085e12763a6e9af2903304b1f8e.png',
          url: 'https://github.com/PlatinBae/',
          color: '#BAEBAE',
          txtcolor: '#111111',
          roles: [
            'Turkish Translation'
          ]
        },
        {
          name: 'Étienne MzA',
          image: 'https://media.discordapp.net/attachments/748622589324165142/778294827871371274/AATXAJxc23U8Rg9tsiY5frDwaIbU5Yz394ixBpEy35-znQs900-c-k-c0x00ffffff-no-rj.png',
          url: 'https://www.instagram.com/etienne_mza/',
          color: 'linear-gradient(5deg, #014254  0%, #01b4e7 100%)',
          roles: [
            'German Translation'
          ]
        },
        {
          name: 'Master Bucketsmith',
          image: 'https://cdn.discordapp.com/attachments/748622589324165142/781291795857276968/le_avatar.png',
          url: 'https://www.twitch.tv/master_bucketsmith/',
          color: 'linear-gradient(5deg, #0a0101 0%, #540707 100%)',
          roles: [
            'Dutch Translation'
          ]
        },
        {
          name: 'Lukeᴮᵀᵂ',
          image: 'https://cdn.discordapp.com/attachments/748622589324165142/781485828508876830/947db4b0e6cd92d8e5ef7af5a50f2dbc.png',
          url: 'https://lukedev.tk/',
          color: 'linear-gradient(0deg, #a8105b 0%, #8710e6 100%)',
          roles: [
            'Italian Translation'
          ]
        },
        {
          name: 'JADNAST',
          image: 'https://cdn.discordapp.com/attachments/748622589324165142/781839076008919050/f24bf85c95433aaea48a3f39da80891f.png',
          url: 'https://destkop.github.io/',
          color: '#000000',
          roles: [
            'Russian Translation'
          ]
        },
        {
          name: 'Erensi',
          image: 'https://cdn.discordapp.com/attachments/748622589324165142/782905402802569266/e4313532e673aed27652bcb3ad078aeb.png',
          url: '#',
          color: '#cdaa18',
          roles: [
            'Turkish Translation'
          ]
        },
        {
          name: 'Dark_Pizza',
          image: 'https://media.discordapp.net/attachments/748622589324165142/826772260604870736/Pizza.png',
          url: 'discord://click-me/users/561264957921034240',
          color: '#FFE79E',
          txtcolor: '#111111',
          roles: [
            'Portuguese Translation'
          ]
        },
      ]).sort(()=>Math.random()-.5),
      donors: this.$store.state.donors
    }
  },
  transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
    }
  },
	head() {
		return {
			title: 'FreeStuff Team',
			meta: [
				{
					hid: 'description',
					name: 'description',
					content: 'We are the team behind the FreeStuffBot.'
				},
				{
					hid: 'keywords',
					name: 'keywords',
					content: 'freestuff, freestuffbot, team, maanex, easythe, tude'
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
    margin-bottom: 10pt !important;
  }

  .member {
    $background: $bg-bright;

    background-color: $background;
    padding: 20pt;
    margin: 30pt 10pt 10pt 10pt;
    width: 150pt;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: $component-border-radius;
    position: relative;

		&[d] {
      opacity: 0;
      animation: member-in 1s cubic-bezier(0.22, 1, 0.36, 1);
      animation-fill-mode: forwards;
    }
    
		@for $i from 0 to 9 {
			&[d="#{$i}"] { animation-delay: $i * .1 * 1s + 1.5s; }
		}
	
    @keyframes member-in {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }

    &.full {
      padding-top: calc(20pt + 70px);

      &:hover img.hover { visibility: visible !important; }

      .img-wrapper {
        width: 100px;
        height: 100px;
        overflow: hidden;
        border-radius: 999px;
        background-color: darken($bg-bright, 5);
        border: 10px solid $background;
        position: absolute;
        top: -30px;

        img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;

          &.hover {
            z-index: 20;
            visibility: hidden;
          }
        }
      }

      a {
        display: inline-block;
        background: var(--color, #222222);
        border-radius: 15pt;
        padding: 8pt 30pt;
        font-family: $font-major;
        color: var(--txtcolor, #{$color-major});
        font-size: 12pt;
        margin-bottom: 12pt;
        transition: opacity .1s ease;

        &:hover {
          opacity: .8;
        }

        &.long {
          padding: 8pt 4pt;
          width: 100%;
          text-align: center;
        }
      }

      span.role {
        font-family: $font-sub;
        color: $color-sub;
        opacity: .7;
        font-size: 11pt;
        display: block;
        width: 100%;
        text-align: center;
        margin-top: 3pt;
        margin-bottom: 0;
      }
    }
  
    @media (max-width: 700px) {
      width: 120pt !important;
      padding: calc(20pt + 50px) 15pt 15pt 15pt !important;

      & > a {
        padding: 8pt 4pt !important;
        width: 100% !important;
        text-align: center !important;
        font-size: 11pt !important;
      }

      .img-wrapper {
        width: 80px !important;
        height: 80px !important;
      }
    }
  
    @media (max-width: 560px) {
      width: 100pt !important;
      margin: 30pt 5pt 5pt 5pt !important;

      & > a {
        padding: 8pt 2pt !important;
        font-size: 10pt !important;
      }

      span.role {
        font-size: 10pt !important;
      }
    }
  
    @media (max-width: 420px) {
      width: 75pt !important;
      margin: 30pt 3pt 3pt 3pt !important;
      padding: calc(20pt + 40px) 12pt 12pt 12pt !important;

      & > a {
        padding: 8pt 2pt !important;
        font-size: 10pt !important;
      }

      span.role {
        font-size: 10pt !important;
      }

      .img-wrapper {
        width: 70px !important;
        height: 70px !important;
      }
    }
  }

  .donor {
    margin: 5pt;
  }
}
</style>
