import React from 'react'
import { Link } from 'react-router-dom';

const CardEvent = ({ data }) => {
    const { name, image, price, category, _id } = data
    // console.log(_id)
    // console.log(data);
    return (
        <div className="card border-secondary pt-3 col-10 col-md-5 col-xl-3">
            <img className="card-img-top w-100 h-50" src={image} alt="Title" />
            <div className="card-body d-flex flex-column justify-between pb-8">
                <div>
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">Price : {price}</p>
                    <p className="card-text">Category : {category.category}</p>
                </div>
                <Link to={"/event/" + _id} className="btn btn-secondary col-4 align-self-center">Details</Link>
            </div>
        </div>
    )
}

export default CardEvent