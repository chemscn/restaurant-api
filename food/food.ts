interface Food {
	id: number;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
	category: Category;
	nutritionalInfo: NutritionInfo;
}

enum Category {
	Entree = 'entree',
	Side = 'side',
}

interface NutritionInfo {
	calories: number;
	servingSize: string;
	protein: number;
	totalFat: number;
	satFat: number;
	transFat: number;
	cholesterol: number;
	sodium: number;
}

export const food: Food[] = ([] = [
	{
		id: 1,
		name: 'Chicken Salad',
		description:
			'Our health friendly meal, is a mix of your favorite salad and our famous chicken',
		price: 10.99,
		category: Category.Entree,
		imageUrl:
			'https://cdn.pixabay.com/photo/2016/04/17/12/10/grilled-chicken-1334632_960_720.jpg',
		nutritionalInfo: {
			calories: 508,
			servingSize: '1 cup',
			protein: 38,
			totalFat: 36,
			satFat: 8.2,
			transFat: 0,
			cholesterol: 0.128,
			sodium: 0.452,
		},
	},
	{
		id: 2,
		name: 'Chicken Burger',
		description:
			'Our claim to fame, the chicken burger is our customer favorite',
		price: 7.99,
		category: Category.Entree,
		imageUrl:
			'https://cdn.pixabay.com/photo/2017/11/16/05/51/chicken-burger-2953388_960_720.jpg',
		nutritionalInfo: {
			calories: 535,
			servingSize: '1 burger',
			protein: 29,
			totalFat: 20,
			satFat: 4.1,
			transFat: 0,
			cholesterol: 0.057,
			sodium: 1.056,
		},
	},
	{
		id: 3,
		name: 'French Fries',
		description: 'Home cut french fries with truffle oil and our special sauce',
		price: 1.5,
		category: Category.Side,
		imageUrl:
			'https://cdn.pixabay.com/photo/2016/11/20/09/06/bowl-1842294_960_720.jpg',
		nutritionalInfo: {
			calories: 365,
			servingSize: 'Medium order',
			protein: 4,
			totalFat: 17,
			satFat: 2.7,
			transFat: 0,
			cholesterol: 0,
			sodium: 0.0246,
		},
	},
	{
		id: 4,
		name: 'Chicken Nuggets',
		description: 'Our delicious 12 piece nuggets are the perfect treat',
		price: 4.5,
		category: Category.Entree,
		imageUrl:
			'https://cdn.pixabay.com/photo/2014/01/16/01/48/chicken-nuggets-246180_960_720.jpg',
		nutritionalInfo: {
			calories: 224,
			servingSize: '5 nuggets',
			protein: 11.6,
			totalFat: 14.9,
			satFat: 2.9,
			transFat: 0,
			cholesterol: 0.0331,
			sodium: 0.5138,
		},
	},
	{
		id: 5,
		name: 'Hash Browns',
		description: 'Golden brown potato hash',
		price: 2.5,
		category: Category.Side,
		imageUrl:
			'https://cdn.pixabay.com/photo/2020/07/01/15/58/hash-browns-5360091_960_720.jpg',
		nutritionalInfo: {
			calories: 144,
			servingSize: '1 piece',
			protein: 1.4,
			totalFat: 9,
			satFat: 1.3,
			transFat: 0,
			cholesterol: 0,
			sodium: 0.03,
		},
	},
	{
		id: 6,
		name: 'Chicken Quesidilla',
		description:
			'Cheesey and oh so good quesidillas made with the best chicken',
		price: 8.99,
		category: Category.Entree,
		imageUrl:
			'https://cdn.pixabay.com/photo/2015/11/08/01/22/quesadilla-1032985_960_720.jpg',
		nutritionalInfo: {
			calories: 1069,
			servingSize: '1 quesadilla',
			protein: 61,
			totalFat: 50,
			satFat: 23,
			transFat: 0.7,
			cholesterol: 0.0182,
			sodium: 1.815,
		},
	},
]);

export const createFood = (foodToAdd: Food): Food => {
	const hasSameId = food.filter((f) => f.id === foodToAdd.id);
	let newFood;
	if (hasSameId) {
		const ids = food.map((f) => f.id);
		const highestId = Math.max(...ids);
		foodToAdd.id = highestId + 1;
		newFood = foodToAdd;
		food.push(newFood);
	} else {
		newFood = foodToAdd;
		food.push(newFood);
	}
	return newFood;
};
