<script lang="ts">
	export let source: string = '';
	export let bgSize: string = 'cover';
	export let id: string = '';
	export let className: string = '';

	let backgroundImage = `url('https://res.cloudinary.com/mykeld74/image/upload/f_auto,q_auto/WestwoodsCC/${source}')`;

	$: bgImages = `--bgImage:${backgroundImage};--bgSize:${bgSize}`;
</script>

<div style={bgImages} {id} class="bgImgSection {className}">
	<slot />
</div>

<style lang="scss">
	.bgImgSection {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		background: var(--bgImage) no-repeat center center/var(--bgSize, cover);
	}
	.linkBlock {
		min-height: 300px;
		padding: 0 2vw;
		text-align: center;
		color: #fff;
		cursor: pointer;

		&:hover {
			color: var(--linkColor);
		}
	}
	.weAre {
		min-height: 40vh;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		padding: 30px 0px;
		color: rgb(255, 255, 255);
	}
</style>
