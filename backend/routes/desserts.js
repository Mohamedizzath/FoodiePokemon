// Contains routes for drinks
const express = require('express');
const Desserts = require("../models/desserts");

const router = express.Router();

router.get('/',async (req, res) => {
    // Getting all the desserts
    try {
        const allDesserts = await Desserts.find({});
        return res.json(allDesserts);
    } catch(error) {
        res.status(500).json({ message: error });
    }
});

router.post('/',async (req, res) => {
    // Creating new dessert document
    const dessert = new Desserts({
        Name: req.body.name,
        Category: req.body.category,
        ImageURL: req.body.imageurl,
        Price: req.body.price
    });

    try{
        const savedData = dessert.save();
        res.status(200).json(savedData);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        // Req body should be in the exact format with capitalized words
        const Dessert = req.body;
        const options = { new: true };

        const results = await Desserts.findByIdAndUpdate(id, Dessert, options);
        res.send(results);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const data = await Desserts.findByIdAndDelete(id);
        res.send(`Dessert with id ${id} has been deleted...`);
    } catch(error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;