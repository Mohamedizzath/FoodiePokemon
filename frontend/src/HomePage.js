import 'bootswatch/dist/journal/bootstrap.css';
import HomeImage from './images/home-page.jpg';
import FooterImage from './images/home-page-footer.jpg';
import FoodItems from "./testdata/FoodItems";
import Drinks from "./testdata/Drinks";
import FoodCard from "./components/foodItems/FoodCard";
import DrinkCard from "./components/drinks/DrinkCard";

function HomePage(){
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
            <h1 className="text-center">Amazing foods ...</h1>
            <div className="container-fluid mt-4 d-flex overflow-hidden">
                { FoodItems.map(foodItem => <FoodCard foodItem={foodItem} />)}
            </div>
        </div>
        <div id="drinks" className="container-fluid pt-4">
            <h1 className="text-center">Refreshing beverages ...</h1>
            <div className="container-fluid mt-4 d-flex overflow-hidden">
                { Drinks.map(drink => <DrinkCard drink={drink} />)}
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