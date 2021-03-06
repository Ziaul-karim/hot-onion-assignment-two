import './App.css';
import Header from './components/Header/Header';
import FoodItems from './components/FoodItems/FoodItems';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import FoodDetails from './components/FoodDetails/FoodDetails';
import NotFound from './components/NotFound/NotFound';
import { createContext, useState } from 'react';
import Cart from './components/Cart/Cart';
import AboutUsSection from './components/AboutUsSection/AboutUsSection';
import Footer from './components/Footer/Footer';
import Shipment from './components/Shipment/Shipment';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext()

function App() {
  

  const [cart, setCart] = useState([]);
  const [finalCart, setFinalCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser)
  return (
    <UserContext.Provider value ={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header cart = {finalCart}></Header>
        <Switch>
          <Route path='/home'>
            <FoodItems cart={cart}></FoodItems>
            <AboutUsSection></AboutUsSection>
            <Footer></Footer>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/cart'>
            <Cart cart={finalCart} setCart={setFinalCart}></Cart>
          </Route>
          <Route exact path='/'>
            <FoodItems cart={cart}></FoodItems>
            <AboutUsSection></AboutUsSection>
            <Footer></Footer>
          </Route>
          <PrivateRoute path='/shipment'>
            <Shipment></Shipment>
          </PrivateRoute>
          <Route path='/foodDetails/:foodKey/'>
            <FoodDetails setCart={setCart} cart = {cart}></FoodDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        {/* {cart.length ? <Link to ='/cart'><button  className="btn btn-danger">Check Out Your Food</button></Link> : <button disabled className="btn btn-secondary">Check Out Your Food</button>} */}
      </Router>     
      
    </UserContext.Provider>
  );
}

export default App;
