import DrinkImage from "../images/drinks-item.jpg";
import {useEffect, useState} from "react";
import DrinkCreateImage from "../images/create-drink.jpg";
import axios from "axios";
import DrinkCard from "../components/drinks/DrinkCard";

function DrinkPage({user, cart, setCart}) {
    // Managing food items
    const [currentDrinkItems, setCurrentDrinkItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/drinks")
            .then((response) => {
                console.log(response);
                setCurrentDrinkItems(response.data);
            });
    }, []);

    // Creating new food item
    const initialDrinkItem = {
        "_id": null,
        "Name": "",
        "Category": "",
        "ImageURL": "",
        "Price": 0,
    };

    const [drinkItem, setDrinkItem] = useState(initialDrinkItem);

    const addDrinkItem = (drinkItem) => {
        const newDrinkItem = {
            "name": drinkItem.Name,
            "category": drinkItem.Category,
            "imageurl": drinkItem.ImageURL,
            "price": drinkItem.Price
        };

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        axios.post("http://localhost:8080/drinks", JSON.stringify(newDrinkItem), config)
            .then((response) => {
                console.log(response);
                const newDrinkItems = [drinkItem, ...currentDrinkItems];
                setCurrentDrinkItems(newDrinkItems);
            });
    }

    const setDrinkId = (drinkItemId) => {
        const targetDrinkItem = currentDrinkItems.find(item => item._id === drinkItemId);
        setDrinkItem(targetDrinkItem);
    }

    const removeDrinkItem = (drinkId) => {
        axios.delete(`http://localhost:8080/drinks/${drinkId}`)
            .then(() => {
                const newDrinkItems = currentDrinkItems.filter(item => item._id !== drinkId);
                setCurrentDrinkItems(newDrinkItems);
                console.log(`DrinkItem with id ${drinkId} has been deleted`);
            });
    }

    const updateDrinkItem = (drinkId, newDrinkItem) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        axios.patch(`http://localhost:8080/drinks/${drinkId}`, JSON.stringify(newDrinkItem), config)
            .then(() => {
                // Updating the details
                axios.get("http://localhost:8080/drinks")
                    .then((response) => {
                        console.log(response);
                        setCurrentDrinkItems(response.data);
                    });
            });
    }

    return <div className="container-fluid p-0">
        <div className="container-fluid d-flex justify-content-end align-items-center" style={{
            minHeight: 300,
            backgroundImage: `url(${DrinkImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "#FFFFFF"
        }}>
            <h1 className="text-right text-white pe-5">Beverages</h1>
        </div>
        <div className="container-fluid d-flex flex-wrap p-4">
            {currentDrinkItems.map(drink => <DrinkCard drink={drink} showDelete={user ? true : false}
                                                        showUpdate={user ? true : false}
                                                        deleteItem={removeDrinkItem}
                                                       setDrinkId={setDrinkId} cart={cart} setCart={setCart}/>)}
        </div>
        {
            user && <div className="container-fluid d-flex" style={{height: 600}}>
                <div className="container-fluid w-50 h-100 d-flex align-items-center">
                    <div className="container-fluid">
                        <h1>Add new drink item to the store...</h1>
                        <form>
                            <div className="form-group row my-2">
                                <h6>Drink Name</h6>
                                <input type="text" name="name" className="form-control ms-2 w-75" id="drink-name"
                                       value={drinkItem.Name}
                                       onChange={(e) => setDrinkItem({...drinkItem, Name: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Drink Category</h6>
                                <input type="text" name="category" className="form-control ms-2 w-75" id="drink-category"
                                       value={drinkItem.Category}
                                       onChange={(e) => setDrinkItem({...drinkItem, Category: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Drink image url</h6>
                                <input type="text" name="imageurl" className="form-control ms-2 w-75" id="drink-url"
                                       value={drinkItem.ImageURL}
                                       onChange={(e) => setDrinkItem({...drinkItem, ImageURL: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Price</h6>
                                <input type="number" name="price" className="form-control ms-2 w-75" id="drink-price"
                                       value={drinkItem.Price}
                                       onChange={(e) => setDrinkItem({...drinkItem, Price: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <button type="button" className="btn btn-outline-success ms-2"
                                        onClick={() => {if(drinkItem._id) updateDrinkItem(drinkItem._id, drinkItem); else addDrinkItem(drinkItem);}}
                                        style={{minWidth: 100, maxWidth: 150}}>{drinkItem._id ? "Update" : "Create"}
                                </button>
                                <button type="button" className="btn btn-danger ms-2"
                                        onClick={() => setDrinkItem(initialDrinkItem)}
                                        style={{minWidth: 100, maxWidth: 150}}>Clear
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container-fluid w-50 h-100" style={{
                    backgroundImage: `url(${DrinkCreateImage})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    color: "#FFFFFF"
                }}></div>
            </div>
        }
    </div>
}

export default DrinkPage;