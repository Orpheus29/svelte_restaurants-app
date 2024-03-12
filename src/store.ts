import { readable, writable } from 'svelte/store';
import type { IRestaurant } from './components/screens/home/catalogue/restaurant.interface';

export const filter = writable({ searchTerm: '', activeFilter: '' });

export const restaurants = readable<IRestaurant[]>([
	{
		slug: 'the-james-soho',
		name: 'The James SoHo',
		priceRating: '$$$',
		cuisines: ['Italian', 'Japanese'],
		rating: 4.7,
		distance: 1,
		imagePath: './images/james-soho.avif',
		categories: ['cafe', 'ice cream'],
	},
	{
		slug: 'vegan-cafe',
		name: 'Vegan Cafe',
		priceRating: '$$',
		cuisines: ['Vegan'],
		rating: 4.2,
		distance: 3,
		imagePath: './images/vegan.avif',
		categories: ['cafe', 'stand-up'],
	},
	{
		slug: 'amazon',
		name: 'Amazon',
		priceRating: '$$$',
		cuisines: ['Italian'],
		rating: 4.8,
		distance: 2,
		imagePath: './images/amazon.avif',
		categories: ['cafe', 'ice cream', 'cinema'],
	},
	{
		slug: 'world-of-khinkali',
		name: 'World of Khinkali',
		priceRating: '$$',
		cuisines: ['Georgian', 'Asian'],
		rating: 4.6,
		distance: 4,
		imagePath: './images/khinkali.jpg',
		categories: ['cafe', 'stand-up'],
	},
	{
		slug: 'ribs-and-fun',
		name: 'Ribs and Fun',
		priceRating: '$$$$',
		cuisines: ['American', 'European', 'Asian'],
		rating: 4.9,
		distance: 3,
		imagePath: './images/ribs-and-fun.jpg',
		categories: ['cafe', 'stand-up', 'cinema'],
	},
	{
		slug: 'burgerella',
		name: 'Burgerella',
		priceRating: '$',
		cuisines: ['American', 'Italian', 'Japanese'],
		rating: 4.4,
		distance: 0.5,
		imagePath: './images/burgerella.jpg',
		categories: ['cafe', 'ice cream'],
	},
]);
