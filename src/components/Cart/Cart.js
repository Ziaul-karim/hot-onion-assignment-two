import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import FoodCartReview from '../FoodCartReview/FoodCartReview';
import './Cart.css'

const Cart = (props) => {

    //const [cart, setCart] = useState([]);
    const {cart, setCart} = props;
    const history = useHistory();

    const proceedCheckout = () =>{
        history.push('/shipment')
    }

    const handleRemoveFood = foodKey => {
        const newCart = cart.filter(fd => fd.key !== foodKey);
        setCart(newCart);
        removeFromDatabaseCart(foodKey);
    }

    console.log(cart)

    const handleReduce = food =>{
        console.log('clicked', food)
        const newQuantity = food.quantity - 1;
        addToDatabaseCart(food.key, newQuantity);
        console.log(newQuantity)
    }

    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const foodKeys = Object.keys(savedCart)
        const cartFoods = foodKeys.map(key => {
            const food = fakeData.find(fd => fd.key === key);
            food.quantity = savedCart[key];
            return food;
        })
        setCart(cartFoods);
    },[])

    const totalPrice = cart.reduce((total, food) => total + food.price * food.quantity, 0);

    let delivery = 0;
    if(totalPrice > 20){
        delivery = 0;
    }
    else if(totalPrice > 10){
        delivery = 2;
    }
    else if(totalPrice > 0){
        delivery = 4;
    }
    return (
        <div className='cart-delivery-details'>
            <div className='delivery-details'>
                <div className='form-details'>
                    <h4> Edit Every Details</h4>
                    <form action="submit">
                        <input type="text" name='name' placeholder='' value='Deliver to Door'/>
                        <input type="text" name='name' placeholder='Deliver to Door' value='107 RD No 8'/>
                        <input type="text" name='name' placeholder='Flat, Suite of Floor'/>
                        <input type="text" name='name' placeholder='Business Name'/>
                        <textarea type="text" name='name' placeholder='Add Delivery Instructor'/>
                        <input type="submit" value="Save & Continue"/>
                    </form>
                </div>
                
            </div>
            <div className='cart-detail'>
                <div className='show-cart-container'>
                    <h4 style={{lineHeight:'40px'}}>From <b>Ghulshan Plaza</b></h4>
                    <h5 style={{lineHeight:'40px'}}>Arriving in 20-3- minutes</h5>
                    <h5>108 RD No 8</h5>
                </div>
                
                {
                    cart.map(fd => <FoodCartReview 
                        key = {fd.key}
                        handleRemoveFood = {handleRemoveFood}
                        food={fd}
                        handleReduce = {handleReduce}
                        ></FoodCartReview>)
                }
                <div className='show-cart-container d-flex justify-content-between'>
                    <div>
                        <h4>Sub Total</h4>
                        <h5>Tax</h5>
                        <h6>Delivery Fee</h6>
                        <h4>Total Price</h4>
                    </div>
                    <div>
                        <h4>0</h4>
                        <h5>$0</h5>
                        <h6>${delivery}</h6>
                        <h4>{totalPrice + delivery}</h4>
                    </div>
                </div>
                <div className='btn-div' style={{ width: '50%', margin: 'auto'}}>
                    {
                        cart.length >=1 ? 
                        <button onClick={proceedCheckout} className='place-order-btn btn btn-danger'>Proceed Checkout</button> : 
                        <button disabled onClick={proceedCheckout} className='place-order-btn btn btn-danger'>Proceed Checkout</button>
                    }
                </div>
            </div>            
        </div>
    );
};

export default Cart;