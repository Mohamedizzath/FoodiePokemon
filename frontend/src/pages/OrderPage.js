import FoodCard from "../components/foodItems/FoodCard";
import FoodImage from "../images/order_img.jpg";
import DrinkCard from "../components/drinks/DrinkCard";
import DessertCard from "../components/desserts/DessertCard";


function OrderPage({user, cart, setCart}) {
    return <div className="container-fluid p-0">
        <div className="container-fluid d-flex justify-content-end align-items-center" style={{
            minHeight: 300,
            backgroundImage: `url(${FoodImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "#FFFFFF"
        }}>
            <h1 className="text-right text-white pe-5">Orders</h1>
        </div>
        <div id="food-items" className="container-fluid pt-4">
            <h1 className="text-center">{cart.foodItems.length > 0 ? "Ordered food items ..." : "You didn't ordered any food items"}&nbsp;&nbsp;&nbsp;</h1>

            {cart.foodItems.length > 0 && <div className="container-fluid mt-4 d-flex overflow-hidden">
                {cart.foodItems.map(foodItem => <FoodCard foodItem={foodItem} showDelete={false} showUpdate={false}
                                                          cart={cart} setCart={setCart}/>)}
            </div>}
        </div>
        <div id="drinks" className="container-fluid pt-4">
            <h1 className="text-center">{cart.drinks.length > 0 ? "Ordered beverages ..." : "You didn't ordered any beverages"}&nbsp;&nbsp;&nbsp;</h1>
            {cart.drinks.length > 0 && <div className="container-fluid mt-4 d-flex overflow-hidden">
                {cart.drinks.map(drink => <DrinkCard drink={drink} showDelete={false} showUpdate={false} cart={cart}
                                                     setCart={setCart}/>)}
            </div>
            }
        </div>
        <div id="desserts" className="container-fluid pt-4">
            <h1 className="text-center">{cart.desserts.length > 0 ? "Ordered desserts ..." : "You didn't ordered any dessert items"}&nbsp;&nbsp;&nbsp;</h1>
            {cart.desserts.length > 0 && <div className="container-fluid mt-4 d-flex overflow-hidden">
                {cart.desserts.map(dessert => <DessertCard DessertItem={dessert} showDelete={false} showUpdate={false}
                                                           cart={cart} setCart={setCart}/>)}
            </div>
            }
        </div>
    </div>
}

export default OrderPage;


