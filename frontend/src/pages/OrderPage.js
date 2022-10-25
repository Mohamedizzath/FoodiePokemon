import { useEffect } from "react";
import FoodCard from "../components/foodItems/FoodCard";
import FoodImage from "../images/order_img.jpg";
import orders from "../testdata/Orders";


function OrderPage({user}) {
    const order = orders.find(order => order.username.toLowerCase() === user.username.toLowerCase());

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
        <div className="container">
            {
                order.foodItems.map(item => <FoodCard foodItem={item} key={item._id}/>)
            }
        </div>
    </div>
}

export default OrderPage;


