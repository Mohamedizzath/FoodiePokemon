import 'bootswatch/dist/journal/bootstrap.css';
import {BrowserRouter as Router, Link, Route, Routes, useNavigate} from "react-router-dom";
import Drinks from "./components/drinks/Drinks";
import OrderPage from "./pages/OrderPage";
import Payments from "./components/payments/Payments";
import Feedback from "./pages/Feedback";
import HomePage from "./HomePage";
import LoginPage from "./pages/LoginPage";
import {useState} from "react";
import FoodItemsPage from "./pages/FoodItemsPage";

function App() {
    // Managing user details
    const [user, setUser] = useState(null);

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
                                <Link to="/orders" className="nav-link">Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/payments" className="nav-link">Payments</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/feedback" className="nav-link">Feedback</Link>
                            </li>
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
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/fooditems' element={<FoodItemsPage user={user}/>}/>
                <Route path='/drinks' element={<Drinks/>}/>
                <Route path='/orders' element={<OrderPage user={user}/>}/>
                <Route path='/payments' element={<Payments/>}/>
                <Route path='/login' element={<LoginPage setUser={setUser}/>}/>
                <Route path='/feedback' element={<Feedback/>}/>

            </Routes>
            <div className="container-fluid py-2 mt-0 text-center bg-dark">
                <a href="https://github.com/Mohamedizzath/FoodiePokemon" className="text-decoration-none"
                   style={{color: "#FFFFFF"}}>Github repository</a>
            </div>
        </Router>
    );
}

export default App;
