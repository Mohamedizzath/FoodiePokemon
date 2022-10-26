import 'bootswatch/dist/journal/bootstrap.css';
import HomeImage from './images/home-page.jpg';
import FooterImage from './images/home-page-footer.jpg';
import FoodCard from "./components/foodItems/FoodCard";
import DrinkCard from "./components/drinks/DrinkCard";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import DessertCard from "./components/desserts/DessertCard";

function HomePage({ cart, setCart }){
    // Getting initial fooditems, drinks, and desserts
    const [foodItems, setFoodItems] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [desserts, setDesserts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/fooditems")
            .then((response) => {
                console.log(response);
                setFoodItems(response.data);
            });
        axios.get("http://localhost:8080/drinks")
            .then((response) => {
                console.log(response);
                setDrinks(response.data);
            });
        axios.get("http://localhost:8080/desserts")
            .then((response) => {
                console.log(response);
                setDesserts(response.data);
            });
    }, []);

    return <div className="container-fluid p-0">
        <div className="container-fluid vh-100 ps-4 d-flex flex-column justify-content-center align-items-start" style={{ backgroundImage: `url(${HomeImage})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", color: "#FFFFFF"}}>
            <h1>Live, love, eat.</h1>
            <h3>Perfect place for well-flavoured foods</h3>
            <div className="container-fluid pt-4">
                <a href="#food-items" className="btn btn-outline-light">Foods-items</a>
                <a href="#drinks" className="btn btn-outline-light ms-4">Beverages</a>
            </div>
            <div className="container-fluid p-0 pt-2">
                <h6>Photo by Ive Erhard on Unsplash</h6>
            </div>
        </div>
        <div id="food-items" className="container-fluid pt-4">
            <h1 className="text-center">Amazing foods ...&nbsp;&nbsp;&nbsp;<Link to="/fooditems" className="btn btn-outline-danger">More...</Link></h1>

            <div className="container-fluid mt-4 d-flex overflow-hidden">
                { foodItems.map(foodItem => <FoodCard foodItem={foodItem} showDelete={false} showUpdate={false} cart={cart} setCart={setCart}/>)}
            </div>
        </div>
        <div id="drinks" className="container-fluid pt-4">
            <h1 className="text-center">Refreshing beverages ...&nbsp;&nbsp;&nbsp;<Link to="/drinks" className="btn btn-outline-danger">More...</Link></h1>
            <div className="container-fluid mt-4 d-flex overflow-hidden">
                { drinks.map(drink => <DrinkCard drink={drink} cart={cart} setCart={setCart} />)}
            </div>
        </div>
        <div id="desserts" className="container-fluid pt-4">
            <h1 className="text-center">Delicious desserts ...&nbsp;&nbsp;&nbsp;<Link to="/drinks" className="btn btn-outline-danger">More...</Link></h1>
            <div className="container-fluid mt-4 d-flex overflow-hidden">
                { desserts.map(dessert => <DessertCard DessertItem={dessert} cart={cart} setCart={setCart} />)}
            </div>
        </div>
        <div className="container-fluid bg-dark p-0 d-flex">
            <div className="container p-0 w-50">
                <img src={FooterImage} style={{ height: 600}} alt="footer-image" />
            </div>
            <div className="container p-0 w-50 d-flex flex-column justify-content-center" style={{ color: "#FFFFFF"}}>
                <h1 className="mb-4">Over mission ...</h1>
                <h4 className="fw-light">Food is at our heart, inspiring our craft and driving innovation—in our drinks, our food, our stores and new ways we bring the Foodiepokemon experience to you wherever you are</h4>
            </div>
        </div>
    </div>
}

export default HomePage;