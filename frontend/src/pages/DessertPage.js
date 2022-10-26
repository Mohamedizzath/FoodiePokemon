import DessertImage from "../images/dessert-items.jpg";
import DessertCard from "../components/desserts/DessertCard";
import {useEffect, useState} from "react";
import DessertCreateImage from "../images/create-dessert.jpg";
import axios from "axios";

function DessertPage({user, cart, setCart}) {
    // Managing dessert item
    const [currentDessertItem, setCurrentDessertItem] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/desserts")
            .then((response) => {
                console.log(response);
                setCurrentDessertItem(response.data);
            });
    }, []);

    // Creating new food item
    const initialDessertItem = {
        "_id": null,
        "Name": "",
        "Category": "",
        "ImageURL": "",
        "Price": 0,
    }

    const [dessertItem, setDessertItem] = useState(initialDessertItem);

    const addDessertItem = (dessertItem) => {
        const newDessertItem = {
            "name": dessertItem.Name,
            "category": dessertItem.Category,
            "imageurl": dessertItem.ImageURL,
            "price": dessertItem.Price
        };

        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        axios.post("http://localhost:8080/desserts", JSON.stringify(newDessertItem), config)
            .then((response) => {
                console.log(response);
                const newDessertItems = [dessertItem, ...currentDessertItem];
                setCurrentDessertItem(newDessertItems);
            });
    }

    const setDessertItemId = (dessertItemId) => {
        const targetDessertItem = currentDessertItem.find(item => item._id === dessertItemId);
        setDessertItem(targetDessertItem);
    }

    const removeDessertItem = (dessertId) => {
        axios.delete(`http://localhost:8080/desserts/${dessertId}`)
            .then(() => {
                const newDessertItems = currentDessertItem.filter(item => item._id !== dessertId);
                setCurrentDessertItem(newDessertItems);
                console.log(`Dessert with id ${dessertId} has been deleted`);
            });
    }

    const updateDessertItem = (dessertId, newDessertItem) => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        }

        axios.patch(`http://localhost:8080/desserts/${dessertId}`, JSON.stringify(newDessertItem), config)
            .then(() => {
                // Updating the details
                axios.get("http://localhost:8080/desserts")
                    .then((response) => {
                        console.log(response);
                        setCurrentDessertItem(response.data);
                    });
            });
    }

    return <div className="container-fluid p-0">
        <div className="container-fluid d-flex justify-content-start align-items-end" style={{
            minHeight: 300,
            backgroundImage: `url(${DessertImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "#FFFFFF"
        }}>
            <h1 className="text-right text-dark pb-3">Dessert Items</h1>
        </div>
        <div className="container-fluid d-flex flex-wrap p-4">
            {currentDessertItem.map(dessertItem => <DessertCard DessertItem={dessertItem} showDelete={user ? true : false} showUpdate={user ? true : false}
                                                        deleteItem={removeDessertItem} setDessertId={setDessertItemId} cart={cart} setCart={setCart}/>)}
        </div>
        {
            user && <div className="container-fluid d-flex" style={{height: 600}}>
                <div className="container-fluid w-50 h-100 d-flex align-items-center">
                    <div className="container-fluid">
                        <h1>Add new dessert items to the store...</h1>
                        <form>
                            <div className="form-group row my-2">
                                <h6>Dessert name</h6>
                                <input type="text" className="form-control ms-2 w-75" id="dessert-name" value={dessertItem.Name} onChange={(e) => setDessertItem({ ...dessertItem, Name: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Dessert Category</h6>
                                <input type="text" className="form-control ms-2 w-75" id="dessert-category" value={dessertItem.Category} onChange={(e) => setDessertItem({ ...dessertItem, Category: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Dessert image url</h6>
                                <input type="text" className="form-control ms-2 w-75" id="dessert-url" value={dessertItem.ImageURL} onChange={(e) => setDessertItem({ ...dessertItem, ImageURL: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <h6>Price</h6>
                                <input type="number" className="form-control ms-2 w-75" id="dessert-price"  value={dessertItem.Price} onChange={(e) => setDessertItem({ ...dessertItem, Price: e.target.value})}/>
                            </div>
                            <div className="form-group row my-2">
                                <button type="button" className="btn btn-outline-success ms-2"
                                        onClick={() => {if(dessertItem._id) updateDessertItem(dessertItem._id, dessertItem); else addDessertItem(dessertItem);}}
                                        style={{minWidth: 100, maxWidth: 150}}>{dessertItem._id ? "Update" : "Create"}
                                </button>
                                <button type="button" className="btn btn-danger ms-2"
                                        onClick={() => setDessertItem(initialDessertItem)}
                                        style={{minWidth: 100, maxWidth: 150}}>Clear
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="container-fluid w-50 h-100" style={{
                    backgroundImage: `url(${DessertCreateImage})`,
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