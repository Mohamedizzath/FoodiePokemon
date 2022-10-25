// Schema which represents individual orders
const mongoose = require('mongoose');
const User = require('user');
const FoodItem = require('fooditems');
const Drink = require('drinks');
const Dessert = require('desserts');

const orderSchema = new mongoose.Schema({
    User: {
        type: User,
        required: true
    },
    FoodItems: {
        type: [FoodItem],
        default: [],
        required: true,
    },
    Drinks: {
        type: [Drink],
        default: [],
        required: true,
    },
    Desserts: {
        type: [Dessert],
        default: [],
        required: true,
    }
});

const Order = mongoose.model('orders', orderSchema);
module.exports = Order;