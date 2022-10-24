// Schema which represents individual fooditem
const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
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

const FoodItem = mongoose.model('FoodItem', foodItemSchema);
module.exports = FoodItem;