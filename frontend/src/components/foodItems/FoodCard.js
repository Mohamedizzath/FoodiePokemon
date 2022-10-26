import {FaTrash, FaPen} from "react-icons/fa";

function FoodCard({foodItem, showUpdate, showDelete, deleteItem, setFoodItemId, cart, setCart}) {
    const addOrRemoveItem = (foodItem) => {
        if(cart.foodItems.includes(foodItem)){
            const newFoodItems = cart.foodItems.filter(item => item._id !== foodItem._id);
            setCart({...cart, foodItems: [...newFoodItems]});
        } else {
            const newCart = {...cart, foodItems: [...cart.foodItems, foodItem]};
            setCart(newCart);
        }
        console.log(cart);
    }

    return <div className="card bg-light mb-3 mx-4" style={{minWidth: 250, maxWidth: 300}} id={foodItem._id}>
        <div className="card-header d-flex justify-content-between">
            <h3>{foodItem.Name}</h3>
            {showUpdate && <button type="button" className="btn btn-outline-success px-2" onClick={() => setFoodItemId(foodItem._id)}>
                <FaPen/>
            </button>
            }
        </div>
        <img src={foodItem.ImageURL} alt={foodItem.Name}/>
        <div className="container">
            {foodItem.Category === "Breakfast" && <span className="badge bg-warning">{foodItem.Category}</span>}
            {foodItem.Category === "Lunch" && <span className="badge bg-danger">{foodItem.Category}</span>}
        </div>
        <div className="container text-center py-4 mt-auto">
            <button type="button" className="btn btn-outline-success">Rs. {foodItem.Price}</button>
            <button type="button" disabled={!cart.user}  className="btn btn-danger ms-4" onClick={() => addOrRemoveItem(foodItem)}>{ cart.foodItems.includes(foodItem) ? "Remove" : "Order Now!" }</button>
            {showDelete &&
                <button type="button" className="btn btn-danger ms-2 px-2" onClick={() => deleteItem(foodItem._id)}>
                    <FaTrash/>
                </button>}
        </div>
    </div>
}

export default FoodCard;