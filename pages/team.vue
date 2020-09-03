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
          <img v-if="member.imageHover" :src="member.imageHover" alt="" class="hover">
        </div>
        <a :href="member.url" v-text="member.name" :style="`--color: ${member.color}; --txtcolor: ${member.txtcolor||''}`" target="_blank"></a>
        <span class="role" v-for="role of member.roles" :key="role" v-text="role"></span>
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
          <img v-if="member.imageHover" :src="member.imageHover" alt="" class="hover">
        </div>
        <a :href="member.url" v-text="member.name" :style="`--color: ${member.color}; --txtcolor: ${member.txtcolor||''}`" target="_blank"></a>
        <span class="role" v-for="role of member.roles" :key="role" v-text="role"></span>
      </div>
    </section>
    <section fade-in>
      <h2 h1 class="center" id="donors">Donors</h2>
      <DonorCard v-for="donor of donors" :key="donor.name" :data="donor" />
    </section>
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
          image: 'https://media.discordapp.net/attachments/748622589324165142/748622719578407062/happythonk.png',
          imageHover: 'https://media.discordapp.net/attachments/748622589324165142/748634095734489098/drunkmaanex.gif',
          url: 'https://maanex.me/?utm_campain=project&utm_source=freestuff&utm_medium=teampage',
          color: '#86A98B',
          roles: [
            'Lead Software Developer',
            'German Translation'
          ]
        },
        {
          name: 'EasyThe',
          image: 'https://media.discordapp.net/attachments/748622589324165142/748622666432380958/6q2TRvY2_400x400.png',
          url: 'https://twitter.com/EasyTheBg',
          color: '#9535ce',
          roles: [
            'Content Moderator',
            'Bulgarian Translation'
          ]
        },
        {
          name: 'Rami',
          image: 'https://media.discordapp.net/attachments/748622589324165142/748622636057362472/White.png',
          url: 'https://rami-sabbagh.github.io/',
          color: '#2ba0da',
          roles: [
            'Software Developer',
            'Arabic Translation'
          ]
        }
      ]).sort(()=>Math.random()-.5),
      contributors: ([
        {
          name: 'Bartosz Król',
          image: 'https://media.discordapp.net/attachments/748622589324165142/748622611935658014/bIcon-white.png',
          url: 'http://badosz.com/',
          color: '#ffffff',
          txtcolor: '#333333',
          roles: [
            'Polish Translation',
            'Programming Help'
          ]
        },
        {
          name: 'Hadi Da King',
          image: 'https://media.discordapp.net/attachments/748622589324165142/748623596099993681/Hadi_Logo.png',
          url: 'http://getavirus.xyz/',
          color: '#006ba1',
          roles: [
            'Danish Translation',
            '(he really do be da king)'
          ]
        },
        {
          name: 'Elitewarrior009',
          image: 'https://media.discordapp.net/attachments/748622589324165142/748630829672038491/unknown.png',
          url: 'https://www.youtube.com/channel/UCpbEXEkXboiQ3UYlRfdw2JQ?view_as=subscriber',
          color: '#377d21',
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
          color: '#742f29',
          roles: [
            'Portuguese Translation'
          ]
        },
        {
          name: 'TheMagicalL',
          image: 'https://media.discordapp.net/attachments/748622589324165142/750807887512600717/677c8152d471e830f6e561ff8a78be07.png',
          url: 'https://twitter.com/TheMagicalL1',
          color: '#7fb0d1',
          roles: [
            'Helper here and there'
          ]
        }
      ]).sort(()=>Math.random()-.5),
      donors: this.$store.state.donors
    }
  },
  transition: {
    afterEnter () {
      document.getElementById('app')?.scrollTo({ top: 0, behavior: 'smooth' })
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
  margin: 30pt 0 80pt 0;

  h1, h2 {
    margin-bottom: 10pt !important;
  }

  .member {
    $background: $bg-bright;

    background-color: $background;
    padding: 20pt;
    margin: 40pt 10pt 10pt 10pt;
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
        background-color: var(--color, #222222);
        border-radius: 999px;
        padding: 8pt 30pt;
        font-family: $font-major;
        color: var(--txtcolor, #{$color-major});
        font-size: 12pt;
        margin-bottom: 12pt;
        transition: opacity .1s ease;

        &:hover {
          opacity: .8;
        }
      }

      span.role {
        font-family: $font-sub !important;
        color: $color-sub !important;
        opacity: .7 !important;
        font-size: 11pt !important;
        display: block !important;
        width: 100% !important;
        text-align: center !important;
        margin-top: 3pt !important;
      }
    }
  }

  .donor {
    margin: 5pt;
  }
}
</style>