import logo from './logo.svg';
import './App.css';
import 'bootswatch/dist/journal/bootstrap.css';
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import FoodItems from "./components/foodItems/FoodItems";
import Drinks from "./components/drinks/Drinks";
import Orders from "./components/orders/Orders";
import Payments from "./components/payments/Payments";
import HomePage from "./HomePage";

function App() {
  return (
         <Router>
           <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
             <div className="container-fluid">
               <Link className="navbar-brand" to="/">FoodiePokemon</Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02"
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
                 </ul>
                 <div className="d-flex">
                   <button className="btn btn-light my-2 my-sm-0" type="submit">Login</button>
                   <button className="btn btn-danger my-2 my-sm-0 ms-2" type="submit">Register</button>
                 </div>
               </div>
             </div>
           </nav>
           <Routes>
             <Route path='/' element={<HomePage />} />
            <Route path='/fooditems' element={<FoodItems />} />
             <Route path='/drinks' element={<Drinks />} />
             <Route path='/orders' element={<Orders />} />
             <Route path='/payments' element={<Payments />} />
           </Routes>
           <div className="container-fluid fixed-bottom py-2 text-center bg-dark">
             <a href="https://github.com/Mohamedizzath/FoodiePokemon" className="text-secondary text-decoration-none">Github repository</a>
           </div>
         </Router>
  );
}

export default App;
