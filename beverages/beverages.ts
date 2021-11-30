interface Beverage {
	id: number;
	name: string;
	imageUrl: string;
	price: number;
	sizes?: string[];
}

const sizes = ['small', 'medium', 'large'];

export const beverages: Beverage[] = [
	{
		id: 1,
		name: 'Coca-Cola',
		imageUrl:
			'https://cdn.pixabay.com/photo/2020/04/08/08/09/cocacola-5016273_960_720.jpg',
		price: 1.5,
		sizes: sizes,
	},
	{
		id: 2,
		name: 'Pepsi',
		imageUrl:
			'https://cdn.pixabay.com/photo/2020/05/10/05/14/pepsi-5152332_960_720.jpg',
		price: 1.5,
		sizes: sizes,
	},
	{
		id: 3,
		name: 'Water',
		imageUrl:
			'https://cdn.pixabay.com/photo/2020/04/08/08/09/cocacola-5016273_960_720.jpg',
		price: 1.0,
		sizes: sizes,
	},
];
