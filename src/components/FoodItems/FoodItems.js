import React, { useState } from 'react';
import './FoodItems.css'
import fakeData from '../../fakeData/index';
import Categorize from '../Categorize/Categorize';
import { Link } from 'react-router-dom';

const FoodItems = (props) => {

    
    const brFast = fakeData.filter(pd => pd.category === 'lunch')
    const [categorizedFood, setCategorizedFood] = useState(brFast);
    const [foodClass, setFoodClass] = useState('lunch');
    const {cart}=props;
    //console.log(categorizedFood);

    const foodList = fakeData;
    const filterFood = (id)=>{
        const filterFoodCategory = foodList.filter(pd => pd.category === id);
        setCategorizedFood(filterFoodCategory);
        setFoodClass(id);
    }

    return (
        <div>
            <div className="banner-image">
                <h1 className="banner-title">Best Food Waiting for Your Belly</h1>
            </div>
            <div className="foodCategorySection">
                <div className="food-container">
                    <ul className="food-category-nav-links">
                        <li onClick={()=> filterFood('breakfast')} className='categoryList'>
                            <span className={foodClass === 'breakfast' ? 'active' : 'categoryList'}>Breakfast</span> 
                        </li>
                        <li onClick={()=> filterFood('lunch')} className='categoryList'>
                            <span className={foodClass === 'lunch' ? 'active' : 'categoryList'}>Lunch</span> 
                        </li>
                        <li onClick={()=> filterFood('dinner')} className='categoryList'>
                            <span className={foodClass === 'dinner' ? 'active' : 'categoryList'}>Dinner</span> 
                        </li>
                    </ul>
                    <div className="row" style={{}}>
                        {
                            categorizedFood.map(ctFood => <Categorize 
                                key = {ctFood.key}
                                food = {ctFood}
                                ></Categorize>)
                        }
                    </div> 
                    <div className="text-center">
                        {cart.length ? <Link to ='/cart'><button  className="btn btn-danger">Check Out Your Food</button></Link> : <button disabled className="btn btn-secondary">Check Out Your Food</button>}   
                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default FoodItems;