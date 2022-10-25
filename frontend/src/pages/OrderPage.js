import { useEffect } from "react";
import FoodCard from "../components/foodItems/FoodCard";
import FoodImage from "../images/order_img.jpg";
import orders from "../testdata/Orders";


function OrderPage({user}) {
    const order = orders.find(order => order.userId == user.userId);

    return <div className="container-fluid p-0">
            <div className="container-fluid d-flex justify-content-end align-items-center" style={{
            minHeight: 300,
            backgroundImage: `url(${FoodImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "#FFFFFF"
        }}>
            <h1 className="text-right text-white pe-5">Oders</h1>
        </div>
        <div className="container">
            {
                order.fooditems.map(fooditem => <FoodCard foodItem={fooditem} key={fooditem._id}/>)
            }
        </div>
    </div>
}

export default OrderPage;


