import React from 'react';

const AllPetsItem = ({ petCollection }) => {
    const { pet_name, description, seller_name, posted_time, location, image } = petCollection;

    return (
        <div>
            <div>
                <div id="container">
                    <div className="product-details">
                        <h1>{pet_name}</h1>
                        <span className="hint-star star">
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star" aria-hidden="true"></i>
                            <i className="fa fa-star-o" aria-hidden="true"></i>
                        </span>
                        <p className="information"></p>
                        <h2 >Seller Name:{seller_name}</h2>
                        <h2 >Post Time: {posted_time}</h2>
                        <h2 >Location: {location}</h2>
                    </div>
                    <div className="product-image">

                        <img src={image} alt="" />
                    </div>
                    <div className="flex card-actions justify-start mt-5 mr-5">

                        <label

                            htmlFor="booking-modal"
                            className="btn border border-white shadow-sm shadow-slate-400 bg-white text-black w-full">View Details </label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AllPetsItem;