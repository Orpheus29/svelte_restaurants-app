<script lang="ts">
	import { link } from 'svelte-spa-router';
	import type { IRestaurant } from './restaurant.interface';
	// @ts-ignore
	import IoMdWallet from 'svelte-icons/io/IoMdWallet.svelte';
	// @ts-ignore
	import TiStarFullOutline from 'svelte-icons/ti/TiStarFullOutline.svelte';

	export let restaurant: IRestaurant;
	const {
		slug,
		name,
		priceRating,
		cuisines,
		rating,
		distance,
		imagePath: src,
	} = restaurant;
</script>

<div class="restaurant">
	<a href={`/restaurant/${slug}`} use:link>
		<img {src} alt={name} />
	</a>

	<div class="info">
		<div>
			<div class="heading">
				{name}
			</div>

			<div class="price">
				<div class="wallet">
					<IoMdWallet />
				</div>
				<span>
					Average price {priceRating}
				</span>
			</div>

			<div class="cuisines">
				{#each cuisines as cuisine, index}
					<span>{index ? ' · ' : ''}{cuisine}</span>
				{/each}
			</div>
		</div>

		<div>
			<div class="rating">
				<div class="star">
					<TiStarFullOutline />
				</div>
				<span>
					{rating}
				</span>
			</div>
			<div class="distance">
				{distance} km
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.restaurant {
		@apply mb-12 text-left shadow pb-2 rounded-3xl relative bg-white;

		> a > img {
			@apply rounded-3xl;
		}

		.info {
			@apply flex justify-between text-[#111] p-5;

			.heading {
				@apply font-semibold text-2xl mb-2;
			}

			.price {
				@apply flex items-center mb-2;

				.wallet {
					@apply w-5 mr-1.5;
				}
			}

			.cuisines {
				@apply text-[#ccc] text-sm;
			}

			.rating {
				@apply flex justify-between mb-3;

				.star {
					@apply w-6 mr-1 text-yellow-300;
				}
			}
			.distance {
				@apply bg-green-500 py-1 px-2 text-white text-sm rounded-l-xl rounded-r-3xl;
			}
		}

		&::before,
		&::after {
			@apply w-full h-full absolute rounded-3xl left-0 top-0;
			content: '';
		}

		&::before {
			background-color: #c1edd8;
			transform: rotate(-2deg);
			z-index: -1;
		}

		&::after {
			background-color: #dbf3e3;
			transform: rotate(-3deg);
			z-index: -2;
		}
	}
</style>
