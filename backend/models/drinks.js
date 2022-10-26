// Schema which represents individual drink item
const mongoose = require('mongoose');

const drinksSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Category: {
        type: String,
        required: true,
    },
    ImageURL: {
        type: String,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
});

const Drink = mongoose.model('Drink', drinksSchema);
module.exports = Drink;