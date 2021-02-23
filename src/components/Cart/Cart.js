import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)
    const totalPrice = cart.reduce((total, food) => total + food.price, 0);

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
        <div className='container' style={{marginTop:'100px'}}>
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
        </div>
    );
};

const ShowCart = (props) =>{
    const {img, name, price} = props.foodCart
    return(
        <div>
            <div className="cart-container d-flex justify-content-around align-items-center">
                <img src={img} alt=""/>
                <div>
                    <h6>{name}</h6>
                    <h4 style={{color:'red'}}>${price}</h4>
                    <p style={{color:'gray'}}><small>delivery free</small></p>
                </div>
                <h6><span>-</span> <span style={{backgroundColor:'white', borderRadius:'5px', padding:'0px 10px'}}>0</span> <span>+</span></h6>                
            </div>
            
        </div>
    );
};

export default Cart;