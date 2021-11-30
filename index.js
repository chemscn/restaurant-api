"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var food_1 = require("./food/food");
var beverages_1 = require("./beverages/beverages");
var path = require('path');
var express = require('express');
var app = express();
app.use(express.json());
//Return Home Page
app.get('/', function (req, res) {
    res.status(200).sendFile(path.join(__dirname + "/src/pages/home.html"));
});
//Get all food
app.get('/food', function (req, res) {
    res.status(200).send(food_1.food);
});
//Get Food with id param
app.get('/food/:id', function (req, res) {
    var queryResult = food_1.food.filter(function (f) { return f.id.toString() === req.params.id; });
    if (queryResult.length > 0) {
        res.status(200).send(queryResult);
    }
    else {
        res.status(404).send({ error: 'No results found with this id' });
    }
});
//Create food item
app.post('/add/food', function (req, res) {
    if (!req.body) {
        res.status(400).send({ error: 'Please send a proper food object' });
    }
    else {
        var newFood_1 = (0, food_1.createFood)(req.body);
        if (food_1.food.filter(function (f) { return f.name === newFood_1.name; }).length > 1) {
            res.status(400).send({ error: 'This product seems to exist already' });
        }
        else {
            res.status(200).send({
                message: "Successfully added " + (newFood_1 === null || newFood_1 === void 0 ? void 0 : newFood_1.name.toLocaleUpperCase()),
            });
        }
    }
});
//Get all beverages
app.get('/beverages', function (req, res) {
    res.status(200).send(beverages_1.beverages);
});
//Get beverage by id
app.get('/beverages/:id', function (req, res) {
    var queryResult = beverages_1.beverages.filter(function (b) { return b.id.toString() === req.params.id; });
    res.status(200).send(queryResult);
});
app.listen(3000, function () {
    console.log('App available on port 3000');
});
