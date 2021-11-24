<script lang="ts">
	// import { image, initialize } from 'svelte-cloudinary';
	export let source: string;
	export let altTag: string;

	// initialize({ cloud_name: 'mykeld74' });

	let src = `https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/WestwoodsCC/${source}`;
</script>

<!-- <img use:image={{ src, bind: true, lazy: true }} alt={altTag} class={source} /> -->

<img {src} alt={altTag} class={source} loading="lazy" />

<style>
	@keyframes fadeIn {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	.redline {
		animation: fadeIn 1s ease-in-out;
		max-width: 80vw;
	}
	img {
		width: 100%;
	}
</style>
