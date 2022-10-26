import 'bootswatch/dist/journal/bootstrap.css';
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from "react-router-dom";
import OrderPage from "./pages/OrderPage";
import Feedback from "./pages/Feedback";
import HomePage from "./HomePage";
import LoginPage from "./pages/LoginPage";
import {useState} from "react";
import FoodItemsPage from "./pages/FoodItemsPage";
import DessertPage from "./pages/DessertPage";
import DrinkPage from "./pages/DrinkPage";

function App() {
    // Managing user details
    const [user, setUser] = useState(null);

    // Managing orders currently have
    const [cart, setCart] = useState({user: null, foodItems: [], drinks: [], desserts: []});

    // Logging out current user
    const logout = () => {
        setUser(null);
    }

    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">FoodiePokemon</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarColor02"
                            aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarColor02">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link to="/fooditems" className="nav-link">Food-Items</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/drinks" className="nav-link">Drinks</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/dessert" className="nav-link">Dessert</Link>
                            </li>
                            {
                                user && <li className="nav-item">
                                    <Link to="/orders" className="nav-link">Orders</Link>
                                </li>
                            }
                            {
                                user && <li className="nav-item">
                                    <Link to="/feedback" className="nav-link">Feedback</Link>
                                </li>
                            }
                        </ul>
                        <div className="d-flex">
                            {user && <Link to="/login" className="btn btn-danger my-2 my-sm-0"
                                           onClick={logout}>{user.username}</Link>}
                            {!user &&
                                <Link to="/login" className="btn btn-danger my-2 my-sm-0" type="submit">Login</Link>}
                        </div>
                    </div>
                </div>
            </nav>
            <div className="container-fluid min-vh-100 p-0 m-0">
                <Routes>
                    <Route path='/' element={<HomePage cart={cart} setCart={setCart}/>}/>
                    <Route path='/fooditems' element={<FoodItemsPage user={user} cart={cart} setCart={setCart} />}/>
                    <Route path='/drinks' element={<DrinkPage user={user} cart={cart} setCart={setCart} />}/>
                    <Route path='/dessert' element={<DessertPage user={user} cart={cart} setCart={setCart} />} />
                    <Route path='/orders' element={<OrderPage user={user} cart={cart} setCart={setCart} />}/>
                    <Route path='/login' element={<LoginPage setUser={setUser} cart={cart} setCart={setCart} />}/>
                    <Route path='/feedback' element={<Feedback user={user} cart={cart} setCart={setCart} />}/>
                </Routes>
            </div>
            <div className="container-fluid py-2 mt-0 text-center bg-dark">
                <a href="https://github.com/Mohamedizzath/FoodiePokemon" className="text-decoration-none"
                   style={{color: "#FFFFFF"}}>Github repository</a>
            </div>
        </Router>
    );
}

export default App;
