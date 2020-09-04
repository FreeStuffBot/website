<template>
  <div class="padfullscreen plaintext">
    <h1 class="center">Support</h1>
    <h2 sub class="center">
      Sorry, this page is not ready yet!<br/>
    </h2>
    <div class="center">
      <div class="divider dash horizontal"></div>
			<span>Any questions?</span>
      <span><a href="/discord">Contact us on Discord</a></span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  transition: {
    afterEnter() {
      document.getElementById("app")?.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
});
</script>

<style scoped lang="scss"></style>
