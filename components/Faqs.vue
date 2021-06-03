<template>
  <div class="faqs">
    <div
      v-for="(data, i) of faqs.filter(f => !landingPage || f.landing)"
      :key="i"
      class="faq index--faq-element"
      :focused="i == activeFaq"
      @keydown.enter.prevent="
        i == activeFaq ? (activeFaq = -1) : (activeFaq = i)
      "
      tabindex="1"
    >
      <div
        class="compact"
        @click="i == activeFaq ? (activeFaq = -1) : (activeFaq = i)"
      >
        <span v-text="data.title" class="title" />
      </div>
      <div class="details">
        <span v-html="data.answer" class="answer" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    landingPage: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      faqs: this.$store.state.faqs,
      activeFaq: -1
    }
  },
  watch: {
    activeFaq(val: number) {
      // @ts-ignore
      this.$ga.event({ eventAction: 'faq', eventCategory: 'open', eventLabel: this.faqs[this.activeFaq].title })
    }
  }
});
</script>

<style lang="scss">
@import '~/assets/style/all.scss';

.faqs {
  .faq {
    --closed-height: 40pt;
    @media (max-width: 440px) { --closed-height: 60pt; }

    width: 100%;
    max-height: var(--closed-height);
    overflow: hidden;
    background-color: $bg-bright;
    border-radius: $component-border-radius;
    margin-bottom: $component-margin;
    outline: none;
    transition: max-height .2s cubic-bezier(0, 1, 0, 1);

    &:focus-visible { background-color: $bg-brighter; }
    &[focused] {
      max-height: 100vh;
      transition: max-height .5s ease-in;
    }

    .compact {
      height: var(--closed-height);
      display: flex;
      justify-content: left;
      align-items: center;
      padding: 0 15pt;
      cursor: pointer;

      span {
        margin: 0;
        font-size: 12pt;
        font-family: $font-major;
        color: $color-major;
      }
    }

    .details {
      padding: 0 15pt 15pt 15pt;
      
      span {
        margin: 0;
        font-size: 12pt;
        font-family: $font-regular;
        color: $color-sub;
        line-height: 15pt;
      }
    }
  }
}
</style>
