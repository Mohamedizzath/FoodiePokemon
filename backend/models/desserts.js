// Schema which represents individual dessert item
const mongoose = require('mongoose');

const dessertSchema = new mongoose.Schema({
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

const Dessert = mongoose.model('Dessert', dessertSchema);
module.exports = Dessert;