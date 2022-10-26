const express = require('express');
const app = express();
const port = 8080;

const FoodItemsRoutes = require('./routes/foodItems');
const DrinksRoutes = require('./routes/drinks');
const DessertRoutes = require('./routes/desserts');
const FeedbackRoutes = require('./routes/feedbacks');
const AuthRoutes = require('../../FoodiePokemon/backend/routes/auth');

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

// Contains routes
app.use('/fooditems', FoodItemsRoutes);
app.use('/drinks', DrinksRoutes);
app.use('/desserts', DessertRoutes);
app.use('/feedbacks', FeedbackRoutes);
app.use('/auth', AuthRoutes);

app.listen(port, () => {
    console.log(`App listen on ${port}`);
});

