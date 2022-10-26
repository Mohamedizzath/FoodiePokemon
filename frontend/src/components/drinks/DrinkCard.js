import {FaPen, FaTrash} from "react-icons/fa";

function DrinkCard({ drink, showUpdate, showDelete, deleteItem, setDrinkId, cart, setCart }){
    const addOrRemoveItem = (drinkItem) => {
        if(cart.drinks.includes(drinkItem)){
            const newDrinkItems = cart.drinks.filter(item => item._id !== drinkItem._id);
            setCart({...cart, drinks: [...newDrinkItems]});
        } else {
            const newCart = {...cart, drinks: [...cart.drinks, drinkItem]};
            setCart(newCart);
        }
        console.log(cart);
    }

    return <div className="card bg-light mb-3 mx-4" style={{ minWidth: 250, maxWidth: 300}} id={drink._id}>
        <div className="card-header d-flex justify-content-between">
            <h3>{drink.Name}</h3>
            {showUpdate && <button type="button" className="btn btn-outline-success px-2" onClick={() => setDrinkId(drink._id)}>
                <FaPen/>
            </button>
            }
        </div>
        <img src={drink.ImageURL} alt={drink.Name} />
        <div className="container">
            {drink.Category === "Fruit-Juice" && <span className="badge bg-warning">{drink.Category}</span>}
            {drink.Category === "Cold-Dessert" && <span className="badge bg-danger">{drink.Category}</span>}
            {drink.Category === "Coffee" && <span className="badge bg-success">{drink.Category}</span>}
        </div>
        <div className="container text-center py-4 mt-auto">
            <button type="button" className="btn btn-outline-success">Rs. {drink.Price}</button>
            <button type="button" disabled={!cart.user} className="btn btn-danger ms-4" onClick={() => addOrRemoveItem(drink)}>{ cart.drinks.includes(drink) ? "Remove" : "Order Now!" }</button>
            {showDelete &&
                <button type="button" className="btn btn-danger ms-2 px-2" onClick={() => deleteItem(drink._id)}>
                    <FaTrash/>
                </button>}
        </div>
    </div>
}

export default DrinkCard;