const express = require('express');
const app = express();
const port = 8080;

const FoodItemsRoutes = require('./routes/foodItems');

// Reading environmental variables
const dotenv = require('dotenv');
dotenv.config();

// Enable CORS in the server
const cors = require('cors');
app.use(cors());

const bodyparser = require('body-parser');
app.use(bodyparser.json());


// Connecting to the mongodb
const connectionString = process.env.CONNECTION_STRING;
const startConnection = require('./mongo-config');
startConnection(connectionString).then(() => {
    console.log('Connected to the mongodb server!');
});
const FoodItems = require('./models/fooditems');

// Contains routes
app.use('/fooditems', FoodItemsRoutes);

app.listen(port, () => {
    console.log(`App listen on ${port}`);
});

