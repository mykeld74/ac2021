<script lang="ts">
	import { fly, fade } from 'svelte/transition';
	import Portal from '$components/portal.svelte';
	let isOpen = false;
	function openModal() {
		isOpen = true;
	}
	function closeModal() {
		isOpen = false;
	}
</script>

<div on:click={openModal}><slot name="trigger" /></div>

{#if isOpen}
	<Portal>
		<div class="modalWrapper" transition:fade>
			<div class="modalBackground" on:click={closeModal} />
			<div class="modalContent" transition:fly={{ opacity: 0, y: 500 }}>
				<p class="modalHeader"><slot name="header" /></p>
				<div class="modalBody">
					<slot name="content" />
				</div>
				<button class="modalCloseButton" on:click={closeModal}
					><p class="modalCloseText">&#10007;</p></button
				>
			</div>
		</div>
	</Portal>
{/if}

<style lang="scss">
	:global(.modalWrapper) {
		position: fixed;
		width: 100%;
		inset: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 500;
	}
	:global(.modalBackground) {
		position: absolute;
		inset: 0;
		background: var(--theme-colors-text);
		opacity: 0.8;
		z-index: 501;
		cursor: pointer;
	}
	:global(.modalContent) {
		position: relative;
		background-color: var(--theme-colors-modal_bg);
		color: var(--theme-colors-text);
		padding: 20px;
		border-radius: 10px;
		width: 96vw;
		max-width: 960px;
		z-index: 502;
	}
	:global(.modalCloseButton) {
		position: absolute;
		top: -20px;
		right: -20px;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #ed2328;
		color: #fff;
		border: 3px solid var(--theme-colors-text);
		cursor: pointer;
		z-index: 503;
	}
	:global(.modalCloseText) {
		margin: -5px 0 0 0;
		padding: 0;
		font-size: 32px;
		color: #fff;
	}
</style>
