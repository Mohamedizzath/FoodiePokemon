import FoodImage from "../images/food-items.jpg";
import DessertCard from "../components/desserts/DessertCard";
import foodItems from "../testdata/FoodItems";
import {useState} from "react";
import FoodCreateImage from "../images/create-food.jpg";

function DessertPage({user}) {
    // Managing dessert item
    const [currentDessertItem, setCurrentDessertItem] = useState(foodItems);

    // Creating new food item
    const [dessertItem, setDessertItem] = useState({
        "_id": 0,
        "Name": "",
        "Category": "",
        "ImageURL": "",
        "Price": 0,
    });

    const removeDessertItem = (dessertId) => {
        const newUpdatedDesserts = currentDessertItem.filter(item => item._id !== dessertId);
        setCurrentDessertItem(newUpdatedDesserts);
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
            {currentDessertItem.map(dessertItem => <DessertCard DessertItem={dessertItem} showDelete={user ? true : false} showUpdate={user ? true : false}
                                                        deleteItem={removeDessertItem}/>)}
        </div>
        {
            user && <div className="container-fluid d-flex" style={{height: 600}}>
                <div className="container-fluid w-50 h-100 d-flex align-items-center">
                    <div className="container-fluid">
                        <h1>Add new dessert items to the store...</h1>
                        <form>
                            <div className="form-group row my-2">
                                <h6>Dessert Id</h6>
                                <input type="number" className="form-control ms-2 w-75" id="food-id" value={dessertItem._id} onChange={(e) => setDessertItem({ ...dessertItem, _id: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Dessert name</h6>
                                <input type="text" className="form-control ms-2 w-75" id="food-name" value={dessertItem.Name} onChange={(e) => setDessertItem({ ...dessertItem, Name: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Dessert Category</h6>
                                <input type="text" className="form-control ms-2 w-75" id="food-category" value={dessertItem.Category} onChange={(e) => setDessertItem({ ...dessertItem, Category: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Dessert image url</h6>
                                <input type="text" className="form-control ms-2 w-75" id="food-url" value={dessertItem.ImageURL} onChange={(e) => setDessertItem({ ...dessertItem, ImageURL: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Price</h6>
                                <input type="number" className="form-control ms-2 w-75" id="food-price"  value={dessertItem.Price} onChange={(e) => setDessertItem({ ...dessertItem, Price: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <button type="button" className="btn btn-outline-success ms-2" onClick={() => setCurrentDessertItem([dessertItem, ...currentDessertItem])}
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

export default DessertPage;