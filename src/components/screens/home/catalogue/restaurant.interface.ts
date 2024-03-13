export interface IRestaurant {
	slug: string;
	name: string;
	priceRating: '$$$$' | '$$$' | '$$' | '$';
	cuisines: string[];
	rating: number;
	distance: number;
	imagePath: string;
	categories: ('fast food' | 'restaurant' | 'sushi' | 'vegan' | 'ice cream')[];
}
