<template>
  <li class="he">
    <nuxt-link
      v-if="isInternal"
      :to="url"
      v-text="name"
    />
    <a v-else :href="url">
      {{ name }}
      <i
        v-if="isExternal && false"
        class="fas fa-external-link-square-alt headerLinkExtern"
        title="External Link"
      />
    </a>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    name: { type: String, default: 'undefined' },
    url: { type: String, default: '#' }
  },
  computed: {
    isExternal () : boolean {
      return this.url.startsWith('http')
    },
    isInternal () : boolean {
      return this.url.startsWith('/')
    }
  }
})
</script>

<style scoped lang="scss">
@import '~/assets/style/all.scss';

li.he {
  display: block;
  border-radius: 3pt;
  padding: 1px 2px;
  margin: 2px 4px;

  &:hover {
    background: #222222;
    color: #ffffff;
    * { color: #ffffff; }
  }

  a {
    display: block;
    padding: 4px 8px;
    color: var(--morelist-text);
    font-family: var(--morelist-font);
    font-size: 15px;
    font-weight: 400;
    text-align: left;
    text-decoration: none !important;
    cursor: pointer;
    white-space: nowrap;
    overflow: hidden;

    i {
      transform: scale(0.7) translateY(2px);
      opacity: 0.2;
      transition: 0.3s ease all;

      &:hover {
        opacity: 0.4;
      }
    }
  }
}

</style>
