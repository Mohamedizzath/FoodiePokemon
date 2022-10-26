import {FaTrash, FaPen} from "react-icons/fa";

function DessertCard({DessertItem, showUpdate, showDelete, deleteItem, setDessertId, cart, setCart}) {
    const addOrRemoveItem = (dessertItem) => {
        if(cart.desserts.includes(dessertItem)){
            const newDessertItems = cart.desserts.filter(item => item._id !== dessertItem._id);
            setCart({...cart, desserts: [...newDessertItems]});
        } else {
            const newCart = {...cart, desserts: [...cart.desserts, dessertItem]};
            setCart(newCart);
        }
        console.log(cart);
    }
    return <div className="card bg-light mb-3 mx-4" style={{minWidth: 250, maxWidth: 300}} id={DessertItem._id}>
        <div className="card-header d-flex justify-content-between">
            <h3>{DessertItem.Name}</h3>
            {showUpdate && <button type="button" className="btn btn-outline-success px-2" onClick={() => setDessertId(DessertItem._id)}>
                <FaPen/>
            </button>
            }
        </div>
        <img src={DessertItem.ImageURL} alt={DessertItem.Name}/>
        <div className="container">
            {DessertItem.Category === "Breakfast" && <span className="badge bg-warning">{DessertItem.Category}</span>}
            {DessertItem.Category === "Lunch" && <span className="badge bg-danger">{DessertItem.Category}</span>}
        </div>
        <div className="container text-center py-4 mt-auto">
            <button type="button" className="btn btn-outline-success">Rs. {DessertItem.Price}</button>
            <button type="button" disabled={!cart.user}  className="btn btn-danger ms-4" onClick={() => addOrRemoveItem(DessertItem)}>{ cart.desserts.includes(DessertItem) ? "Remove" : "Order Now!" }</button>
            {showDelete &&
                <button type="button" className="btn btn-danger ms-2 px-2" onClick={() => deleteItem(DessertItem._id)}>
                    <FaTrash/>
                </button>}
        </div>
    </div>
}

export default DessertCard;