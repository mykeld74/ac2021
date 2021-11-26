<script>
	import '$css/reset.css';
	import '$css/app.scss';
	import Image from '$components/image.svelte';
</script>

<head:svelte>
	<script src="https://js.churchcenter.com/modal/v1"></script>
</head:svelte>

<header>
	<div class="logoContainer">
		<div class="wwLogo"><Image source="wwLogo" altText="Westwoods Community Church Logo" /></div>
	</div>
	<div class="headerText">
		<p class="ww">Westwoods Community Church<br />Advent Conspiracy</p>
		<p class="tagline">Spend Less, Give More, Love All, Worship Fully!</p>
	</div>
	<div class="acLogoContainer">
		<div class="acLogo"><Image source="acLogo" altText="Advent Conspiracy Logo" /></div>
	</div>
</header>
<main>
	<slot />
</main>
<footer>
	<div class="logoContainer">
		<div class="wwFooterLogo">
			<a href="https://westwoodscc.org" target="_blank" rel="noopener noreferrer"
				><Image source="wwLogo" altText="Westwoods Community Church Logo" /></a
			>
		</div>
	</div>
	<a href="https://westwoodscc.org" target="_blank" rel="noopener noreferrer">
		<div class="footerText">
			<p>Westwoods Community Church</p>
			<p>7700 W. Woodard Dr</p>
			<p>Lakewood, CO 80227</p>
		</div>
	</a>
</footer>

<style lang="scss">
	header {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		align-items: center;
		justify-items: center;
		grid-gap: clamp(10px, 1.5vh, 20px);
		padding: 20px;
		border-bottom: 5px solid var(--acRed);
	}

	.wwLogo {
		width: 100%;
		max-width: clamp(150px, 25vw, 215px);
	}
	.acLogo {
		width: 100%;
		max-width: clamp(200px, 25vw, 300px);
	}
	.headerText {
		grid-column: span 2;
		text-align: center;
		.ww {
			font-size: clamp(24px, 3vw, 36px);
			color: var(--acRed);
			font-weight: 700;
			line-height: 1.15;
			margin-bottom: 2vh;
		}
		.tagline {
			font-size: clamp(16px, 2vw, 24px);
			color: var(--acGold);
			font-family: var(--scriptFont);
			font-weight: 300;
		}
	}
	main {
		width: 94vw;
		max-width: 980px;
		margin: 20px auto;
	}
	footer {
		padding: 10px 20px;
		display: flex;
		align-items: center;
		border-top: 5px solid var(--acRed);
	}
	.logoContainer {
		width: 90vw;
		max-width: 100px;
		margin-right: 20px;
	}
	a {
		text-decoration: none;
	}
	.footerText {
		p {
			color: #000;
			font-size: 16px;
			margin: 0;
			line-height: 1.1;
		}
	}
</style>
