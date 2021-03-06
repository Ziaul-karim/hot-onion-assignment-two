import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import { addToDatabaseCart } from '../../utilities/databaseManager';
import './FoodDetails.css'

const FoodDetails = (props) => {
    const {foodKey} = useParams();
    const specificFoodDetails = fakeData.find(fd => fd.key === foodKey);
    const{name, price, img} = specificFoodDetails;
    const {cart, setCart} = props;
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = (foodItem) =>{
        const newCart = [...cart, foodItem];
        setCart(newCart);
        // const sameFood = newCart.filter(fd => fd.key === foodItem.key);
        // const count = sameFood.length;
        addToDatabaseCart(foodItem.key, quantity);
    }
    const handleMinus = (foodItem) =>{
        if(quantity <=1){
            const newQuantity = 1;
            setQuantity(newQuantity)
        }else{
            const newQuantity = quantity - 1;
            setQuantity(newQuantity)
        }
    }

    // const handlePlus = (foodItem) =>{
    //     const newQuantity = quantity + 1;
    //     setQuantity(newQuantity);
        
    // }
    return (
        <div className='details-area'>
            <div className='food-details'>
                <div className= 'details-align'>
                    <h1>{name}</h1><br/><br/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, aperiam quasi? Eveniet quasi eos facere, harum doloremque voluptatem dignissimos ad dolorem vitae tempore! Nihil soluta maxime amet eveniet voluptates dicta.</p>
                    <br/>
                    <div className="d-flex">
                        <h1 id='total-price'><span>$</span>{price * quantity}</h1>
                        <div className='quantity-control'>
                            <h4><span onClick={()=> handleMinus()} className='operator-btn'>-</span>{quantity}<span onClick={()=> setQuantity(quantity + 1)} className='operator-btn'>+</span></h4>
                        </div>
                    </div>
                    <br/><br/>
                    <button onClick={()=>handleAddToCart(specificFoodDetails)} className='btn-main'>ADD TO CART</button>
                </div>
                
            </div>
            <div className='food-details-image'>
                <img src={img} alt=""/>
            </div>
            
        </div>
    );
};

export default FoodDetails;