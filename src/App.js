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
import { useState } from 'react';
import Cart from './components/Cart/Cart';

function App() {

  const [cart, setCart] = useState([]);
  return (
    <div>
      <Router>
        <Header cart = {cart}></Header>
        <Switch>
          <Route path='/home'>
            <FoodItems cart={cart}></FoodItems>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/cart'>
            <Cart cart={cart}></Cart>
          </Route>
          <Route exact path='/'>
            <FoodItems></FoodItems>
          </Route>
          <Route path='/foodDetails/:foodKey/'>
            <FoodDetails setCart={setCart} cart = {cart}></FoodDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;
