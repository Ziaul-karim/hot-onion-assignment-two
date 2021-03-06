import React from 'react';
import './Categorize.css';
import { Link } from 'react-router-dom';

const Categorize = (props) => {
    //console.log(props.food.name)
    const {name, img, details, price, key} = props.food
    return (
        <div className="col-xl-4 col-md-6 col-xs-12 mb-5">
            <Link to={'/foodDetails/' + key} style={{textDecoration:'none'}}>
                <div className="card">
                    <img className="card-img-top" src={img} alt="img"/>
                    <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{details}</p>
                    <h5><span>$</span>{price}</h5>
                    </div>
                </div>
            </Link>
        </div>
        
    );
};

export default Categorize;