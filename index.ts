import { createFood, food } from './food/food';
import { Request, Response } from 'express';
import { beverages } from './beverages/beverages';
const path = require('path');
const express = require('express');
const app = express();
app.use(express.json());

//Return Home Page
app.get('/', (req: Request, res: Response) => {
	res.status(200).sendFile(path.join(`${__dirname}/src/pages/home.html`));
});

//Get all food
app.get('/food', (req: Request, res: Response) => {
	res.status(200).send(food);
});

//Get Food with id param
app.get('/food/:id', (req: Request, res: Response) => {
	const queryResult = food.filter((f) => f.id.toString() === req.params.id);
	if (queryResult.length > 0) {
		res.status(200).send(queryResult);
	} else {
		res.status(404).send({ error: 'No results found with this id' });
	}
});

//Create food item
app.post('/add/food', (req: Request, res: Response) => {
	if (!req.body) {
		res.status(400).send({ error: 'Please send a proper food object' });
	} else {
		const newFood = createFood(req.body);
		if (food.filter((f) => f.name === newFood.name).length > 1) {
			res.status(400).send({ error: 'This product seems to exist already' });
		} else {
			res.status(200).send({
				message: `Successfully added ${newFood?.name.toLocaleUpperCase()}`,
			});
		}
	}
});

//Get all beverages
app.get('/beverages', (req: Request, res: Response) => {
	res.status(200).send(beverages);
});

//Get beverage by id
app.get('/beverages/:id', (req: Request, res: Response) => {
	const queryResult = beverages.filter(
		(b) => b.id.toString() === req.params.id
	);
	res.status(200).send(queryResult);
});

app.listen(3000, () => {
	console.log('App available on port 3000');
});
