<template>
	<li class="he">
		<a :href="url">
			{{ name }}
			<i
				v-if="isExternal() && false"
				class="fas fa-external-link-square-alt headerLinkExtern" title="External Link"
			></i>
		</a>
	</li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HeaderElement extends Vue {
	@Prop() private name!: string;
	@Prop() private url!: string;
	
	isExternal() {
		return this.url.startsWith('http');
	}
}
</script>

<style scoped lang="scss">

li.he {
	display: block;
	border-radius: 3pt;
	padding: 1px 2px;
	margin: 2px 4px;

	&:hover {
		background: var(--hover);
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
