import React from 'react';

const FoodCartReview = (props) => {
    const handleRemoveFood = props.handleRemoveFood;
    const handleReduce = props.handleReduce;
    const {name, price, img, quantity, key} = props.food;
    return (
        <div className="d-flex  align-items-center">
            <div className="cart-container d-flex justify-content-around align-items-center">
                <img src={img} alt=""/>
                <div>
                    <h6>{name}</h6>
                    <h4 style={{color:'red'}}>${price * quantity}</h4>
                    <p style={{color:'gray'}}><small>delivery free</small></p>
                    
                </div>
                <h5><span onClick={()=> handleReduce(props.food)}>-</span> <span style={{backgroundColor:'white', borderRadius:'5px', padding:'0px 10px'}}>{quantity}</span> <span>+</span></h5>                
                <small><button onClick={()=>  handleRemoveFood(key)} className='btn btn-danger'>x</button></small>
            </div>
            
        </div>
    );
};

export default FoodCartReview;