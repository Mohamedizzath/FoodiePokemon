// Contains routes for fooditems
const express = require('express');
const FoodItems = require("../models/fooditems");

const router = express.Router();

router.get('/',async (req, res) => {
    // Getting all the fooditems
    try {
        const allFoodItems = await FoodItems.find({});
        return res.json(allFoodItems);
    } catch(error) {
        res.status(500).json({ message: error });
    }
});

router.post('/', async (req, res) => {
    // Creating new fooditem document
    console.log(req.body);
    const fooditem = new FoodItems({
        Name: req.body.name,
        Category: req.body.category,
        ImageURL: req.body.imageurl,
        Price: req.body.price
    });

    try{
        const savedData = fooditem.save();
        res.status(200).json(savedData);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        // Req body should be in the exact format with capitalized words
        const newFoodItem = req.body;
        const options = { new: true };

        const results = await FoodItems.findByIdAndUpdate(id, newFoodItem, options);
        res.send(results);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = await FoodItems.findByIdAndDelete(id);
        res.send(`Fooditem with id ${id} has been deleted...`);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;