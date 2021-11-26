<head:svelte>
	<title>Advent Conspiracy | Westwoods Community Church</title>
</head:svelte>

<div class="intro">
	<h1 class="conspiracy">Join the conspiracy!</h1>
	<p class="description">
		The goal of Advent Conspiracy is to overthrow the status quo of how we do Christmas. This year,
		conspire with us by choosing to:
	</p>
	<p class="tag">Spend Less / Give More / Worship Fully / Love All</p>
	<p class="description">
		By giving to AC, you are contributing to people experiencing Gods love and care in this place,
		in our city, and around the world!
	</p>
</div>
<div class="opportunities">
	<div class="local">
		<h2 class="title">Local</h2>
		<p class="description">
			<span class="redBold">Camp Barnabas</span> - our students travel to Camp Barnabas yearly to love
			and serve those with special needs.
		</p>
		<p class="description">
			<span class="redBold">Family Promise</span> - providing basic necessities to families in our area
			experiencing homelessness.
		</p>
		<p class="description">
			<span class="redBold">Gifts for children</span> - providing gifts for children in partnership with
			a local school and Mission 98 (Due 12.10).
		</p>
	</div>
	<div class="global">
		<h2 class="title">Global</h2>
		<p class="description">
			<span class="redBold">Peniel Centre - Zimbabwe</span> - Providing food and education to the most
			vulnerable children in Zimbabwe.
		</p>
		<p class="description">
			<span class="redBold">Teen moms in Uganda </span> - Our known partners in Uganda work to love and
			support teen moms.
		</p>
	</div>
	<div class="cta">
		<p class="description">
			To join the conspiracy, please click the 'One Time Donation' button below, select the
			appropriate fund, enter the amount and donate. Or if you would like to sponsor a child in
			Zimbabwe, please click the 'Sponsor a Child' button below. Sponsorships are $75 a month and we
			ask for a 2 year commitment.
		</p>
		<div class="buttonContainer">
			<a
				href="https://westwoods.churchcenter.com/giving/?open-in-church-center-modal=true"
				target="_blank"
			>
				<button class="button" id="linkToDonate">
					<span>One Time Donation</span>
				</button>
			</a>
			<a href="https://zimbabwe.westwoodscc.org/sponsorship" target="_blank">
				<button class="button" id="linkToDonate">
					<span>Sponsor a Child</span>
				</button>
			</a>
		</div>
	</div>
</div>

<style lang="scss">
	.intro {
		text-align: center;
	}
	.tag {
		font-size: clamp(20px, 3.5vw, 28px);
		color: var(--acRed);
		font-weight: 700;
	}
	.conspiracy {
		text-align: center;
		font-size: clamp(22px, 5vw, 36px);
	}

	.title {
		font-size: clamp(20px, 3.5vw, 28px);
		text-decoration: underline;
		margin-bottom: 10px;
	}
	.redBold {
		color: var(--acRed);
		font-weight: 900;
	}
	.cta {
		margin-top: 20px;
		padding-top: 0px;
		border-top: 3px solid var(--acGold);
	}
	.button {
		width: 300px;
		height: 50px;
		background-color: var(--acRed);
		color: #fff;
		border: none;
		border-radius: 5px;
		font-size: 24px;
		font-weight: 700;
		cursor: pointer;
	}
	.buttonContainer {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		justify-items: center;
		grid-gap: 20px;
	}
</style>
