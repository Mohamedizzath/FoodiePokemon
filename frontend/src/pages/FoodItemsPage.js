import FoodImage from "../images/food-items.jpg";
import FoodCard from "../components/foodItems/FoodCard";
import foodItems from "../testdata/FoodItems";
import {useState} from "react";
import FoodCreateImage from "../images/create-food.jpg";

function FoodItemsPage({user}) {
    // Managing food items
    const [currentFoodItems, setCurrentFoodItems] = useState(foodItems);

    // Creating new food item
    const [foodItem, setFoodItem] = useState({
        "_id": 0,
        "Name": "",
        "Category": "",
        "ImageURL": "",
        "Price": 0,
    });

    const removeFoodItem = (foodId) => {
        const newUpdatedFoods = currentFoodItems.filter(item => item._id !== foodId);
        setCurrentFoodItems(newUpdatedFoods);
    }

    return <div className="container-fluid p-0">
        <div className="container-fluid d-flex justify-content-end align-items-center" style={{
            minHeight: 300,
            backgroundImage: `url(${FoodImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "#FFFFFF"
        }}>
            <h1 className="text-right text-dark pe-5">Food Items</h1>
        </div>
        <div className="container-fluid d-flex flex-wrap p-4">
            {currentFoodItems.map(foodItem => <FoodCard foodItem={foodItem} showDelete={user ? true : false} showUpdate={user ? true : false}
                                                        deleteItem={removeFoodItem}/>)}
        </div>
        {
            user && <div className="container-fluid d-flex" style={{height: 600}}>
                <div className="container-fluid w-50 h-100 d-flex align-items-center">
                    <div className="container-fluid">
                        <h1>Add new food item to the store...</h1>
                        <form>
                            <div className="form-group row my-2">
                                <h6>Food item Id</h6>
                                <input type="number" className="form-control ms-2 w-75" id="food-id" value={foodItem._id} onChange={(e) => setFoodItem({ ...foodItem, _id: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Food Name</h6>
                                <input type="text" className="form-control ms-2 w-75" id="food-name" value={foodItem.Name} onChange={(e) => setFoodItem({ ...foodItem, Name: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Food Category</h6>
                                <input type="text" className="form-control ms-2 w-75" id="food-category" value={foodItem.Category} onChange={(e) => setFoodItem({ ...foodItem, Category: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Food image url</h6>
                                <input type="text" className="form-control ms-2 w-75" id="food-url" value={foodItem.ImageURL} onChange={(e) => setFoodItem({ ...foodItem, ImageURL: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Price</h6>
                                <input type="number" className="form-control ms-2 w-75" id="food-price"  value={foodItem.Price} onChange={(e) => setFoodItem({ ...foodItem, Price: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <button type="button" className="btn btn-outline-success ms-2" onClick={() => setCurrentFoodItems([foodItem, ...currentFoodItems])}
                                        style={{minWidth: 100, maxWidth: 150}}>Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container-fluid w-50 h-100" style={{
                    backgroundImage: `url(${FoodCreateImage})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    color: "#FFFFFF"
                }}></div>
            </div>
        }
    </div>
}

export default FoodItemsPage;