export interface IRestaurant {
	slug: string;
	name: string;
	priceRating: '$$$$' | '$$$' | '$$' | '$';
	cuisines: string[];
	rating: number;
	distance: number;
	imagePath: string;
	categories: ('cafe' | 'cinema' | 'stand-up' | 'ice cream')[];
}
