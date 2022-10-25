import {FaTrash, FaPen} from "react-icons/fa";

function DessertCard({DessertItem, showUpdate, showDelete, deleteItem}) {
    return <div className="card bg-light mb-3 mx-4" style={{minWidth: 250, maxWidth: 300}} id={DessertItem._id}>
        <div className="card-header d-flex justify-content-between">
            <h3>{DessertItem.Name}</h3>
            {showUpdate && <button type="button" className="btn btn-outline-success px-2">
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
            <button type="button" className="btn btn-danger ms-4">Order now!</button>
            {showDelete &&
                <button type="button" className="btn btn-danger ms-2 px-2" onClick={() => deleteItem(DessertItem._id)}>
                    <FaTrash/>
                </button>}
        </div>
    </div>
}

export default DessertCard;