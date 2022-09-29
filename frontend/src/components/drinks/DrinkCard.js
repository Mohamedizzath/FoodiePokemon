function DrinkCard({ drink }){
    return <div className="card bg-light mb-3 mx-4" style={{ minWidth: 250}} id={drink._id}>
        <div className="card-header">
            <h3>{drink.Name}</h3>
        </div>
        <img src={drink.ImageURL} alt={drink.Name} />
        <div className="container">
            {drink.Category === "Fruit-Juice" && <span className="badge bg-warning">{drink.Category}</span>}
            {drink.Category === "Cold-Dessert" && <span className="badge bg-danger">{drink.Category}</span>}
            {drink.Category === "Coffee" && <span className="badge bg-success">{drink.Category}</span>}
        </div>
        <div className="container text-center py-4 mt-auto">
            <button type="button" className="btn btn-outline-success">Rs. {drink.Price}</button>
            <button type="button" className="btn btn-danger ms-4">Order now!</button>
        </div>
    </div>
}

export default DrinkCard;