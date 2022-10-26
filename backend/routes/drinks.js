// Contains routes for drinks
const express = require('express');
const Drinks = require("../models/drinks");

const router = express.Router();

router.get('/',async (req, res) => {
    // Getting all the drinks
    try {
        const allDrinks = await Drinks.find({});
        return res.json(allDrinks);
    } catch(error) {
        res.status(500).json({ message: error });
    }
});

router.post('/',async (req, res) => {
    // Creating new drink document
    const drink = new Drinks({
        Name: req.body.name,
        Category: req.body.category,
        ImageURL: req.body.imageurl,
        Price: req.body.price
    });

    try{
        const savedData = drink.save();
        res.status(200).json(savedData);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        // Req body should be in the exact format with capitalized words
        const Drink = req.body;
        const options = { new: true };

        const results = await Drinks.findByIdAndUpdate(id, Drink, options);
        res.send(results);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Drinks.findByIdAndDelete(id);
        res.send(`Drink with id ${id} has been deleted...`);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;