import FoodImage from "../images/food-items.jpg";
import FoodCard from "../components/foodItems/FoodCard";
import foodItems from "../testdata/FoodItems";
import {useEffect, useState} from "react";
import FoodCreateImage from "../images/create-food.jpg";
import axios from "axios";

function FoodItemsPage({user}) {
    // Managing food items
    const [currentFoodItems, setCurrentFoodItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/fooditems")
            .then((response) => {
                console.log(response);
                setCurrentFoodItems(response.data);
            });
    }, []);

    // Creating new food item
    const initialFoodItem = {
        "_id": null,
        "Name": "",
        "Category": "",
        "ImageURL": "",
        "Price": 0,
    };

    const [foodItem, setFoodItem] = useState(initialFoodItem);

    const addFoodItem = (foodItem) => {
        const newFoodItem = {
            "name": foodItem.Name,
            "category": foodItem.Category,
            "imageurl": foodItem.ImageURL,
            "price": foodItem.Price
        };

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        axios.post("http://localhost:8080/fooditems", JSON.stringify(newFoodItem), config)
            .then((response) => {
            console.log(response);
            const newFoodItems = [foodItem, ...currentFoodItems];
            setCurrentFoodItems(newFoodItems);
        });
    }

    const setFoodItemId = (foodItemId) => {
        const targetFoodItem = currentFoodItems.find(item => item._id === foodItemId);
        setFoodItem(targetFoodItem);
    }

    const removeFoodItem = (foodId) => {
        axios.delete(`http://localhost:8080/fooditems/${foodId}`)
            .then(() => {
                const newFoodItems = currentFoodItems.filter(item => item._id !== foodId);
                setCurrentFoodItems(newFoodItems);
                console.log(`Fooditem with id ${foodId} has been deleted`);
            });
    }

    const updateFoodItem = (foodId, newFoodItem) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        axios.patch(`http://localhost:8080/fooditems/${foodId}`, JSON.stringify(newFoodItem), config)
            .then(() => {
                // Updating the details
                axios.get("http://localhost:8080/fooditems")
                    .then((response) => {
                        console.log(response);
                        setCurrentFoodItems(response.data);
                    });
            });
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
            {currentFoodItems.map(foodItem => <FoodCard foodItem={foodItem} showDelete={user ? true : false}
                                                        showUpdate={user ? true : false}
                                                        deleteItem={removeFoodItem}
            setFoodItemId={setFoodItemId}/>)}
        </div>
        {
            user && <div className="container-fluid d-flex" style={{height: 600}}>
                <div className="container-fluid w-50 h-100 d-flex align-items-center">
                    <div className="container-fluid">
                        <h1>Add new food item to the store...</h1>
                        <form>
                            <div className="form-group row my-2">
                                <h6>Food Name</h6>
                                <input type="text" name="name" className="form-control ms-2 w-75" id="food-name"
                                       value={foodItem.Name}
                                       onChange={(e) => setFoodItem({...foodItem, Name: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Food Category</h6>
                                <input type="text" name="category" className="form-control ms-2 w-75" id="food-category"
                                       value={foodItem.Category}
                                       onChange={(e) => setFoodItem({...foodItem, Category: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Food image url</h6>
                                <input type="text" name="imageurl" className="form-control ms-2 w-75" id="food-url"
                                       value={foodItem.ImageURL}
                                       onChange={(e) => setFoodItem({...foodItem, ImageURL: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Price</h6>
                                <input type="number" name="price" className="form-control ms-2 w-75" id="food-price"
                                       value={foodItem.Price}
                                       onChange={(e) => setFoodItem({...foodItem, Price: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <button type="button" className="btn btn-outline-success ms-2"
                                        onClick={() => {if(foodItem._id) updateFoodItem(foodItem._id, foodItem); else addFoodItem(foodItem);}}
                                        style={{minWidth: 100, maxWidth: 150}}>{foodItem._id ? "Update" : "Create"}
                                </button>
                                <button type="button" className="btn btn-danger ms-2"
                                        onClick={() => setFoodItem(initialFoodItem)}
                                        style={{minWidth: 100, maxWidth: 150}}>Clear
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