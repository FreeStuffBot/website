<template>
  <div class="padfullscreen plaintext">
    <h1 class="center">Telegram</h1>
    <h2 sub class="center">
      Sorry, this page is not ready yet!<br/>
      Please check back later :)
    </h2>
    <div class="center">
      <div class="divider dash horizontal"></div>
			<span>Any questions?</span>
      <span><a href="mailto:team@freestuffbot.xyz">Send an E-Mail</a></span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  transition: {
    afterEnter() {
      document.getElementById("app")?.scrollTo({ top: 0, behavior: "smooth" })
    }
  }
});
</script>

<style scoped lang="scss"></style>
